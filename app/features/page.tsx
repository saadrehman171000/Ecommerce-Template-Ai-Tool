import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function FeaturesPage() {
  const features = [
    {
      title: "Intuitive Drag-and-Drop Editor",
      description:
        "Customize your store with our intuitive drag-and-drop editor. No coding skills required - just drag, drop, and publish.",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1200&auto=format&fit=crop",
      category: "Design",
    },
    {
      title: "Advanced Product Management",
      description:
        "Easily add, edit, and organize your products with our powerful management system. Create collections, set variants, and manage inventory with ease.",
      image: "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?q=80&w=1200&auto=format&fit=crop",
      category: "Catalog",
    },
    {
      title: "Integrated Payment Processing",
      description:
        "Accept payments from anywhere with our secure, integrated payment processing. Support for all major credit cards, PayPal, Apple Pay, and more.",
      image: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=1200&auto=format&fit=crop",
      category: "Payments",
    },
    {
      title: "Mobile-Optimized Storefronts",
      description:
        "Every template is fully responsive and optimized for mobile shopping. Give your customers a seamless experience on any device.",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1200&auto=format&fit=crop",
      category: "Mobile",
    },
    {
      title: "Built-in SEO Tools",
      description:
        "Boost your store's visibility with our built-in SEO tools. Optimize meta titles, descriptions, and more to attract more customers.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1200&auto=format&fit=crop",
      category: "Marketing",
    },
    {
      title: "Comprehensive Analytics",
      description:
        "Make data-driven decisions with our comprehensive analytics dashboard. Track sales, customer behavior, and more.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      category: "Analytics",
    },
    {
      title: "Automated Marketing Campaigns",
      description:
        "Set up automated email campaigns to recover abandoned carts, welcome new customers, and promote special offers.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
      category: "Marketing",
    },
    {
      title: "Multi-channel Selling",
      description:
        "Sell across multiple channels including Facebook, Instagram, Amazon, and eBay. Manage all your inventory from one place.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
      category: "Sales",
    },
    {
      title: "Customer Management",
      description:
        "Build strong customer relationships with our CRM tools. View purchase history, create customer groups, and personalize marketing.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
      category: "CRM",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          <div className="absolute inset-0 grid-pattern"></div>
          <div className="absolute inset-0 noise-bg"></div>

          <div className="container relative px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge className="px-3 py-1 text-sm mb-4" variant="outline">
                Features
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
                Everything You Need to <span className="gradient-text">Succeed Online</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our platform is packed with powerful features to help you build, manage, and grow your online store.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {features.slice(0, 2).map((feature, index) => (
                <div key={index} className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <Badge variant="secondary" className="mb-3">
                        {feature.category}
                      </Badge>
                      <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-white/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.slice(2).map((feature, index) => (
                <div
                  key={index}
                  className="card-hover group relative overflow-hidden rounded-xl border bg-card shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      width={400}
                      height={250}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-2">
                      {feature.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Why Choose StoreBuilder?</h2>
              <p className="text-xl text-muted-foreground">
                See how we compare to other e-commerce platforms on the market.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-6 font-medium">Feature</th>
                    <th className="text-center py-4 px-6 font-medium">StoreBuilder</th>
                    <th className="text-center py-4 px-6 font-medium">Competitors</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Drag-and-Drop Editor", storeBuilder: true, competitors: "Limited" },
                    { feature: "Mobile Optimization", storeBuilder: true, competitors: true },
                    { feature: "Custom Domain", storeBuilder: true, competitors: true },
                    { feature: "Unlimited Products", storeBuilder: true, competitors: "Premium Plans Only" },
                    { feature: "Transaction Fees", storeBuilder: "0%", competitors: "0.5-2%" },
                    { feature: "24/7 Support", storeBuilder: true, competitors: "Premium Plans Only" },
                    { feature: "SEO Tools", storeBuilder: true, competitors: "Limited" },
                    { feature: "App Marketplace", storeBuilder: "1000+ Apps", competitors: "Limited Selection" },
                  ].map((item, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-4 px-6">{item.feature}</td>
                      <td className="text-center py-4 px-6">
                        {item.storeBuilder === true ? (
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                        ) : (
                          <span>{item.storeBuilder}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-6">
                        {item.competitors === true ? (
                          <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 text-primary">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                        ) : (
                          <span>{item.competitors}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background"></div>
          <div className="absolute inset-0 grid-pattern opacity-30"></div>
          <div className="absolute inset-0 noise-bg"></div>

          <div className="container relative px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Build Your Online Store?
              </h2>

              <p className="mb-8 text-xl text-muted-foreground">
                Get started today and join thousands of successful businesses powered by StoreBuilder.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/templates">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    View Pricing
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
