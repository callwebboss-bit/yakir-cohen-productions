# 🏗️ Yakir Cohen Productions - Codebase Quick Reference

## Quick Start for AI Agents

### 🎯 Project Essentials
- **Framework:** Next.js 15.1 (App Router) + React 19
- **Language:** Hebrew-first RTL, responsive mobile-first
- **Styling:** Tailwind CSS 4 with logical properties
- **Key Dep:** `@google/genai` (Gemini AI ready), `motion` (animations), `lucide-react` (icons)
- **Build:** `npm run dev` (port 3000), `npm run build`, `npm run start`

### 📁 Core File Locations
```
src/
├── app/              # Routes (all pages here)
├── components/       # React components (Navigation, GalAssistant, etc.)
├── lib/              # types.ts, utils.ts, actions/send-lead.ts
├── constants/        # attractions.ts (pricing logic)
├── content/          # portfolio/ (JSON files), config.ts (loaders)
└── agents/           # (Empty for now)
```

### 🛣️ Key Routes & Entry Points
| Route | File | Purpose |
|-------|------|---------|
| `/` | `app/page.tsx` | Hero + categories grid |
| `/studio` | `app/studio/page.tsx` | Studio showcase |
| `/attractions` | `app/attractions/page.tsx` | Event attractions calculator |
| `/portfolio/[slug]` | `app/portfolio/[slug]/page.tsx` | Dynamic project detail |
| `/weddings/songs` | `app/weddings/songs/page.tsx` | Song catalog |

### 🔴 Brand Colors & Typography
```css
--brand-red: #D42B2B
--background: #FAFAF8
--text-primary: #1A1A1A
--font-serif: Frank Ruhl Libre (headings)
--font-sans: Heebo (body)
```

### 💰 Pricing Model (Attractions Calculator)
```
1 attraction: ₪1,750
2 attractions: ₪3,200
3 attractions: ₪4,450
4+ attractions: ₪5,500 (+ FREE 60s highlights clip)

Geo surcharges:
- Center: ₪0
- North/South: ₪800
- Eilat/Golan: ₪1,800
```

---

## 🏗️ Architecture Patterns

### Component Structure
```tsx
// Every page follows this pattern:
import { Metadata } from "next";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Page Title | יקיר כהן הפקות",
  description: "SEO description",
  alternates: { canonical: "https://..." },
  openGraph: { /* ... */ }
};

const pageSchema = { "@context": "https://schema.org", /* ... */ };

export default function PageName() {
  return (
    <div>
      <StructuredData data={pageSchema} />
      {/* Page content */}
    </div>
  );
}
```

### Data Patterns
```typescript
// Static data → TypeScript interfaces
interface Attraction {
  id: string;
  slug: string;
  name: string;
  seoDesc: string;
  category: AttractionCategory;
  icon: string;
}

// Portfolio items → JSON files + async loader
// src/content/portfolio/{slug}.json loaded by getPortfolioCollection()

// Server actions → WhatsApp redirect
// src/lib/actions/send-lead.ts: builds message, returns wa.me URL
```

### Client Components
- Marked with `"use client"` string at top
- Local state only (useState, useCallback)
- No global state manager
- Form actions redirect to WhatsApp

---

## 🎨 Styling Checklist

### RTL & Responsive
- Use logical properties: `ps-`, `pe-`, `ms-`, `me-` (not pl, pr, ml, mr)
- Test on 375px mobile width (Israel market primary)
- Images from `/public/assets/images/` (WebP/AVIF preferred)

### Glass Effect (Common Pattern)
```tsx
className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl"
```

### Animations (Motion Library)
```tsx
import { motion, AnimatePresence } from "motion/react";

<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {children}
    </motion.div>
  )}
</AnimatePresence>
```

---

## 🔄 Middleware & Redirects

**Purpose:** Handle legacy URLs + semantic search

**File:** `middleware.ts`

**Logic:**
1. Check exact match in `src/data/redirections.json`
2. Apply semantic redirects (Hebrew + English keywords)
3. Fallback: Unknown path → `/?q={keywords}` for search
4. Bypass: Asset files (.png, .css, .json, .xml)

**Example Redirects:**
```json
{
  "/chupa": "/weddings/songs",
  "/recording-studio": "/studio",
  "/חתונה": "/weddings/songs"
}
```

---

## 🤖 Gemini AI Integration

**Setup:**
1. Set `GEMINI_API_KEY` in `.env.local`
2. Import: `import { GoogleGenerativeAI } from "@google/genai"`
3. Usage: `GalAssistant.tsx` (currently mock, ready for real API calls)

