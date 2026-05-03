/**
 * Counsel Validator
 * Automatic legal compliance check for marketing content
 * 
 * Scans all marketing copy, CTAs, and user-facing text for:
 * 1. Prohibited claims (false guarantees, empty superlatives)
 * 2. Privacy law compliance (Amendment 13, 2026)
 * 3. AI disclosure requirements
 * 4. Brand tone violations
 */

import fs from "fs";
import path from "path";

interface ValidationResult {
  file: string;
  status: "APPROVED" | "REJECTED" | "NEEDS_REVISION";
  violations: Violation[];
  suggestedFix?: string;
  timestamp: string;
}

interface Violation {
  type: "PROHIBITED_CLAIM" | "PRIVACY_MISSING" | "AI_UNDISCLOSED" | "TONE_VIOLATION";
  severity: "critical" | "warning";
  line?: number;
  text: string;
  reason: string;
  suggestion?: string;
}

interface ProhibitedClaim {
  name?: string;
  pattern: RegExp;
  type: string;
  severity: "critical" | "warning";
  reason: string;
  suggestion: string;
}

// ============================================================================
// PROHIBITED CLAIMS DATABASE
// ============================================================================

const PROHIBITED_CLAIMS: ProhibitedClaim[] = [
  // Category: Viral/Commercial Guarantees
  {
    pattern: /will\s+(reach|go|become|become|hit).*(viral|trending|1\s*million)/i,
    type: "PROHIBITED_CLAIM",
    severity: "critical",
    reason: "Outcome guarantee: viral/trending claims are algorithmic dependencies",
    suggestion:
      "Replace with: 'We create content designed for algorithmic engagement, but results depend on audience and platform factors.'",
  },
  {
    pattern: /guaranteed\s+(₪|ש"ח|\$|income|revenue|earnings|profit)/i,
    type: "PROHIBITED_CLAIM",
    severity: "critical",
    reason: "Income guarantee violates FTC/Israeli advertising standards",
    suggestion:
      "Replace with: 'Typical clients see [range] depending on [factors]' (requires data to back up).",
  },
  {
    pattern: /#1\s+(ranking|result|position|google|youtube|facebook)/i,
    type: "PROHIBITED_CLAIM",
    severity: "critical",
    reason: "SEO guarantee: platform algorithms are non-deterministic",
    suggestion:
      "Replace with: 'Target ranking: position 7–10 on [keyword] in [timeframe], pending algorithm updates.'",
  },
  {
    pattern: /definitely|certainly|will\s+absolutely|100%\s+guarantee|never\s+fail/i,
    type: "PROHIBITED_CLAIM",
    severity: "critical",
    reason: "Absolute outcome claims without conditions",
    suggestion:
      "Add qualifier: 'Typically,' 'Target,' 'Expected to' — and note conditions (algorithm updates, user actions, etc.)",
  },

  // Category: Copyright/IP Claims
  {
    pattern: /won't.*?copyright.*?strike|safe.*?copyright|immune.*?copyright|bypass.*?copyright/i,
    type: "PROHIBITED_CLAIM",
    severity: "critical",
    reason: "Copyright immunity claims are false; platform policies change",
    suggestion:
      "Replace with: 'All work is produced under [license]. Platform policies shift; consult legal counsel for specific use cases.'",
  },
  {
    pattern: /own\s+all.*?content|full.*?ownership|exclusive.*?rights/i,
    type: "PROHIBITED_CLAIM",
    severity: "warning",
    reason: "IP ownership claims require signed agreement",
    suggestion:
      "Clarify: 'Copyright assignments handled via separate IP agreement' or 'Subject to [specific license terms].'",
  },

  // Category: Empty Superlatives
  {
    pattern: /best.*in.*(world|israel|market|industry)|only.*?(studio|producer|method)/i,
    type: "PROHIBITED_CLAIM",
    severity: "warning",
    reason: "Unsubstantiated superlatives (unless backed by trademark/patent)",
    suggestion:
      "Replace with: '[X years] specializing in [specific domain]' or 'Unique approach combining [technique A] + [technique B].'",
  },
  {
    pattern: /\b(amazing|mind-blowing|revolutionary|unmatched|unbeatable|world-class)\b/i,
    type: "PROHIBITED_CLAIM",
    severity: "warning",
    reason: "Hype language contradicts brand minimalist tone",
    suggestion:
      "Replace with neutral language emphasizing craftsmanship: 'thoughtful,' 'detailed,' 'precise,' 'intentional.'",
  },

  // Category: Technical Guarantees
  {
    pattern: /complete\s+in\s+24\s+hours?|within\s+24\s+hours?|guaranteed\s+\d+\s*hour/i,
    type: "PROHIBITED_CLAIM",
    severity: "warning",
    reason: "Hard timeline without approval contingencies",
    suggestion:
      "Add condition: 'Typical turnaround: 48–72 hours pending client feedback on [milestone].'",
  },
  {
    pattern: /lcp.*?guaranteed|performance.*?guaranteed|never.*?need.*?update|flawlessly.*?forever/i,
    type: "PROHIBITED_CLAIM",
    severity: "warning",
    reason: "Technical guarantees unsustainable as platforms evolve",
    suggestion:
      "Qualify: 'Target LCP <1.5s on high-speed connections; ongoing optimization as frameworks evolve.'",
  },

  // Category: Privacy/Data Violations
  {
    pattern: /no.*?tracking|completely.*?private|never.*?share.*?data|100%.*?secure/i,
    type: "PRIVACY_MISSING",
    severity: "critical",
    reason: "Data handling claims require explicit disclosure",
    suggestion:
      "Add: 'We collect [X data] for [Y purposes]. See our privacy policy for details; you may request deletion anytime.'",
  },

  // Category: AI Disclosure
  {
    pattern: /\b(AI-assisted|AI-written|AI-generated|Claude|ChatGPT|Gemini)\b/i,
    type: "AI_UNDISCLOSED",
    severity: "warning",
    reason: "If AI text is used, transparency disclosure required",
    suggestion:
      "Add: '[AI-ASSISTED CONTENT] This text was created with AI assistance and reviewed by our team.'",
  },
];

// ============================================================================
// PRIVACY COMPLIANCE CHECKS
// ============================================================================

const PRIVACY_CHECKS: ProhibitedClaim[] = [
  {
    name: "Explicit Consent Language",
    pattern:
      /I\s+consent\s+to|agree\s+to\s+(?:receive|marketing)|explicitly\s+opt/i,
    type: "PRIVACY_MISSING",
    severity: "critical",
    reason: "Amendment 13, 2026: explicit consent required for data usage",
    suggestion:
      "Add unchecked checkbox: 'I consent to [specific use: lead follow-up, portfolio matching, etc.]'",
  },
  {
    name: "Data Retention Disclosure",
    pattern: /stored\s+for|retained\s+for|kept\s+for|\d+\s+(?:month|year|day)/i,
    type: "PRIVACY_MISSING",
    severity: "critical",
    reason: "Data retention period must be disclosed",
    suggestion: "Add: 'We store your data for [X months/years] for [purposes].'",
  },
  {
    name: "Right to Erasure",
    pattern: /delete.*?data|erase|remove.*?information|opt.*?out/i,
    type: "PRIVACY_MISSING",
    severity: "critical",
    reason: "Amendment 13: users must have delete option",
    suggestion:
      "Add: 'Request deletion anytime; process takes 7 business days. [Email/contact link]'",
  },
];

// ============================================================================
// VALIDATOR ENGINE
// ============================================================================

export class CounselValidator {
  private violations: Violation[] = [];

  /**
   * Main validation pipeline
   */
  async validate(filePath: string, content: string): Promise<ValidationResult> {
    this.violations = [];

    // Step 1: Check prohibited claims
    this.checkProhibitedClaims(content);

    // Step 2: Check privacy compliance
    this.checkPrivacy(content, filePath);

    // Step 3: Check AI disclosure (for AI-generated copy)
    this.checkAIDisclosure(content, filePath);

    // Step 4: Determine overall status
    const criticalCount = this.violations.filter(
      (v) => v.severity === "critical"
    ).length;
    const warningCount = this.violations.filter(
      (v) => v.severity === "warning"
    ).length;

    let status: "APPROVED" | "REJECTED" | "NEEDS_REVISION" = "APPROVED";
    if (criticalCount > 0) status = "REJECTED";
    else if (warningCount > 0) status = "NEEDS_REVISION";

    return {
      file: filePath,
      status,
      violations: this.violations,
      timestamp: new Date().toISOString(),
    };
  }

  private checkProhibitedClaims(content: string): void {
    const lines = content.split("\n");

    PROHIBITED_CLAIMS.forEach((claim) => {
      lines.forEach((line, index) => {
        if (claim.pattern.test(line)) {
          this.violations.push({
            type: "PROHIBITED_CLAIM",
            severity: claim.severity,
            line: index + 1,
            text: line.trim(),
            reason: claim.reason,
            suggestion: claim.suggestion,
          });
        }
      });
    });
  }

  private checkPrivacy(content: string, filePath: string): void {
    // Only check privacy for contact/form pages
    if (!filePath.includes("contact") && !filePath.includes("form")) {
      return;
    }

    PRIVACY_CHECKS.forEach((check) => {
      if (!check.pattern.test(content)) {
        this.violations.push({
          type: check.type as "PRIVACY_MISSING",
          severity: check.severity,
          text: `Missing: ${check.name}`,
          reason: check.reason,
          suggestion: check.suggestion,
        });
      }
    });
  }

  private checkAIDisclosure(content: string, filePath: string): void {
    // If content mentions AI tool but no disclosure, flag it
    if (/\b(Claude|ChatGPT|Gemini|AI-generated)\b/i.test(content)) {
      if (!/\[AI-ASSISTED/i.test(content)) {
        this.violations.push({
          type: "AI_UNDISCLOSED",
          severity: "warning",
          text: "AI tool mentioned but no disclosure label found",
          reason: "Transparency: users should know when AI assisted creation",
          suggestion:
            "Add: '[AI-ASSISTED CONTENT] This text was created with AI assistance and reviewed by our team.'",
        });
      }
    }
  }

  /**
   * Generate COUNSEL approval/rejection tag
   */
  generateTag(result: ValidationResult): string {
    const timestamp = new Date().toLocaleString("he-IL");

    if (result.status === "APPROVED") {
      return `[COUNSEL-APPROVED] — ${timestamp}\nNo violations found. Safe to commit.`;
    }

    if (result.status === "REJECTED") {
      return `[COUNSEL-REJECTED] — ${timestamp}\nCritical violations found. Do not merge.`;
    }

    // NEEDS_REVISION
    return `[COUNSEL-NEEDS-REVISION] — ${timestamp}\nWarnings found. Review and fix before commit.`;
  }

  /**
   * Format violations for human review
   */
  formatViolations(violations: Violation[]): string {
    if (violations.length === 0) return "✅ No violations.";

    const grouped = violations.reduce(
      (acc, v) => {
        if (!acc[v.severity]) acc[v.severity] = [];
        acc[v.severity].push(v);
        return acc;
      },
      {} as Record<"critical" | "warning", Violation[]>
    );

    let output = "";

    if (grouped.critical) {
      output += `\n🔴 CRITICAL (${grouped.critical.length}):\n`;
      grouped.critical.forEach((v, i) => {
        output += `  ${i + 1}. [Line ${v.line}] ${v.reason}\n`;
        output += `     Text: "${v.text}"\n`;
        output += `     Fix: ${v.suggestion}\n\n`;
      });
    }

    if (grouped.warning) {
      output += `\n🟡 WARNINGS (${grouped.warning.length}):\n`;
      grouped.warning.forEach((v, i) => {
        output += `  ${i + 1}. [Line ${v.line}] ${v.reason}\n`;
        output += `     Text: "${v.text}"\n`;
        output += `     Fix: ${v.suggestion}\n\n`;
      });
    }

    return output;
  }
}

// ============================================================================
// EXPORT FOR USE IN CI/CD
// ============================================================================

export async function validateMarketingFile(filePath: string): Promise<void> {
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    const validator = new CounselValidator();
    const result = await validator.validate(filePath, content);

    console.log(`\n${"=".repeat(70)}`);
    console.log(`COUNSEL REVIEW: ${path.basename(filePath)}`);
    console.log(`${"=".repeat(70)}`);
    console.log(`Status: ${result.status}`);
    console.log(`Time: ${result.timestamp}`);
    console.log(`\nViolations: ${result.violations.length}`);
    console.log(validator.formatViolations(result.violations));
    console.log(`\nTag: ${validator.generateTag(result)}`);
    console.log(`${"=".repeat(70)}\n`);

    // Exit with error code if rejected/needs revision
    if (result.status !== "APPROVED") {
      process.exit(1);
    }
  } catch (error) {
    console.error(`Error validating ${filePath}:`, error);
    process.exit(1);
  }
}
