/**
 * Sections Demo Page — for review only, delete before shipping.
 * Renders all 23 sections in sequence so you can eyeball the full library.
 */
import {
  PricingTable,
  ProductGrid,
  FeaturedProduct,
  Upsell,
  DiscountBanner,
  CTABanner,
  MultiStepForm,
  SurveyFeedback,
  DownloadResource,
  FeatureList,
  ProcessSteps,
  VideoSection,
  ArticleFeed,
  AudioPlayer,
  BeforeAfterSlider,
  ImageSlider,
  MegaFooter,
  SearchBar,
  FloatingButton,
  NotificationBar,
  BusinessHours,
  SocialShare,
} from '@/components/sections';

// CookieConsent is fixed-position; render separately below
import CookieConsent from '@/components/sections/CookieConsent';

export const metadata = {
  title: 'Sections Demo — יקיר כהן',
  robots: 'noindex',
};

export default function SectionsDemoPage() {
  return (
    <main dir="rtl" className="flex flex-col bg-surface">
      {/* E1 — Notification bar sticks to the top */}
      <NotificationBar />

      {/* A — Sales & Conversion */}
      <PricingTable />
      <ProductGrid />
      <FeaturedProduct />

      <div className="bg-surface px-[60px] py-[30px]">
        <DiscountBanner />
      </div>

      <Upsell />
      <CTABanner />

      {/* B — Forms */}
      <MultiStepForm />
      <SurveyFeedback />
      <DownloadResource />

      {/* C — Content / SEO */}
      <FeatureList />
      <ProcessSteps />
      <VideoSection />
      <ArticleFeed />
      <AudioPlayer />

      {/* D — Visuals & Navigation */}
      <BeforeAfterSlider />
      <ImageSlider />
      <SearchBar />

      {/* E — Service & Status */}
      <BusinessHours />
      <SocialShare />

      {/* D3 — Footer is the last full-width section */}
      <MegaFooter />

      {/* Fixed-position elements (rendered last so z-index works) */}
      <FloatingButton />
      <CookieConsent />
    </main>
  );
}
