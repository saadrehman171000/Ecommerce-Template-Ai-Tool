import Link from "next/link"
import { CheckCircle, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  const plans = [
    {
      name: "Basic",
      price: "$19",
      description: "Perfect for small businesses just getting started with e-commerce.",
      features: [
        { name: "Up to 100 products", tooltip: "Add up to 100 products to your store" },
        { name: "2 staff accounts", tooltip: "Invite 2 team members to help manage your store" },
        { name: "Basic analytics", tooltip: "View essential metrics like sales and visitors" },
        { name: "Standard support", tooltip: "Email support with 24-48 hour response time" },
        { name: "Basic customization", tooltip: "Customize colors, fonts, and layouts" },
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      description: "Ideal for growing businesses that need more features and flexibility.",
      features: [
        { name: "Up to 1,000 products", tooltip: "Add up to 1,000 products to your store" },
        { name: "5 staff accounts", tooltip: "Invite 5 team members to help manage your store" },
        { name: "Advanced analytics", tooltip: "Detailed reports and customer insights" },
        { name: "Priority support", tooltip: "Email and chat support with 12-24 hour response time" },
        { name: "Advanced customization", tooltip: "Full control over your store's design" },
        { name: "Abandoned cart recovery", tooltip: "Automatically email customers who leave items in their cart" },
        { name: "Discount codes", tooltip: "Create and manage promotional codes" },
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$99",
      description: "For established businesses with high volume sales and custom needs.",
      features: [
        { name: "Unlimited products", tooltip: "No limit on the number of products you can add" },
        { name: "Unlimited staff accounts", tooltip: "Invite your entire team to help manage your store" },
        {
          name: "Advanced analytics with custom reports",
          tooltip: "Create custom reports tailored to your business needs",
        },
        { name: "24/7 premium support", tooltip: "Phone, email, and chat support available 24/7" },
        { name: "Full customization", tooltip: "Complete control over your store's design and functionality" },
        { name: "Advanced marketing tools", tooltip: "Email marketing, SEO tools, and social media integration" },
        { name: "API access", tooltip: "Connect your store to other systems and services" },
        { name: "Dedicated account manager", tooltip: "A personal point of contact for all your needs" },
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
          <div className="absolute inset-0 grid-pattern"></div>
          <div className="absolute inset-0 noise-bg"></div>

          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="px-3 py-1 text-sm" variant="outline">
                Pricing
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Simple, Transparent Pricing
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Choose the perfect plan for your business needs. No hidden fees or long-term contracts.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`card-hover relative overflow-hidden rounded-xl border bg-card p-8 ${
                    plan.popular ? "border-primary shadow-lg" : "shadow-md"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-5 -right-5 h-24 w-24">
                      <div className="absolute transform rotate-45 bg-primary text-primary-foreground text-xs font-medium py-1 right-[-35px] top-[32px] w-[170px] text-center">
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      <span className="text-sm text-muted-foreground ml-1">/month</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>

                  <div className="my-8 h-px bg-border" />

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <TooltipProvider key={i}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <li className="flex items-start">
                              <div className="mr-3 mt-1">
                                <CheckCircle className="h-5 w-5 text-primary" />
                              </div>
                              <span className="text-sm">{feature.name}</span>
                              <HelpCircle className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" />
                            </li>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs text-xs">{feature.tooltip}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link href={plan.name === "Enterprise" ? "/contact" : "/templates"}>
                      <Button
                        className={`w-full ${plan.popular ? "" : "bg-card hover:bg-card/80 text-primary border-primary"}`}
                        variant={plan.popular ? "default" : "outline"}
                        size="lg"
                      >
                        {plan.cta}
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-20 space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Find answers to common questions about our platform and pricing.
                </p>
              </div>

              <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "Can I upgrade or downgrade my plan later?",
                    answer:
                      "Yes, you can change your plan at any time. When upgrading, you'll be charged the prorated difference. When downgrading, the new rate will apply to your next billing cycle.",
                  },
                  {
                    question: "Is there a free trial available?",
                    answer:
                      "Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial.",
                  },
                  {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
                  },
                  {
                    question: "Do you offer refunds?",
                    answer:
                      "We offer a 30-day money-back guarantee. If you're not satisfied with our service, contact us within 30 days of your purchase for a full refund.",
                  },
                  {
                    question: "Can I cancel my subscription anytime?",
                    answer:
                      "Yes, you can cancel your subscription at any time from your account settings. There are no cancellation fees.",
                  },
                  {
                    question: "Do you offer discounts for annual billing?",
                    answer: "Yes, we offer a 20% discount when you choose annual billing instead of monthly billing.",
                  },
                ].map((faq, i) => (
                  <div key={i} className="rounded-xl border bg-card p-6 shadow-sm">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 rounded-xl border bg-card p-8 text-center shadow-md">
              <Badge className="mb-4 px-3 py-1 text-sm" variant="outline">
                Enterprise
              </Badge>
              <h2 className="text-2xl font-bold mb-4">Need a custom solution?</h2>
              <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
                Our enterprise plan is perfect for large businesses with specific requirements. Contact our sales team
                to discuss your needs and get a tailored quote.
              </p>
              <Link href="/contact">
                <Button size="lg">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
