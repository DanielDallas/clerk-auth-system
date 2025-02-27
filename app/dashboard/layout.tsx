"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { UserButton, useClerk } from "@clerk/nextjs"
import { Menu, X, Home, Settings, Users, HelpCircle, LogOut } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Footer from "@/components/footer"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const { signOut } = useClerk()

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Users", href: "/dashboard/users", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Help", href: "/dashboard/help", icon: HelpCircle },
  ]

  const handleSignOut = useCallback(() => {
    signOut(() => {
      window.location.href = "/"
    })
  }, [signOut])

  const handleNavClick = useCallback(() => {
    setSidebarOpen(false)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile header */}
      <div className="sticky top-0 z-20 flex items-center justify-between h-16 bg-white border-b border-gray-200 md:hidden px-4">
        <div className="flex items-center">
          <button
            type="button"
            className="inline-flex items-center justify-center h-10 w-10 rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center gap-2 ml-3">
            <span className="font-bold text-lg text-primary">ClerkAuth</span>
            <span className="text-xs text-gray-500">(v1.19)</span>
          </Link>
        </div>
        <UserButton showName afterSignOutUrl="/" />
      </div>

      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-40 flex md:hidden ${sidebarOpen ? "" : "pointer-events-none"}`}>
        {/* Overlay */}
        <div
          className={`fixed inset-0 bg-gray-600 ${sidebarOpen ? "opacity-75 transition-opacity ease-linear duration-300" : "opacity-0 transition-opacity ease-linear duration-300"}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={`relative flex w-full max-w-xs flex-col bg-white transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition ease-in-out duration-300`}
        >
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" />
            </button>
          </div>

          <div className="flex-1 flex flex-col h-0">
            <div className="flex-shrink-0 flex items-center px-4 h-16">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">ClerkAuth</span>
                <span className="text-xs text-gray-500">(v1.19)</span>
              </Link>
            </div>
            <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleNavClick}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-500"}`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
            <div className="flex-shrink-0 flex flex-col gap-2 p-4 border-t">
              <button
                onClick={handleSignOut}
                className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md w-full text-left"
              >
                <LogOut className="h-5 w-5 text-gray-400" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop layout - sidebar */}
      <div className="hidden md:flex md:flex-col md:fixed md:w-64 md:inset-y-0">
        <div className="flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white">
          <div className="flex-1 flex flex-col pt-5 pb-4">
            <div className="flex items-center flex-shrink-0 px-4 h-16">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">ClerkAuth</span>
                <span className="text-xs text-gray-500">(v1.19)</span>
              </Link>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-white space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                    prefetch={true}
                  >
                    <item.icon
                      className={`mr-3 h-5 w-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-500"}`}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 flex flex-col gap-2 p-4 border-t">
            <button
              onClick={handleSignOut}
              className="flex items-center gap-3 px-2 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md w-full text-left"
            >
              <LogOut className="h-5 w-5 text-gray-400" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content area with proper padding for fixed sidebar */}
      <div className="md:pl-64 flex flex-col min-h-screen">
        {/* Desktop header */}
        <div className="sticky top-0 z-10 hidden md:flex md:items-center md:justify-end h-16 bg-white border-b border-gray-200 px-6">
          <UserButton showName afterSignOutUrl="/" />
        </div>

        {/* Mobile content area */}
        <main className="flex-1">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

