// Sections Library v2 — barrel exports
// 23 sections across 5 groups, ready for Next.js 15 App Router.
//
// Usage:
//   import { PricingTable, CTABanner } from '@/components/sections';
//
// "use client" is already marked on components that require browser state.
// Server Components can import any of these — Next.js handles the boundary.

// ── Group A · Sales & Conversion ──────────────────────────────────
export { default as PricingTable }     from './PricingTable';
export { default as ProductCard }      from './ProductCard';
export { default as ProductGrid }      from './ProductGrid';
export { default as FeaturedProduct }  from './FeaturedProduct';
export { default as Upsell }           from './Upsell';
export { default as DiscountBanner }   from './DiscountBanner';
export { default as CTABanner }        from './CTABanner';

// ── Group B · Forms & Interaction ─────────────────────────────────
export { default as MultiStepForm }    from './MultiStepForm';
export { default as SurveyFeedback }   from './SurveyFeedback';
export { default as DownloadResource } from './DownloadResource';

// ── Group C · Value & Content (SEO) ───────────────────────────────
export { default as FeatureList }      from './FeatureList';
export { default as ProcessSteps }     from './ProcessSteps';
export { default as VideoSection }     from './VideoSection';
export { default as ArticleFeed }      from './ArticleFeed';
export { default as AudioPlayer }      from './AudioPlayer';

// ── Group D · Visuals & Navigation ────────────────────────────────
export { default as BeforeAfterSlider } from './BeforeAfterSlider';
export { default as ImageSlider }      from './ImageSlider';
export { default as MegaFooter }       from './MegaFooter';
export { default as SearchBar }        from './SearchBar';
export { default as FloatingButton }   from './FloatingButton';

// ── Group E · Service & Status ────────────────────────────────────
export { default as NotificationBar }  from './NotificationBar';
export { default as CookieConsent }    from './CookieConsent';
export { default as BusinessHours }    from './BusinessHours';
export { default as SocialShare }      from './SocialShare';

// ── Group F · Premium Abbey Road Inspired ─────────────────────────
export { default as HeroSection }      from './HeroSection';
export { default as ServiceGrid }      from './ServiceGrid';
export { default as LegacyTimeline }   from './LegacyTimeline';
export { default as EquipmentMarquee } from './EquipmentMarquee';
