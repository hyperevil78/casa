import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/contact',
  '/about',
  '/gallery',
  '/events',
  '/dining',
  '/rooms',
  '/book/(.*)',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/rooms(.*)',
]);

export default clerkMiddleware((auth, req) => {
  // If the route is NOT public, protect it.
  // This will protect /api/bookings/create
  if (!isPublicRoute(req)) {
    auth.protect();
  }
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};