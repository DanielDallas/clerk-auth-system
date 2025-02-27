import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Footer from "@/components/footer"

export default function Unauthorized() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative">
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-primary hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
      <div className="text-center max-w-md px-4">
        <h1 className="text-3xl font-bold mb-4">Unauthorized Access</h1>
        <p className="text-gray-600 mb-6">You need to be signed in to access this page. Please sign in to continue.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/sign-in"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Create Account
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

