---
category: Compliance
name: counsel-review
description: |
  **Counsel SKILL** — Automated legal compliance gatekeeper for Yakir Cohen Productions.
  
  **Role:** Block marketing content with false claims, privacy violations, or AI disclosure gaps.
  Ensure all copy meets Israeli Data Protection Law Amendment 13 (2026).
  
  **Trigger:** Automatically scans PRs, commit messages, and .tsx/.md marketing files.
  Manual trigger: `@counsel: review this copy`

---

# 🛡️ Counsel Review - Legal Gatekeeper SKILL

## Overview

**Counsel** is the legal & ethical guardian of Yakir Cohen's reputation. Every piece of marketing copy, CTA, or customer-facing text must pass Counsel review before commit.

### What Counsel Does
- ✅ Scans for **prohibited claims** (false guarantees, empty superlatives, copyright immunity claims)
- ✅ Verifies **privacy compliance** (Amendment 13, 2026: explicit consent, data retention, deletion rights)
- ✅ Checks **AI disclosure** (if AI-written, transparency label required)
- ✅ Tags approved content with `[COUNSEL-APPROVED]`
- ✅ Blocks rejected content until violations fixed

### What Counsel Does NOT Do
- ❌ Rewrite copy (Counsel suggests, Storyteller implements)
- ❌ Design UI (that's Visualizer)
- ❌ Optimize performance (that's Optimizer)
- ❌ Check code syntax (that's Guardian)

---

## Prohibited Claims (Critical Violations)

### 1. Viral/Commercial Guarantees
Counsel **rejects** claims that guarantee outcomes dependent on algorithms, user behavior, or market forces.

**❌ Prohibited:**
- "This will reach 1 million views"
- "Your podcast will generate ₪50k in first month"
- "Guaranteed #1 ranking on Google"
- "Definitely will go viral"

**✅ Approved Alternative:**
- "We create content optimized for platform algorithms; engagement depends on audience and promotional strategy."
- "Many of our clients see [specific range] views in [timeframe] with sustained promotion."
- "Target ranking: position 7–10 on [keyword] in [timeframe], pending algorithm updates."

**Counsel Check:** Regex scans for `"will|guarantee|guaranteed|definitely|certainly"` paired with `"viral|trending|₪|income|ranking"`

---

### 2. Copyright & Intellectual Property Claims
Counsel **rejects** claims about copyright immunity or ownership without legal agreement.

**❌ Prohibited:**
- "Won't get copyright strikes"
- "You'll own all content once produced"
- "Safe from DMCA takedown"
- "Immune to copyright detection"

**✅ Approved Alternative:**
- "All work is produced under [specific license: e.g., work-for-hire agreement]. Copyright assignments handled via IP agreement."
- "Platform policies change; we advise consulting legal counsel for specific use cases."

**Counsel Check:** Flags `"copyright|IP|ownership"` claims without qualification or contract reference.

---

### 3. Empty Superlatives & Unsubstantiated Claims
Counsel **rejects** claims of superiority without metrics, credentials, or proof (trademark, patent, awards).

**❌ Prohibited:**
- "Best studio in the world"
- "Only ones offering this method"
- "Unmatched quality"
- "Revolutionary approach"

**✅ Approved Alternative:**
- "15+ years specializing in [specific domain]."
- "Unique combination of [technique A] + [technique B]; distinctive in market for [specific reason with evidence]."
- "Our meticulous approach emphasizes [specific process details]."

**Counsel Check:** Flags `"best|only|unmatched|revolutionary|mind-blowing|incredible|amazing"` unless paired with metric/credential.

---

### 4. Technical Guarantees & Unrealistic Timelines
Counsel **rejects** promises about performance, delivery, or maintenance without conditions.

**❌ Prohibited:**
- "Complete in 24 hours"
- "LCP guaranteed under 1.5 seconds"
- "Site will never need updates"
- "Code works flawlessly forever"

**✅ Approved Alternative:**
- "Typical turnaround: 48–72 hours pending client feedback on [checkpoint]."
- "Target LCP: <1.5s on high-speed connections; depends on image optimization, CDN, and device."
- "Ongoing optimization ensures framework/platform compatibility as they evolve."

**Counsel Check:** Flags `"guarantee|100%|never|forever"` in technical contexts without qualifiers.

---

## Privacy Compliance (Amendment 13, 2026)

### Required Consent Language
For **all contact/form pages**, Counsel verifies these elements:

1. **Explicit Opt-In (Not Bundled)**
   - ❌ Checkbox pre-ticked
   - ❌ Buried in Terms & Conditions
   - ✅ Separate, unchecked checkbox
   - ✅ Clear language: "I consent to [specific use]"

2. **Data Retention Disclosure**
   - Must state: "We store your data for [X months/years]"
   - Must state: "Used for [specific purposes]"
   - Example: "Your email is stored for 12 months for lead follow-up and portfolio matching."

3. **Right to Erasure**
   - Must include: "Request deletion anytime"
   - Must specify: "Process takes 7 business days"
   - Must provide: Contact link/email for deletion requests

4. **AI Disclosure (if applicable)**
   - If content is AI-assisted: Add `[AI-ASSISTED CONTENT]` label
   - Example: "[AI-ASSISTED CONTENT] This text was created with AI assistance and reviewed by our team."

### Counsel Checklist for Contact Pages
```
[ ] Explicit consent checkbox present (unchecked)
[ ] Consent language clear: "I consent to [specific use]"
[ ] Data retention period stated (e.g., "12 months")
[ ] Data purposes disclosed (e.g., "lead follow-up, portfolio matching")
[ ] Right to deletion stated: "Request deletion anytime"
[ ] Deletion process: "7 business days"
[ ] Contact link for deletion requests present
[ ] Privacy policy linked
[ ] No pre-ticked boxes
[ ] Hebrew language options available
```

---

## AI Disclosure Requirements

If **any AI tool** is used to generate content (Claude, ChatGPT, Gemini, etc.), **transparency label required**.

### Disclosure Format
```markdown
[AI-ASSISTED CONTENT]
This text was created with AI assistance and reviewed by our team.
Factual claims are verified; creative direction remains human-led.
```

### Where to Place
- **Marketing copy:** Top of document
- **Email campaigns:** Beginning of body text
- **Web copy:** Visible on page (sidebar, footer, or note)
- **Social media:** In caption or first comment

### Counsel Check
Counsel scans for mentions of `"Claude|ChatGPT|Gemini|AI-generated"` without corresponding `[AI-ASSISTED CONTENT]` label.

---

## Workflow: How Content Gets Reviewed

### Automatic Trigger
```
Developer commits marketing content
  ↓
Pre-commit hook runs counsel-validator.ts
  ↓
Counsel scans for prohibited claims, privacy gaps, AI disclosure
  ↓
Status:
  ✅ APPROVED → [COUNSEL-APPROVED] tag added → commit succeeds
  ⚠️ NEEDS-REVISION → [COUNSEL-NEEDS-REVISION] tag → commit blocked, suggestions shown
  ❌ REJECTED → [COUNSEL-REJECTED] tag → commit blocked, must fix critical violations
```

### Manual Review
When in doubt, invoke Counsel directly:
```
@counsel: review this copy for prohibited claims
```

Counsel will:
1. Check against prohibited claims database
2. Check privacy compliance if contact/form page
3. Check AI disclosure if AI-written
4. Return formatted report with violations and fixes

---

## Counsel Output Format

### If Approved
```
[COUNSEL-APPROVED] — April 29, 2026 14:35
No violations found. Safe to commit.
```

### If Needs Revision
```
[COUNSEL-NEEDS-REVISION] — April 29, 2026 14:35

🟡 WARNINGS (2):
  1. [Line 12] Unsubstantiated superlative
     Text: "We're the best studio in Israel"
     Fix: Add credential: "15+ years specializing in music production"

  2. [Line 45] Missing AI disclosure
     Text: "Content mentions Claude but no disclosure label"
     Fix: Add: "[AI-ASSISTED CONTENT] This text was created with AI assistance..."

→ Fix warnings and re-submit
```

### If Rejected
```
[COUNSEL-REJECTED] — April 29, 2026 14:35

🔴 CRITICAL (3):
  1. [Line 8] Outcome guarantee
     Text: "Guaranteed to go viral"
     Fix: Replace with: "We optimize for algorithmic engagement, but results depend on audience..."

  2. [Line 22] Copyright immunity claim
     Text: "Won't get copyright strikes"
     Fix: Replace with: "Platform policies shift; consult legal counsel..."

  3. [Line 33] Missing privacy consent
     Text: "Contact form has no consent checkbox"
     Fix: Add explicit opt-in: "I consent to [specific use]"

→ Critical violations must be fixed before merge
```

---

## Integration with Other Agents

### Storyteller → Counsel
```
Storyteller drafts marketing copy
  ↓ [DRAFT]
  ↓ Counsel reviews → [COUNSEL-APPROVED] or [NEEDS-REVISION]
  ↓
If rejected: Storyteller revises
If approved: Copy goes to Visualizer + Converter
```

### Converter → Counsel
```
Converter designs CTA + form
  ↓ [DRAFT]
  ↓ Counsel reviews (privacy compliance check)
  ↓ [COUNSEL-APPROVED]
  ↓ Guardian code review
  ↓ DEPLOY
```

### Guardian ↔ Counsel
- **Guardian** ensures code security, accessibility
- **Counsel** ensures legal/ethical compliance
- **Peers:** Either can escalate to project lead if unresolved

---

## Command Reference

### For Developers
```bash
# Manual validation of a file
npx tsx src/agents/counsel-validator.ts <file_path>

# Or in code:
import { CounselValidator } from "@/agents/counsel-validator";

const validator = new CounselValidator();
const result = await validator.validate("path/to/file.tsx", contentText);
console.log(validator.generateTag(result));
```

### For Agents
```
@counsel: review [file_path]
@counsel: check this copy for prohibited claims
@counsel: verify privacy compliance on contact page
```

---

## FAQ

**Q: What if my claim is borderline?**  
A: Ask Counsel explicitly: `@counsel: is this claim acceptable?` Counsel will review context and suggest fixes.

**Q: Can I override Counsel's rejection?**  
A: No. Counsel rejections protect Yakir Cohen's reputation. If you disagree, escalate to project lead for legal review.

**Q: What if I'm not sure if something needs consent?**  
A: Default to consent. Amendment 13 requires explicit opt-in for any data usage. Better safe than fined.

**Q: Can I use generic privacy language?**  
A: No. Amendment 13 requires specific disclosure: data retention period, usage purposes, deletion option.

**Q: How do I add Counsel review to CI/CD?**  
A: Add pre-commit hook or GitHub Actions that runs `counsel-validator.ts` on marketing files before merge.

---

## Version History
| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Apr 29, 2026 | Initial Counsel SKILL; Amendment 13 compliance |

---

**Contact:** Counsel agent or project lead for legal escalations.
