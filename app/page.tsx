"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import Footer from "@/components/footer";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <nav className="w-full py-4 px-4 sm:px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-lg sm:text-xl text-primary">
            ClerkAuth
          </span>
          <span className="text-xs text-gray-500">(v1.19)</span>
        </Link>
        {isLoaded &&
          (isSignedIn ? (
            <Link
              href="/dashboard"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-base rounded-sm bg-primary text-white hover:bg-primary/90 transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              href="/sign-in"
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm sm:text-base rounded-xs hover:bg-gray-100 transition-colors"
            >
              Sign In
            </Link>
          ))}
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-12 py-8 md:py-12">
        <div className="w-full md:w-1/2 space-y-4 sm:space-y-6 md:pr-12 mb-8 md:mb-0">
          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold tracking-tight">
            Secure Authentication for Your Application
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-md">
            Get started with our powerful and easy-to-use authentication system
            powered by{" "}
            <Link
              href="https://clerk.com"
              className="font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clerk
            </Link>
            .
          </p>
          {!isSignedIn && (
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
              <Link
                href="/sign-up"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Create Account
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/sign-in"
                className="flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-primary/10 to-primary/30 rounded-md flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-white rounded-md shadow-xl flex items-center justify-center p-4 sm:p-6">
              <div className="text-center space-y-3 sm:space-y-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 sm:h-8 sm:w-8 text-primary"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  Secure Authentication
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Protect your application with our robust authentication system
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
