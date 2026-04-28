import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REDIRECTS: Record<string, string> = {
  '/recording-studio': '/studio',
  '/studio-recording': '/studio',
  '/stuttering-treatment': '/clinic',
  '/stuttering-therapy': '/stuttering',
  '/academy-music': '/academy',
  '/dj-course': '/courses',
  '/production-course': '/courses',
  '/bride-blessing': '/attractions',
  '/groom-blessing': '/attractions',
  '/gift-card': '/voucher',
  '/gift-voucher': '/voucher',
  '/orders': '/voucher',
  '/gallery': '/',
  // Hebrew encoded paths (common ones)
  '/%D7%90%D7%95%D7%9C%D7%A4%D7%9F-%D7%94%D7%A7%D7%9C%D7%98%D7%95%D7%AA': '/studio',
  '/%D7%A4%D7%99%D7%AA%D7%95%D7%97-%D7%A7%D7%95%D7%9C': '/clinic',
  '/%D7%92%D7%9E%D7%92%D7%95%D7%9D': '/stuttering',
  '/%D7%A7%D7%95%D7%A8%D7%A1-%D7%93%D7%99%D7%92%D7%99%D7%99': '/courses',
  '/%D7%A7%D7%95%D7%A8%D7%A1-%D7%94%D7%A4%D7%A7%D7%94': '/courses',
  '/%D7%90%D7%98%D7%A8%D7%A7%D7%A6%D7%99%D7%95%D7%AA': '/attractions',
  '/%D7%A6%D7%95%D7%A8-%D7%A7%D7%A9%D7%A8': '/contact',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if we have a direct redirect
  if (REDIRECTS[pathname]) {
    const url = request.nextUrl.clone();
    url.pathname = REDIRECTS[pathname];
    return NextResponse.redirect(url, 301);
  }

  // Handle trailing slashes or case sensitivity if needed
  const lowerPath = pathname.toLowerCase().replace(/\/$/, '');
  if (REDIRECTS[lowerPath]) {
    const url = request.nextUrl.clone();
    url.pathname = REDIRECTS[lowerPath];
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