**Current Pattern:**
- Chat widget collects user input
- Sends to Gemini (when activated)
- Response → WhatsApp option

---

## 📝 Important Dev Rules

### ⚠️ CRITICAL: From AGENTS.md
**Before writing any code, read official Next.js 15 docs:**
- `/node_modules/next/dist/docs/`
- Use ONLY v15 APIs, patterns, and conventions
- No legacy v13/v14 patterns

### Code Standards
1. **Atomic Changes:** Surgical edits, not full-file rewrites
2. **Type Safety:** All functions typed, interfaces defined
3. **Performance:** LCP < 1.5s, images lazy-loaded
4. **RTL First:** Hebrew text, RTL direction
5. **Accessibility:** Semantic HTML, ARIA labels

---

## 🚀 Common Tasks

### Add New Page
```bash
# 1. Create route
touch src/app/new-page/page.tsx

# 2. Add metadata + schema
# (Copy template from existing page)

# 3. Export default component
export default function NewPage() { /* ... */ }

# 4. Rebuild & test
npm run build
```

### Add Attraction
```typescript
// src/constants/attractions.ts
export const ATTRACTIONS: Attraction[] = [
  {
    id: 'my-attraction',
    slug: 'my-attraction',
    name: 'My Attraction',
    shortDesc: 'Quick description',
    seoDesc: 'Long SEO description for search...',
    metaKeywords: ['keyword1', 'keyword2'],
    category: 'atmosphere',
    icon: '🎊',
    recommended: true,
  },
  // ... existing attractions
];
```

### Add Portfolio Item
```bash
# 1. Create JSON file
touch src/content/portfolio/my-project.json

# 2. Add to JSON
{
  "title": "My Project",
  "publishDate": "2026-04-29",
  "youtubeUrl": "https://youtube.com/...",
  "category": "דיוג'יי",
  "description": "Project description",
  "tags": ["tag1", "tag2"],
  "slug": "my-project"
}

# 3. Rebuild (generateStaticParams picks it up)
npm run build
```

### Test RTL on Mobile
```bash
# Use DevTools device emulation (375px width)
# OR deploy to staging & test on actual Hebrew device
```

---

## 🧪 Debugging Tips

### Check Middleware Redirects
- Middleware runs on ALL requests (except API)
- Test legacy URLs in browser
- Check `middleware.ts` for redirect logic

### Portfolio Pages Not Showing
- Ensure `slug` in JSON matches filename (without .json)
- Run `npm run build` (generateStaticParams must run)
- Check `src/content/portfolio/{slug}.json` exists

### Styling Issues (RTL)
- Use logical properties (`ps-`, `pe-`)
- Test both LTR (English) and RTL (Hebrew) text
- Check `scale-rtl` on transformed elements

### Performance Issues
- Use Lighthouse (DevTools)
- Check Image optimization (Next.js Image component)
- Verify font preconnect in layout.tsx
- Monitor LCP with WebVitals

---

## 📊 Type System Quick Ref

### Core Types (`src/lib/types.ts`)
```typescript
type Page = 'home' | 'studio' | 'clinic' | 'attractions' | 'vip' | 'courses' | 'voucher';

interface Attraction {
  id: string;
  title: string;
  price: number;
  desc: string;
  category: string;
  icon: string;
}

interface LeadPayload {
  name: string;
  phone: string;
  service: string;
  selections: string[];
  totalPrice: number;
  notes?: string;
}
```

### Component Props (Pattern)
```typescript
interface MyComponentProps {
  title: string;
  onSubmit?: (data: FormData) => void;
  children?: React.ReactNode;
}

export default function MyComponent({ title, onSubmit, children }: MyComponentProps) {
  // ...
}
```

---

## 🎯 Next Steps (AI Agents)

1. **Understand Pricing:** Bundle tiers + geo fees + gift logic
2. **Test Redirects:** Verify middleware handles all legacy URLs
3. **SEO Validation:** Check JSON-LD on each page
4. **RTL Polish:** Verify Hebrew + Arabic text rendering
5. **Gemini Setup:** Activate AI chat with real API key
6. **Performance Audit:** Lighthouse > 90 on mobile
7. **Mobile Test:** 375px width, touch interactions

---

## 📞 Contact & Workflow

**WhatsApp:** +972587555456 (all leads go here)
**Studio:** רחוב היובל 15, מודיעין-מכבים-רעות
**Hours:** Sun-Thu 10-20, Fri 10-14

**Lead Flow:** Form → buildMessage() → wa.me redirect → WhatsApp

---

**Last Updated:** April 29, 2026
**Version:** Next.js 15.1.0 | React 19 | Tailwind 4
