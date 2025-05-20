"use client"

import { useState } from "react"
import Link from "next/link"
import { Plus, Sparkles, Palette, Zap, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col-reverse items-end gap-4">
      {isOpen && (
        <>
          <Link href="/templates">
            <Button className="flex items-center gap-2 shadow-lg" size="sm" onClick={() => setIsOpen(false)}>
              <Sparkles className="h-4 w-4" />
              <span>New Template</span>
            </Button>
          </Link>
          <Link href="/customize">
            <Button className="flex items-center gap-2 shadow-lg" size="sm" onClick={() => setIsOpen(false)}>
              <Palette className="h-4 w-4" />
              <span>Customize</span>
            </Button>
          </Link>
          <Link href="/templates">
            <Button className="flex items-center gap-2 shadow-lg" size="sm" onClick={() => setIsOpen(false)}>
              <Zap className="h-4 w-4" />
              <span>Quick Start</span>
            </Button>
          </Link>
        </>
      )}
      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg transition-transform ${isOpen ? "rotate-45" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
      </Button>
    </div>
  )
}
