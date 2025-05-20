"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Mountain, Menu, User, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "@/components/mobile-menu"
import { FloatingActionButton } from "@/components/floating-action-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Hydration fix
  useEffect(() => {
    setMounted(true)

    // Check for user preference
    const isDark =
      localStorage.getItem("darkMode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches

    setDarkMode(isDark)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", darkMode.toString())
      document.documentElement.classList.toggle("dark", darkMode)
    }
  }, [darkMode, mounted])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>StoreBuilder - Create Your E-Commerce Website</title>
        <meta name="description" content="Create your online store in minutes with our easy-to-use platform" />
      </head>
      <body className={`${inter.className} ${!mounted ? "opacity-0" : "opacity-100 transition-opacity duration-300"}`}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-40 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
              <Link href="/" className="flex items-center gap-2 z-50">
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mountain className="h-4 w-4" />
                  <div className="absolute inset-0 rounded-full bg-primary/40 animate-pulse-slow"></div>
                </div>
                <span className="font-bold text-xl">StoreBuilder</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/templates" className="text-sm font-medium hover:text-primary transition-colors">
                  Templates
                </Link>
                <Link href="/features" className="text-sm font-medium hover:text-primary transition-colors">
                  Features
                </Link>
                <Link href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
                  Pricing
                </Link>
                <Link href="/support" className="text-sm font-medium hover:text-primary transition-colors">
                  Support
                </Link>
              </nav>

              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="hidden md:flex">
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span className="sr-only">Toggle theme</span>
                </Button>

                <Link href="/login" className="hidden md:block">
                  <Button variant="outline" size="sm" className="gap-1">
                    <User className="h-4 w-4" />
                    Login
                  </Button>
                </Link>

                <Link href="/signup" className="hidden md:block">
                  <Button size="sm" className="gap-1">
                    Sign Up
                  </Button>
                </Link>

                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)} className="md:hidden z-50">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </div>
            </div>
          </header>

          <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

          {children}

          <FloatingActionButton />

          {/* Footer */}
          <footer className="border-t bg-muted/40">
            <div className="container px-4 py-12 md:px-6">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-4">
                  <Link href="/" className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Mountain className="h-4 w-4" />
                    </div>
                    <span className="font-bold text-xl">StoreBuilder</span>
                  </Link>
                  <p className="text-sm text-muted-foreground">
                    Create beautiful e-commerce websites without coding. Start selling online today.
                  </p>
                  <div className="flex gap-4">
                    {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                      <Link
                        key={social}
                        href="#"
                        className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        <span className="sr-only">{social}</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          {social === "facebook" && (
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                          )}
                          {social === "twitter" && (
                            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                          )}
                          {social === "instagram" && (
                            <>
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </>
                          )}
                          {social === "linkedin" && (
                            <>
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                              <rect width="4" height="12" x="2" y="9" />
                              <circle cx="4" cy="4" r="2" />
                            </>
                          )}
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>

                {[
                  {
                    title: "Product",
                    links: [
                      { name: "Features", href: "/features" },
                      { name: "Templates", href: "/templates" },
                      { name: "Pricing", href: "/pricing" },
                      { name: "Integrations", href: "/integrations" },
                      { name: "Changelog", href: "/changelog" },
                    ],
                  },
                  {
                    title: "Resources",
                    links: [
                      { name: "Blog", href: "/blog" },
                      { name: "Documentation", href: "/documentation" },
                      { name: "Guides", href: "/guides" },
                      { name: "Support", href: "/support" },
                      { name: "API", href: "/api" },
                    ],
                  },
                  {
                    title: "Company",
                    links: [
                      { name: "About", href: "/about" },
                      { name: "Careers", href: "/careers" },
                      { name: "Contact", href: "/contact" },
                      { name: "Privacy", href: "/privacy" },
                      { name: "Terms", href: "/terms" },
                    ],
                  },
                ].map((section) => (
                  <div key={section.title} className="space-y-4">
                    <h3 className="text-sm font-medium">{section.title}</h3>
                    <ul className="space-y-2 text-sm">
                      {section.links.map((link) => (
                        <li key={link.name}>
                          <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                            {link.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-12 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-xs text-muted-foreground">
                  © {new Date().getFullYear()} StoreBuilder. All rights reserved.
                </p>
                <div className="flex flex-wrap gap-4 mt-4 md:mt-0 justify-center">
                  {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy) => (
                    <Link
                      key={policy}
                      href="#"
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {policy}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
