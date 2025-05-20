"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { ArrowLeft, Eye, Layout, Palette, Save, Type, Upload, Check, Monitor, Smartphone, Tablet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

export default function CustomizePage() {
  const searchParams = useSearchParams()
  const templateId = searchParams.get("template") || "1"

  const [activeTab, setActiveTab] = useState("layout")
  const [previewMode, setPreviewMode] = useState("desktop")
  const [isSaving, setIsSaving] = useState(false)
  const [showSavedMessage, setShowSavedMessage] = useState(false)

  // Get template data based on ID
  const templateImages = [
    "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1558002038297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1585320806297-8b5cf6?q=80&w=1200&auto=format&fit=crop",
  ]

  // Template categories
  const categories = ["Fashion", "Electronics", "Home & Garden", "Beauty", "Food", "Health"]

  // Template data based on ID
  const templateData = {
    name: `Template ${templateId}`,
    category: categories[Number(templateId) % categories.length],
    image: templateImages[Number(templateId) % templateImages.length],
  }

  // Form state
  const [headerLayout, setHeaderLayout] = useState("centered")
  const [navStyle, setNavStyle] = useState("horizontal")
  const [heroType, setHeroType] = useState("image-left")
  const [contentAlignment, setContentAlignment] = useState("center")
  const [productsPerRow, setProductsPerRow] = useState("3")
  const [cardStyle, setCardStyle] = useState("bordered")
  const [footerStyle, setFooterStyle] = useState("simple")
  const [showNewsletter, setShowNewsletter] = useState("yes")

  // Color state
  const [primaryColor, setPrimaryColor] = useState("#7c3aed")
  const [secondaryColor, setSecondaryColor] = useState("#1f2937")
  const [accentColor, setAccentColor] = useState("#10b981")
  const [backgroundColor, setBackgroundColor] = useState("#ffffff")
  const [textColor, setTextColor] = useState("#111827")

  // Typography state
  const [headingFont, setHeadingFont] = useState("inter")
  const [bodyFont, setBodyFont] = useState("roboto")
  const [headingSize, setHeadingSize] = useState([24])
  const [bodySize, setBodySize] = useState([16])
  const [lineHeight, setLineHeight] = useState([1.5])

  // Handle save
  const handleSave = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setShowSavedMessage(true)

      setTimeout(() => {
        setShowSavedMessage(false)
      }, 3000)
    }, 1500)
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center px-4 md:px-6">
          <Link href="/templates" className="flex items-center gap-2 text-sm font-medium">
            <ArrowLeft className="h-4 w-4" />
            Back to Templates
          </Link>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm" className="gap-1">
              <Eye className="h-4 w-4" />
              Preview
            </Button>
            <Button size="sm" className="gap-1 relative" onClick={handleSave} disabled={isSaving}>
              {isSaving ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              Save
              {showSavedMessage && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-primary px-2 py-1 text-xs text-primary-foreground">
                  <Check className="mr-1 inline-block h-3 w-3" />
                  Changes saved!
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-64 border-r bg-card overflow-y-auto">
          <div className="p-4">
            <h2 className="font-semibold mb-4">Customize Your Store</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="layout" className="text-xs">
                  <Layout className="h-4 w-4 mr-1" />
                  Layout
                </TabsTrigger>
                <TabsTrigger value="colors" className="text-xs">
                  <Palette className="h-4 w-4 mr-1" />
                  Colors
                </TabsTrigger>
                <TabsTrigger value="typography" className="text-xs">
                  <Type className="h-4 w-4 mr-1" />
                  Typography
                </TabsTrigger>
              </TabsList>

              <TabsContent value="layout" className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="header">
                    <AccordionTrigger className="text-sm">Header</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Layout Style</label>
                          <Select defaultValue={headerLayout} onValueChange={setHeaderLayout}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="centered">Centered</SelectItem>
                              <SelectItem value="left-aligned">Left Aligned</SelectItem>
                              <SelectItem value="right-aligned">Right Aligned</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Navigation Style</label>
                          <Select defaultValue={navStyle} onValueChange={setNavStyle}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="horizontal">Horizontal</SelectItem>
                              <SelectItem value="dropdown">Dropdown</SelectItem>
                              <SelectItem value="mega-menu">Mega Menu</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="hero">
                    <AccordionTrigger className="text-sm">Hero Section</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Hero Type</label>
                          <Select defaultValue={heroType} onValueChange={setHeroType}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="image-left">Image Left</SelectItem>
                              <SelectItem value="image-right">Image Right</SelectItem>
                              <SelectItem value="full-width">Full Width</SelectItem>
                              <SelectItem value="video">Video Background</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Content Alignment</label>
                          <Select defaultValue={contentAlignment} onValueChange={setContentAlignment}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select alignment" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="left">Left</SelectItem>
                              <SelectItem value="center">Center</SelectItem>
                              <SelectItem value="right">Right</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Background Image</label>
                          <div className="flex items-center gap-2">
                            <div className="h-10 w-10 rounded border bg-muted flex items-center justify-center">
                              <Upload className="h-4 w-4 text-muted-foreground" />
                            </div>
                            <Button variant="outline" size="sm" className="text-xs h-8">
                              Upload
                            </Button>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="products">
                    <AccordionTrigger className="text-sm">Product Grid</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Products Per Row</label>
                          <Select defaultValue={productsPerRow} onValueChange={setProductsPerRow}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select number" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2">2</SelectItem>
                              <SelectItem value="3">3</SelectItem>
                              <SelectItem value="4">4</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Card Style</label>
                          <Select defaultValue={cardStyle} onValueChange={setCardStyle}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="bordered">Bordered</SelectItem>
                              <SelectItem value="shadow">Shadow</SelectItem>
                              <SelectItem value="minimal">Minimal</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="footer">
                    <AccordionTrigger className="text-sm">Footer</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Footer Style</label>
                          <Select defaultValue={footerStyle} onValueChange={setFooterStyle}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select style" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="simple">Simple</SelectItem>
                              <SelectItem value="multi-column">Multi-Column</SelectItem>
                              <SelectItem value="centered">Centered</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-1">
                          <label className="text-xs font-medium">Show Newsletter Signup</label>
                          <Select defaultValue={showNewsletter} onValueChange={setShowNewsletter}>
                            <SelectTrigger className="w-full text-xs">
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="colors" className="mt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Primary Color</label>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-8 h-8 p-0" style={{ backgroundColor: primaryColor }}>
                            <span className="sr-only">Pick a color</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2">
                          <div className="grid grid-cols-5 gap-1">
                            {["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ef4444"].map((color) => (
                              <Button
                                key={color}
                                variant="outline"
                                className="w-6 h-6 p-0 rounded-md"
                                style={{ backgroundColor: color }}
                                onClick={() => setPrimaryColor(color)}
                              />
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Input
                        type="text"
                        value={primaryColor}
                        onChange={(e) => setPrimaryColor(e.target.value)}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Secondary Color</label>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-8 h-8 p-0" style={{ backgroundColor: secondaryColor }}>
                            <span className="sr-only">Pick a color</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2">
                          <div className="grid grid-cols-5 gap-1">
                            {["#1f2937", "#374151", "#4b5563", "#6b7280", "#9ca3af"].map((color) => (
                              <Button
                                key={color}
                                variant="outline"
                                className="w-6 h-6 p-0 rounded-md"
                                style={{ backgroundColor: color }}
                                onClick={() => setSecondaryColor(color)}
                              />
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Input
                        type="text"
                        value={secondaryColor}
                        onChange={(e) => setSecondaryColor(e.target.value)}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Accent Color</label>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-8 h-8 p-0" style={{ backgroundColor: accentColor }}>
                            <span className="sr-only">Pick a color</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2">
                          <div className="grid grid-cols-5 gap-1">
                            {["#10b981", "#f59e0b", "#ef4444", "#ec4899", "#8b5cf6"].map((color) => (
                              <Button
                                key={color}
                                variant="outline"
                                className="w-6 h-6 p-0 rounded-md"
                                style={{ backgroundColor: color }}
                                onClick={() => setAccentColor(color)}
                              />
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Input
                        type="text"
                        value={accentColor}
                        onChange={(e) => setAccentColor(e.target.value)}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Background Color</label>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-8 h-8 p-0"
                            style={{ backgroundColor: backgroundColor }}
                          >
                            <span className="sr-only">Pick a color</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2">
                          <div className="grid grid-cols-5 gap-1">
                            {["#ffffff", "#f9fafb", "#f3f4f6", "#e5e7eb", "#d1d5db"].map((color) => (
                              <Button
                                key={color}
                                variant="outline"
                                className="w-6 h-6 p-0 rounded-md"
                                style={{ backgroundColor: color }}
                                onClick={() => setBackgroundColor(color)}
                              />
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Input
                        type="text"
                        value={backgroundColor}
                        onChange={(e) => setBackgroundColor(e.target.value)}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Text Color</label>
                    <div className="flex items-center gap-2">
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-8 h-8 p-0" style={{ backgroundColor: textColor }}>
                            <span className="sr-only">Pick a color</span>
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2">
                          <div className="grid grid-cols-5 gap-1">
                            {["#111827", "#1f2937", "#374151", "#4b5563", "#6b7280"].map((color) => (
                              <Button
                                key={color}
                                variant="outline"
                                className="w-6 h-6 p-0 rounded-md"
                                style={{ backgroundColor: color }}
                                onClick={() => setTextColor(color)}
                              />
                            ))}
                          </div>
                        </PopoverContent>
                      </Popover>
                      <Input
                        type="text"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                        className="h-8 text-xs"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="typography" className="mt-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Heading Font</label>
                    <Select defaultValue={headingFont} onValueChange={setHeadingFont}>
                      <SelectTrigger className="w-full text-xs">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="opensans">Open Sans</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Body Font</label>
                    <Select defaultValue={bodyFont} onValueChange={setBodyFont}>
                      <SelectTrigger className="w-full text-xs">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="opensans">Open Sans</SelectItem>
                        <SelectItem value="montserrat">Montserrat</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Heading Size</label>
                    <div className="pt-2">
                      <Slider defaultValue={headingSize} max={48} step={1} onValueChange={setHeadingSize} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>16px</span>
                        <span>32px</span>
                        <span>48px</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Body Size</label>
                    <div className="pt-2">
                      <Slider defaultValue={bodySize} max={24} step={1} onValueChange={setBodySize} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>12px</span>
                        <span>16px</span>
                        <span>24px</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Line Height</label>
                    <div className="pt-2">
                      <Slider defaultValue={lineHeight} min={1} max={2} step={0.1} onValueChange={setLineHeight} />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>1.0</span>
                        <span>1.5</span>
                        <span>2.0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Preview Area */}
        <div className="flex-1 bg-muted/30 overflow-auto p-6 flex flex-col items-center">
          <div className="bg-card mb-4 rounded-lg shadow-sm p-2 flex items-center gap-2">
            <Button
              variant={previewMode === "mobile" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8"
              onClick={() => setPreviewMode("mobile")}
            >
              <Smartphone className="h-3.5 w-3.5 mr-1" />
              Mobile
            </Button>
            <Button
              variant={previewMode === "tablet" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8"
              onClick={() => setPreviewMode("tablet")}
            >
              <Tablet className="h-3.5 w-3.5 mr-1" />
              Tablet
            </Button>
            <Button
              variant={previewMode === "desktop" ? "default" : "outline"}
              size="sm"
              className="text-xs h-8"
              onClick={() => setPreviewMode("desktop")}
            >
              <Monitor className="h-3.5 w-3.5 mr-1" />
              Desktop
            </Button>
          </div>

          <div
            className={`bg-card border rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
              previewMode === "mobile" ? "w-[375px]" : previewMode === "tablet" ? "w-[768px]" : "w-[1200px]"
            }`}
            style={{ backgroundColor }}
          >
            <div className="border-b p-2 flex items-center justify-between bg-muted/20">
              <div className="flex items-center gap-1">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-xs text-muted-foreground">
                {templateData.name} Preview
                <Badge variant="outline" className="ml-2 text-[10px] py-0">
                  {previewMode}
                </Badge>
              </div>
              <div></div>
            </div>
            <div className="h-[600px] overflow-auto">
              <Image
                src={templateData.image || "/placeholder.svg"}
                alt={templateData.name}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
