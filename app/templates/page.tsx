"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TemplateCard } from "@/components/template-card"

export default function TemplatesPage() {
  // Template categories
  const categories = ["All", "Fashion", "Electronics", "Home & Garden", "Beauty", "Food", "Health"]

  const [searchQuery, setSearchQuery] = useState("")

  // Template data
  const templates = [
    {
      id: 1,
      name: "Fashion Boutique",
      category: "Fashion",
      description: "Perfect for clothing and accessories stores",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: 2,
      name: "Tech Haven",
      category: "Electronics",
      description: "Ideal for electronics and gadget stores",
      image: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=800&auto=format&fit=crop",
      isPro: true,
    },
    {
      id: 3,
      name: "Home Essentials",
      category: "Home & Garden",
      description: "Great for home decor and furniture",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Beauty Box",
      category: "Beauty",
      description: "Perfect for cosmetics and skincare",
      image: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=800&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: 5,
      name: "Gourmet Delights",
      category: "Food",
      description: "Ideal for specialty food stores",
      image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=800&auto=format&fit=crop",
      isPro: true,
    },
    {
      id: 6,
      name: "Wellness Hub",
      category: "Health",
      description: "Great for health and wellness products",
      image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Urban Style",
      category: "Fashion",
      description: "Modern template for streetwear brands",
      image: "https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: 8,
      name: "Smart Home",
      category: "Electronics",
      description: "Showcase smart home devices and gadgets",
      image: "https://images.unsplash.com/photo-1558002038-1055e2e28ed1?q=80&w=800&auto=format&fit=crop",
      isNew: true,
    },
    {
      id: 9,
      name: "Garden Paradise",
      category: "Home & Garden",
      description: "Perfect for garden supplies and plants",
      image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
      isPro: true,
    },
  ]

  // Filter templates based on search query
  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2 max-w-3xl">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Find Your Perfect Template
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Browse our collection of professionally designed templates and find the perfect starting point for
                  your online store.
                </p>
              </div>
            </div>

            {/* Search and Filter */}
            <div className="mx-auto max-w-2xl mt-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search templates..."
                  className="w-full bg-card pl-10 shadow-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="mt-8">
              <Tabs defaultValue="All" className="w-full">
                <div className="relative">
                  <div className="absolute inset-0 left-0 right-0 h-px flex items-center bg-border" aria-hidden="true">
                    <div className="w-full border-t"></div>
                  </div>
                  <TabsList className="relative w-full max-w-3xl mx-auto flex overflow-auto scrollbar-hide justify-start sm:justify-center p-0 bg-transparent">
                    {categories.map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="px-4 py-2 rounded-none data-[state=active]:bg-background data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-primary"
                      >
                        {category}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                </div>

                <TabsContent value="All" className="mt-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredTemplates.map((template) => (
                      <TemplateCard key={template.id} template={template} />
                    ))}
                  </div>
                </TabsContent>

                {categories.slice(1).map((category) => (
                  <TabsContent key={category} value={category} className="mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {filteredTemplates
                        .filter((t) => t.category === category)
                        .map((template) => (
                          <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
