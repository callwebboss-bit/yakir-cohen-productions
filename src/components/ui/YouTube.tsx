import React from "react";

interface YouTubeProps {
  url: string;
  title: string;
}

function getYouTubeId(url: string) {
  const urlObj = new URL(url);

  if (urlObj.hostname.includes("youtu.be")) {
    return urlObj.pathname.slice(1);
  }

  return urlObj.searchParams.get("v") || null;
}

export default function YouTube({ url, title }: YouTubeProps) {
  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  return (
    <div className="relative group w-full max-w-5xl mx-auto my-12">
      <div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 via-white to-zinc-200 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-md shadow-2xl">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D42B2B] opacity-10 blur-3xl pointer-events-none"></div>
    </div>
  );
}
