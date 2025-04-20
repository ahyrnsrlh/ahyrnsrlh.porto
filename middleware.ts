import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "id"],

  // Used when no locale matches
  defaultLocale: "en",

  // Pathnames are not internationalized
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/projects": "/projects",
    "/achievements": "/achievements",
    "/dashboard": "/dashboard",
    "/chat": "/chat",
    "/contact": "/contact",
  },
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
