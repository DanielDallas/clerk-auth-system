import type React from "react";
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { SpeedInsights } from "@vercel/speed-insights/next";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: {
    template: "%s - Basic Clerk Authentication System",
    default: "Basic Clerk Authentication System",
  },
  description: "A secure authentication system using Clerk",
  keywords: [
    "authentication",
    "clerk",
    "nextjs",
    "security",
    "login",
    "signup",
  ],
  authors: [{ name: "Daniel Dallas", url: "https://thedanieldallas.com" }],
  icons: {
    icon: [
      { url: "/favicon.png" },
      { url: "/favicon.png", type: "image/x-icon" },
    ],
  },
  openGraph: {
    title: "ClerkAuth - Authentication System",
    description: "A secure authentication system using Clerk",
    url: "https://clerkauth.com",
    siteName: "ClerkAuth",
    images: [
      {
        url: "public/landing.png",
        width: 1200,
        height: 630,
        alt: "ClerkAuth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ClerkAuth - Authentication System",
    description: "A secure authentication system using Clerk",
    images: ["/pulic/landing.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body suppressHydrationWarning className={sora.className}>
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">{children}</div>
            {/* Footer is handled in individual page layouts */}
          </div>
        </body>
        <SpeedInsights />
      </html>
    </ClerkProvider>
  );
}
