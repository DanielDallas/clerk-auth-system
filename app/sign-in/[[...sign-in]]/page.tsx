import { SignIn } from "@clerk/nextjs"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function SignInPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" />
        <span className="font-medium">Back</span>
      </Link>
      <div className="mb-8 text-center">
        <Link href="/" className="flex items-center justify-center gap-2 mb-2">
          <span className="text-2xl font-bold text-primary">ClerkAuth</span>
          <span className="text-xs text-gray-500">(v1.19)</span>
        </Link>
        <p className="text-gray-600">Secure Authentication for Your App</p>
      </div>
      <SignIn
        appearance={{
          elements: {
            rootBox: "mx-auto",
            card: "shadow-lg",
            footerAction: "flex items-center justify-center mt-4",
            footer: {
              "& button": {
                display: "none",
              },
            },
          },
        }}
        redirectUrl="/dashboard"
        signUpUrl="/sign-up"
      />
      <div className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{" "}
        <Link href="/sign-up" className="text-primary hover:underline font-medium">
          Sign up now
        </Link>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

