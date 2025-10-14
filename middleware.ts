import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define which routes should NOT be protected.
// Add all your public-facing pages here.
const isPublicRoute = createRouteMatcher([
  '/', // Home page
  '/contact',
  '/about',
  '/gallery',
  '/events',
  '/dining',
  '/rooms', // The main rooms page
  '/sign-in(.*)', // Clerk's sign-in pages
  '/sign-up(.*)', // Clerk's sign-up pages
]);

export default clerkMiddleware(async (auth, req) => {
  // If the requested route is NOT in the public list, then protect it.
  // This will secure your API routes (`/api/my-booking`) and any future
  // protected pages automatically.
  if (!isPublicRoute(req)) {
    const sessionAuth = await auth();
    if (!sessionAuth.isAuthenticated) {
      // Redirect to sign-in page if not authenticated
      return Response.redirect('/sign-in');
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

