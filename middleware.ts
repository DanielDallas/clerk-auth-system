import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

// Create a route matcher for public routes
const isPublicRoute = createRouteMatcher(["/", "/sign-in(.*)", "/sign-up(.*)", "/api(.*)"])

// Create a route matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)", // This will match /dashboard and all routes under it
])

export default clerkMiddleware({
  // Public routes that don't require authentication
  publicRoutes: (req) => isPublicRoute(req),

  // Custom handler for additional protection logic
  afterAuth(auth, req) {
    // If the route is protected and the user is not signed in
    if (isProtectedRoute(req) && !auth.userId) {
      const signInUrl = new URL("/sign-in", req.url)
      signInUrl.searchParams.set("redirect_url", req.url)
      return NextResponse.redirect(signInUrl)
    }
  },
})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}

