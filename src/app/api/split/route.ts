import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { log } from "@/lib/logger";

// ─── Adapt these constants to match the actual StemSplit API ──────────────────
const API_BASE = process.env.STEMSPLIT_API_BASE ?? "https://api.stemsplit.io/v1";

function authHeaders() {
  return {
    Authorization: `Bearer ${process.env.STEMSPLIT_API_KEY ?? ""}`,
    Accept: "application/json",
  };
}

// ─── POST /api/split ──────────────────────────────────────────────────────────
// Body: FormData { file: File } OR JSON { url: string }
// Returns: { jobId: string }
export async function POST(req: NextRequest) {
  if (!process.env.STEMSPLIT_API_KEY) {
    log.error("split.config_missing", { reason: "STEMSPLIT_API_KEY not set" });
    return NextResponse.json({ error: "STEMSPLIT_API_KEY not configured" }, { status: 503 });
  }

  const requestId = crypto.randomUUID();

  try {
    const contentType = req.headers.get("content-type") ?? "";
    let uploadId: string;

    // ── 1. Upload the audio ──
    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      const file = form.get("file") as File | null;

      if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

      const ALLOWED = ["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/m4a", "audio/mp4", "audio/ogg", "audio/flac"];
      if (!ALLOWED.includes(file.type) && !file.name.match(/\.(mp3|wav|m4a|flac|ogg)$/i)) {
        return NextResponse.json({ error: "Unsupported file type" }, { status: 415 });
      }

      if (file.size > 50 * 1024 * 1024) {
        return NextResponse.json({ error: "File too large (max 50 MB)" }, { status: 413 });
      }

      const uploadForm = new FormData();
      uploadForm.append("file", file);

      const uploadRes = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: authHeaders(),
        body: uploadForm,
      });

      if (!uploadRes.ok) {
        const err = await uploadRes.text();
        log.error("split.upload_failed", { requestId, status: uploadRes.status, err: err.slice(0, 200) });
        return NextResponse.json({ error: "Upload failed" }, { status: uploadRes.status });
      }

      const uploadData = await uploadRes.json();
      uploadId = uploadData.id ?? uploadData.uploadId ?? uploadData.audioId;
      log.info("split.upload_ok", { requestId, uploadId, fileName: file.name, sizeBytes: file.size });

    } else {
      // URL-based submission
      const body = await req.json() as { url?: string };
      if (!body.url) return NextResponse.json({ error: "No URL provided" }, { status: 400 });

      log.info("split.url_submit", { requestId, url: body.url });

      const uploadRes = await fetch(`${API_BASE}/upload`, {
        method: "POST",
        headers: { ...authHeaders(), "Content-Type": "application/json" },
        body: JSON.stringify({ url: body.url }),
      });

      if (!uploadRes.ok) {
        log.error("split.url_upload_failed", { requestId, status: uploadRes.status });
        return NextResponse.json({ error: "URL upload failed" }, { status: uploadRes.status });
      }

      const uploadData = await uploadRes.json();
      uploadId = uploadData.id ?? uploadData.uploadId ?? uploadData.audioId;
      log.info("split.url_upload_ok", { requestId, uploadId });
    }

    // ── 2. Create the split job ──
    const jobRes = await fetch(`${API_BASE}/jobs`, {
      method: "POST",
      headers: { ...authHeaders(), "Content-Type": "application/json" },
      body: JSON.stringify({
        uploadId,
        outputType: "BOTH",   // "VOCALS" | "INSTRUMENTAL" | "BOTH"
        quality: "BEST",      // "STANDARD" | "HIGH" | "BEST"
      }),
    });

    if (!jobRes.ok) {
      const err = await jobRes.text();
      log.error("split.job_create_failed", { requestId, uploadId, status: jobRes.status, err: err.slice(0, 200) });
      return NextResponse.json({ error: "Failed to create job" }, { status: jobRes.status });
    }

    const jobData = await jobRes.json();
    const jobId = jobData.id ?? jobData.jobId;
    log.info("split.job_created", { requestId, uploadId, jobId });

    return NextResponse.json({ jobId }, { status: 202 });

  } catch (err) {
    log.error("split.post_error", { requestId, error: err instanceof Error ? err.message : String(err) });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ─── GET /api/split?id=<jobId> ────────────────────────────────────────────────
// Returns: { status, progress, vocals?, instrumental?, error? }
export async function GET(req: NextRequest) {
  if (!process.env.STEMSPLIT_API_KEY) {
    return NextResponse.json({ error: "STEMSPLIT_API_KEY not configured" }, { status: 503 });
  }

  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get("id");

  if (!jobId) {
    return NextResponse.json({ error: "Missing job id" }, { status: 400 });
  }

  try {
    const res = await fetch(`${API_BASE}/jobs/${jobId}`, {
      headers: authHeaders(),
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      log.warn("split.status_not_found", { jobId, httpStatus: res.status });
      return NextResponse.json({ error: "Job not found" }, { status: res.status });
    }

    const data = await res.json();

    // Log completed/failed jobs for observability
    if (data.status === "completed") {
      log.info("split.status_completed", { jobId, progress: data.progress });
    } else if (data.status === "failed") {
      log.error("split.status_failed", { jobId, error: data.error ?? data.message });
    }

    return NextResponse.json({
      status: data.status,
      progress: data.progress ?? null,
      vocals: data.vocals_url ?? data.vocals ?? data.vocalsUrl ?? null,
      instrumental: data.instrumental_url ?? data.instrumental ?? data.instrumentalUrl ?? null,
      error: data.error ?? data.message ?? null,
    });

  } catch (err) {
    log.error("split.get_error", { jobId, error: err instanceof Error ? err.message : String(err) });
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
