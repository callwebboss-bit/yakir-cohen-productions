# Sections Library Agent — src/components/sections/

You are a sections integration specialist for the **Yakir Cohen Productions** website.
This library contains **23 modular sections** ready to drop into any page.

## Your job

When asked to work on a specific page, pick the right sections, import them, and compose
the page. Use the decision table below. **Do not invent new sections** — use what's here.

---

## Import pattern

```tsx
// Single import — barrel covers all 23 sections
import { PricingTable, CTABanner, FeatureList } from '@/components/sections';

// Fixed-position elements (rendered outside the main flow)
import FloatingButton from '@/components/sections/FloatingButton';
import CookieConsent  from '@/components/sections/CookieConsent';
```

All sections are `dir="rtl"` and use project tokens (`bg-surface`, `text-brand-red`,
`font-serif`, `font-sans`). **Do not add Tailwind overrides** that break RTL.

---

## The 23 sections

### Group A — Sales & Conversion

| Component | When to use | Key props |
|-----------|-------------|-----------|
| `PricingTable` | Every pricing/studio page | `tiers?: Tier[]` |
| `ProductCard` | Single product card (use inside grids) | `product?: ProductCardData` |
| `ProductGrid` | Vouchers / gifts page | `products?: ProductCardData[]` |
| `FeaturedProduct` | Hero service on studio pages | — |
| `Upsell` | After pricing or checkout flow | — |
| `DiscountBanner` | Promotions, limited offers | — |
| `CTABanner` | End of every service page. Always. | — |

### Group B — Forms & Interaction

| Component | When to use | Key props |
|-----------|-------------|-----------|
| `MultiStepForm` | Contact / booking pages | — |
| `SurveyFeedback` | Thank-you pages, end of long pages | — |
| `DownloadResource` | Lead magnets, resources page | — |

### Group C — Value & Content (SEO)

| Component | When to use | Key props |
|-----------|-------------|-----------|
| `FeatureList` | Studio pages, service pages | `features?: Feature[]` |
| `ProcessSteps` | Any "how it works" section | `steps?: Step[]` |
| `VideoSection` | Studio pages, landing pages | `videoSrc`, `thumbnailSrc` |
| `ArticleFeed` | Home page, blog index | `articles?: Article[]`, `allArticlesHref` |
| `AudioPlayer` | Podcast, portfolio pages | `title`, `coverSrc`, etc. |

### Group D — Visuals & Navigation

| Component | When to use | Key props |
|-----------|-------------|-----------|
| `BeforeAfterSlider` | Studio / mixing service pages | — |
| `ImageSlider` | Portfolio, gallery pages | `slides?: Slide[]` |
| `MegaFooter` | Replace `<Footer />` on full pages | — |
| `SearchBar` | Blog index, search page | `onSearch?: (q: string) => void` |
| `FloatingButton` | **Every page** in the root layout | `message?` |

### Group E — Service & Status

| Component | When to use | Key props |
|-----------|-------------|-----------|
| `NotificationBar` | **Root layout top** for active promos | `message`, `linkHref` |
| `CookieConsent` | **Root layout** (shows once) | `onAccept`, `onEssentialOnly` |
| `BusinessHours` | Contact page, studio pages | `hours?: DayHours[]` |
| `SocialShare` | Blog posts, portfolio pages | `url`, `title` |

---

## Page recipes (copy-paste starters)

### Studio service page (e.g. `/studio/recording-song-modiin`)

```tsx
import {
  FeatureList, ProcessSteps, PricingTable,
  VideoSection, BeforeAfterSlider, CTABanner,
  ImageSlider, SocialShare,
} from '@/components/sections';

export default function Page() {
  return (
    <main dir="rtl" className="flex flex-col bg-surface">
      {/* hero is in the existing page layout */}
      <FeatureList />
      <ProcessSteps />
      <VideoSection videoSrc="https://youtube.com/watch?v=YOUR_ID" />
      <BeforeAfterSlider />
      <ImageSlider />
      <PricingTable />
      <CTABanner />
      <SocialShare />
    </main>
  );
}
```

### Pricing page (`/studio/pricing`)

```tsx
import { PricingTable, Upsell, DiscountBanner, CTABanner, MultiStepForm } from '@/components/sections';

export default function Page() {
  return (
    <main dir="rtl" className="flex flex-col bg-surface">
      <PricingTable />
      <Upsell />
      <div className="bg-surface px-[60px] py-8">
        <DiscountBanner />
      </div>
      <MultiStepForm />
      <CTABanner />
    </main>
  );
}
```

### Blog post (`/blog/[slug]`)

```tsx
import { ArticleFeed, DownloadResource, CTABanner, SocialShare, SurveyFeedback } from '@/components/sections';

// At the bottom of the post:
<DownloadResource />
<SurveyFeedback />
<CTABanner />
<ArticleFeed />   {/* "more posts" */}
<SocialShare />
```

### Contact page (`/contact`)

```tsx
import { MultiStepForm, BusinessHours, CTABanner } from '@/components/sections';

<MultiStepForm />
<BusinessHours />
<CTABanner />
```

### Home page additions (after hero)

```tsx
import { FeatureList, VideoSection, ArticleFeed, PricingTable, CTABanner } from '@/components/sections';

<FeatureList />
<VideoSection />
<PricingTable />
<ArticleFeed />
<CTABanner />
```

### Portfolio / gallery page

```tsx
import { ImageSlider, BeforeAfterSlider, AudioPlayer, ProductGrid, CTABanner } from '@/components/sections';

<ImageSlider />
<BeforeAfterSlider />
<AudioPlayer />
<ProductGrid />
<CTABanner />
```

---

## Root layout additions (do once, global)

Add to `src/app/layout.tsx` inside `<body>` — **above** `{children}`:

```tsx
import NotificationBar from '@/components/sections/NotificationBar';

// Inside <body>:
<NotificationBar message="מבצע אביב: 15% הנחה על הקלטת שיר. עד יום שישי" linkHref="/studio/pricing" />
{children}
```

Add **after** `{children}`:

```tsx
import FloatingButton from '@/components/sections/FloatingButton';
import CookieConsent  from '@/components/sections/CookieConsent';

<FloatingButton />
<CookieConsent />
```

---

## Rules

1. **H2 = section title, H3 = card/item title.** Never reverse. The global h2/h3 clamp()
   styles in globals.css apply automatically.

2. **All text is Hebrew** (already written in the components). Don't translate or change
   prices/promises without approval.

3. **Images**: all `src="/sections/placeholder.svg"` values must be replaced with real
   assets from `public/` before going to production. Use:
   ```tsx
   <Image src="/studio/recording-room.jpg" ... />
   ```

4. **WhatsApp number** is hardcoded as `972587555456` in `_shared.tsx`.
   Change there only — it propagates to all sections.

5. **Client components** (`'use client'`) are already marked. Server Components can import
   them freely — Next.js handles the boundary automatically.

6. **Shadows**: use `brand-shadow` (featured card), `brand-shadow-sm`, `brand-shadow-card`
   (subtle). Do NOT use Tailwind arbitrary `shadow-[...]` for brand shadows.

7. **Icons**: import from `@/components/icons`, not from lucide-react.

---

## Adding a new section

1. Create `src/components/sections/MySectionName.tsx`
2. Export default function
3. Add `'use client'` only if you use `useState` / `useEffect`
4. Add to `src/components/sections/index.ts`
5. Add a row to this file's decision table

---

## Demo page

Visit `/sections-demo` locally to see all 23 sections rendered in sequence.
Delete `src/app/sections-demo/` before production deploy.
