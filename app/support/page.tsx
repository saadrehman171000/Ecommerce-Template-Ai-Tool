import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MessagesSquare, Clock, ArrowRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function SupportPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          <div className="absolute inset-0 grid-pattern"></div>
          <div className="absolute inset-0 noise-bg"></div>

          <div className="container relative px-4 md:px-6">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <Badge className="px-3 py-1 text-sm" variant="outline">
                Support
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                We're Here to <span className="gradient-text">Help You</span> Succeed
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Get the assistance you need with our comprehensive support resources and dedicated team.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for help with templates, customization, payments..."
                  className="pl-10 h-12 w-full shadow-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Help Center",
                  description: "Browse articles and tutorials on how to use our platform effectively.",
                  icon: <Search className="h-10 w-10 text-primary" />,
                  link: "#help-center",
                },
                {
                  title: "Live Chat",
                  description: "Chat with our support team in real-time for immediate assistance.",
                  icon: <MessagesSquare className="h-10 w-10 text-primary" />,
                  link: "#chat",
                },
                {
                  title: "Contact Support",
                  description: "Reach out to our dedicated support team via email or phone.",
                  icon: <Mail className="h-10 w-10 text-primary" />,
                  link: "#contact",
                },
              ].map((item, i) => (
                <Link href={item.link} key={i}>
                  <Card className="card-hover h-full">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-2">
                        {item.icon}
                      </div>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="ghost" className="gap-1 px-0">
                        Learn more
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Help Center */}
        <section id="help-center" className="py-20 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Help Center</h2>
              <p className="text-lg text-muted-foreground">
                Find answers to common questions and learn how to get the most out of our platform.
              </p>
            </div>

            <Tabs defaultValue="getting-started" className="w-full">
              <TabsList className="w-full max-w-md grid grid-cols-3 mb-8">
                <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
                <TabsTrigger value="customization">Customization</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>

              <TabsContent value="getting-started">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Creating your first store",
                      description: "Learn how to set up your store in minutes with our step-by-step guide.",
                      image:
                        "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Choosing the right template",
                      description: "Tips for selecting the perfect template for your business needs.",
                      image:
                        "https://images.unsplash.com/photo-1508615039623-a25605d2b022?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Adding your first products",
                      description: "A comprehensive guide to adding and organizing your product catalog.",
                      image:
                        "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Setting up shipping and taxes",
                      description: "Configure your shipping options and tax settings for a smooth checkout experience.",
                      image:
                        "https://images.unsplash.com/photo-1591378603223-e15560f3d321?q=80&w=400&auto=format&fit=crop",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Read Article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="customization">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Customizing your theme",
                      description: "Learn how to personalize your store's appearance with our theme editor.",
                      image:
                        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Adding custom pages",
                      description: "Create additional pages to showcase your brand story, policies, and more.",
                      image:
                        "https://images.unsplash.com/photo-1482062364825-616fd23b8fc1?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Working with navigation menus",
                      description: "Optimize your store's navigation for the best user experience.",
                      image:
                        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Using custom CSS",
                      description: "Advanced customization options using custom CSS for experienced users.",
                      image:
                        "https://images.unsplash.com/photo-1579403124614-197f69d8187b?q=80&w=400&auto=format&fit=crop",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Read Article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="payments">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Setting up payment gateways",
                      description: "Configure payment providers to accept credit cards, PayPal, and more.",
                      image:
                        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Managing orders and refunds",
                      description: "Learn how to process orders and handle customer refunds efficiently.",
                      image:
                        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "Understanding transaction fees",
                      description: "A breakdown of payment processing fees and how they affect your bottom line.",
                      image:
                        "https://images.unsplash.com/photo-1565514158740-064f34bd6cfd?q=80&w=400&auto=format&fit=crop",
                    },
                    {
                      title: "International payment options",
                      description: "Expand your business globally with international payment solutions.",
                      image:
                        "https://images.unsplash.com/photo-1608111283390-2e333b9b279c?q=80&w=400&auto=format&fit=crop",
                    },
                  ].map((item, i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                      </div>
                      <CardHeader>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" size="sm">
                          Read Article
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Find quick answers to the most common questions about our platform.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {[
                  {
                    question: "How do I create a new store?",
                    answer:
                      "Creating a new store is simple! Sign up for an account, choose a template that suits your business, customize it to match your brand, and start adding products. Our step-by-step wizard will guide you through the entire process.",
                  },
                  {
                    question: "Can I use my own domain name?",
                    answer:
                      "Yes, you can use your own custom domain with all our plans. You can either purchase a domain through us or connect an existing domain you already own. We provide simple instructions to help you set up DNS records properly.",
                  },
                  {
                    question: "How do I add products to my store?",
                    answer:
                      "You can add products through your admin dashboard. Go to Products > Add Product, then fill in details like name, description, price, and images. You can also organize products into collections and add variants like size or color.",
                  },
                  {
                    question: "What payment methods can I accept?",
                    answer:
                      "Our platform supports all major payment gateways including Stripe, PayPal, Apple Pay, Google Pay, and more. You can choose which payment methods to activate based on your business needs and location.",
                  },
                  {
                    question: "Is there a transaction fee?",
                    answer:
                      "We don't charge any transaction fees on any of our plans. You'll only pay the standard processing fees charged by your payment provider (typically around 2.9% + 30¢ per transaction).",
                  },
                  {
                    question: "How do I get help if I'm stuck?",
                    answer:
                      "We offer multiple support channels including a comprehensive help center, email support on all plans, and live chat support on Pro and Enterprise plans. Our support team is available 24/7 to assist you with any questions or issues.",
                  },
                ].map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight mb-4">Contact Our Support Team</h2>
                  <p className="text-lg text-muted-foreground">
                    Can't find what you're looking for? Our dedicated support team is ready to help.
                  </p>
                </div>

                <div className="grid gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Send us a message and we'll get back to you within 24 hours.
                      </p>
                      <a href="mailto:support@storebuilder.com" className="text-primary font-medium hover:underline">
                        support@storebuilder.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone Support</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Available for Pro and Enterprise customers Monday-Friday, 9am-5pm PT.
                      </p>
                      <a href="tel:+18005551234" className="text-primary font-medium hover:underline">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MessagesSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Live Chat</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Chat with our support team in real-time for immediate assistance.
                      </p>
                      <Button variant="outline" size="sm" className="mt-1">
                        Start Chat
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Support Hours</h3>
                      <div className="text-sm text-muted-foreground grid gap-1">
                        <p>Monday - Friday: 24 hours</p>
                        <p>Saturday: 9am - 6pm PT</p>
                        <p>Sunday: 9am - 6pm PT</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-4">Send us a message</h3>
                  <form className="space-y-4">
                    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Please describe your issue in detail"
                      ></textarea>
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 md:py-32 overflow-hidden bg-muted/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent"></div>
          <div className="absolute inset-0 grid-pattern opacity-20"></div>
          <div className="container relative px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-6">
                Can't find what you're looking for?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Browse our extensive knowledge base or reach out to our friendly support team for personalized
                assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="default">
                  Browse Help Center
                </Button>
                <Button size="lg" variant="outline">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
