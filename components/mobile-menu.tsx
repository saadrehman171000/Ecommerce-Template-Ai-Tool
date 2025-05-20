"use client"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div className={`mobile-nav fixed inset-0 z-50 bg-background ${isOpen ? "open" : ""}`}>
      <div className="container h-full flex flex-col">
        <div className="flex justify-end pt-4">
          <Button variant="ghost" size="icon" onClick={onClose} className="h-10 w-10">
            <X className="h-6 w-6" />
            <span className="sr-only">Close menu</span>
          </Button>
        </div>
        <nav className="flex flex-col items-center justify-center flex-1 gap-8 text-center">
          <Link
            href="/"
            onClick={onClose}
            className="text-3xl font-bold hover:text-primary transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/templates"
            onClick={onClose}
            className="text-3xl font-bold hover:text-primary transition-colors duration-200"
          >
            Templates
          </Link>
          <Link
            href="/features"
            onClick={onClose}
            className="text-3xl font-bold hover:text-primary transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            onClick={onClose}
            className="text-3xl font-bold hover:text-primary transition-colors duration-200"
          >
            Pricing
          </Link>
          <Link
            href="/support"
            onClick={onClose}
            className="text-3xl font-bold hover:text-primary transition-colors duration-200"
          >
            Support
          </Link>
        </nav>
        <div className="flex flex-col gap-4 py-8">
          <Link href="/login" onClick={onClose}>
            <Button variant="outline" className="w-full">
              Log In
            </Button>
          </Link>
          <Link href="/signup" onClick={onClose}>
            <Button className="w-full">Sign Up</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
