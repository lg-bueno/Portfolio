import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['pt', 'en', 'es', 'ja', 'ru', 'fr', 'de', 'ko'];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Se for a raiz, redireciona para português
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/pt', request.url));
  }
  
  // Verifica se o pathname começa com um locale válido
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Se não tem locale, redireciona para português
    return NextResponse.redirect(new URL(`/pt${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
}; 