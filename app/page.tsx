import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ChevronRight, Code, Laptop, Zap, CheckCircle, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
          <div className="absolute inset-0 grid-pattern"></div>
          <div className="absolute inset-0 noise-bg"></div>

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_500px] lg:gap-16 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <Badge className="px-3 py-1 text-sm" variant="outline">
                    <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                    Trusted by 10,000+ store owners
                  </Badge>

                  <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Create Your <span className="gradient-text">E-Commerce</span> Website in Minutes
                  </h1>

                  <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                    Build a professional online store without coding. Choose from beautiful templates, customize to your
                    brand, and start selling today.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/templates">
                    <Button size="lg" className="w-full sm:w-auto">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/templates">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Explore Templates
                    </Button>
                  </Link>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex -space-x-2">
                    {[
                      "https://randomuser.me/api/portraits/women/79.jpg",
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/21.jpg",
                    ].map((img, i) => (
                      <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                        <Image src={img || "/placeholder.svg"} alt={`User ${i + 1}`} width={32} height={32} />
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-primary font-medium">4.9/5</span> from over 1,000 reviews
                  </div>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>

                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl gradient-border">
                  <div className="absolute top-0 left-0 right-0 h-12 bg-muted/80 backdrop-blur-md flex items-center px-4 gap-2">
                    <div className="flex gap-1.5">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-muted-foreground ml-4">Your Online Store</div>
                  </div>

                  <div className="pt-12">
                    <Image
                      src="https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1000&auto=format&fit=crop"
                      alt="E-commerce platform preview"
                      width={550}
                      height={650}
                      className="object-cover"
                      priority
                    />
                  </div>

                  <div className="absolute -right-8 -top-8 animate-float-slow">
                    <div className="glass rounded-xl p-3 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-medium">Sales up 24%</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -left-12 bottom-20 animate-float">
                    <div className="glass rounded-xl p-3 shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                          <Star className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-medium">New customer!</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Section (Replacing Brands Section) */}
            <div className="mt-20 md:mt-32">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Powering E-Commerce Success</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { number: "10K+", label: "Active Stores" },
                  { number: "$25M+", label: "Monthly Sales" },
                  { number: "150+", label: "Countries" },
                  { number: "99.9%", label: "Uptime" },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col items-center p-6 bg-card rounded-xl shadow-sm border">
                    <span className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</span>
                    <span className="text-sm text-muted-foreground mt-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - IMPROVED WITH BETTER IMAGES */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything You Need to Succeed
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Our platform provides all the tools you need to create a successful online store.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  icon: <Laptop className="h-10 w-10 text-primary" />,
                  title: "Beautiful Templates",
                  description: "Choose from dozens of professionally designed templates for any industry.",
                  image: "https://images.unsplash.com/photo-1616511058997-08191fcc8e85?q=80&w=800&auto=format&fit=crop",
                },
                {
                  icon: <Code className="h-10 w-10 text-primary" />,
                  title: "No Coding Required",
                  description: "Our intuitive drag-and-drop editor makes customization simple for everyone.",
                  image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=800&auto=format&fit=crop",
                },
                {
                  icon: <Zap className="h-10 w-10 text-primary" />,
                  title: "Lightning Fast",
                  description: "Optimized for speed to provide the best shopping experience for your customers.",
                  image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    </svg>
                  ),
                  title: "Secure Payments",
                  description: "Integrated payment processing with top-tier security to protect your customers' data.",
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  ),
                  title: "24/7 Support",
                  description: "Our dedicated support team is always available to help you with any questions.",
                  image: "https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=800&auto=format&fit=crop",
                },
                {
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-10 w-10 text-primary"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  ),
                  title: "Advanced Analytics",
                  description: "Gain valuable insights into your store's performance with detailed analytics.",
                  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
                },
              ].map((feature, i) => (
                <div key={i} className="card-hover group relative overflow-hidden rounded-xl border bg-card shadow-md">
                  <div className="h-40 overflow-hidden relative">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent">
                      <div className="p-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Templates Preview Section */}
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Templates
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Start with a Professional Template
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Browse our collection of professionally designed templates and customize them to fit your brand.
              </p>
              <Link href="/templates">
                <Button variant="outline" className="mt-4">
                  View All Templates
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
              {[
                {
                  id: 1,
                  name: "Fashion Boutique",
                  category: "Fashion",
                  description: "Perfect for clothing and accessories stores",
                  image: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=800&auto=format&fit=crop",
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
                  image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=800&auto=format&fit=crop",
                },
              ].map((template) => (
                <div
                  key={template.id}
                  className="template-card group relative overflow-hidden rounded-xl bg-card shadow-md"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <Image
                      src={template.image || "/placeholder.svg"}
                      alt={template.name}
                      width={800}
                      height={500}
                      className="h-full w-full object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="absolute top-3 left-3 flex gap-2">
                    {template.isNew && (
                      <Badge variant="default" className="bg-primary">
                        New
                      </Badge>
                    )}
                    {template.isPro && (
                      <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                        Pro
                      </Badge>
                    )}
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg">{template.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {template.category}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{template.description}</p>

                    <div className="mt-4 flex items-center justify-between">
                      <Button variant="outline" size="sm" className="gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                        <span>Preview</span>
                      </Button>
                      <Link href={`/customize?template=${template.id}`}>
                        <Button size="sm" className="gap-1">
                          <span>Use Template</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Badge className="px-3 py-1 text-sm" variant="secondary">
                Testimonials
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl">
                Don't just take our word for it. Here's what store owners have to say about our platform.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Sarah Johnson",
                  role: "Fashion Boutique Owner",
                  quote:
                    "I was able to launch my online store in just one day. The templates are beautiful and the customization options are exactly what I needed.",
                  image: "https://randomuser.me/api/portraits/women/24.jpg",
                  rating: 5,
                },
                {
                  name: "Michael Chen",
                  role: "Electronics Store Owner",
                  quote:
                    "The platform is incredibly intuitive. I've tried other solutions but none were as easy to use while still being powerful enough for my needs.",
                  image: "https://randomuser.me/api/portraits/men/45.jpg",
                  rating: 5,
                },
                {
                  name: "Emma Davis",
                  role: "Handmade Jewelry Seller",
                  quote:
                    "As someone with no technical background, I was worried about creating an online store. This platform made it so simple, I can't recommend it enough.",
                  image: "https://randomuser.me/api/portraits/women/32.jpg",
                  rating: 4,
                },
              ].map((testimonial, i) => (
                <div key={i} className="card-hover relative overflow-hidden rounded-xl border bg-card p-6 shadow-md">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                        />
                      ))}
                    </div>

                    <blockquote className="flex-1 mb-6">
                      <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                    </blockquote>

                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
              <Badge className="px-3 py-1 text-sm mb-6 inline-flex" variant="outline">
                <Star className="mr-1 h-3 w-3 fill-primary text-primary" />
                Limited Time Offer
              </Badge>

              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Ready to Start Selling Online?
              </h2>

              <p className="mb-8 text-xl text-muted-foreground">
                Join thousands of businesses already growing with our platform. Get started today with a 14-day free
                trial.
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

              <p className="mt-4 text-sm text-muted-foreground">No credit card required. Cancel anytime.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
