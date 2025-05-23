import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'zh'
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh|en)/:path*']
};
