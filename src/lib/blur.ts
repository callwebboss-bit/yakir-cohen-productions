/**
 * Pre-computed base64 SVG placeholder for Next.js Image blur-up effect.
 * Prevents CLS (Cumulative Layout Shift) by filling space before the image loads.
 * Use: <Image placeholder="blur" blurDataURL={BLUR_DATA_URL} ... />
 */
export const BLUR_DATA_URL =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1Ij48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iI2U4ZThlOCIvPjwvc3ZnPg==";

/**
 * Tinted brand-red placeholder for hero images.
 */
export const BLUR_DATA_URL_DARK =
  "data:image/svg+xml;base64," +
  (typeof Buffer !== "undefined"
    ? Buffer.from(
        '<svg xmlns="http://www.w3.org/2000/svg" width="700" height="475"><rect width="700" height="475" fill="#1a1a1a"/></svg>'
      ).toString("base64")
    : "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1Ij48cmVjdCB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgZmlsbD0iIzFhMWExYSIvPjwvc3ZnPg==");
