import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Mail,
  Phone,
  DollarSign,
  Clock,
  AlertCircle,
  Server,
  Globe,
  CheckCircle,
  MessageSquare,
  CreditCard,
  Calendar,
  XCircle,
  RefreshCw,
} from "lucide-react"

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#fff2e2] py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#ab6545] p-4 backdrop-blur-sm">
                <DollarSign className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#ab6545] mb-4">
              Refund Policy
            </h1>
            <p className="mt-6 text-xl text-[#000]">Fair and transparent refund terms for all our hosting services.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Clock className="mr-2 h-4 w-4" />
                30-Day Guarantee
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <CheckCircle className="mr-2 h-4 w-4" />
                Fair Process
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <RefreshCw className="mr-2 h-4 w-4" />
                Quick Processing
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          {/* Company Info Card */}
          <Card className="border-0 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold">SeverHost - Premium Server Hosting Solutions</h2>
              <div className="mt-4 flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:billing@severhost.com" className="hover:underline">
                    billing@severhost.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  <a href="https://www.severhost.com" className="hover:underline">
                    www.severhost.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Money-Back Guarantee Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-green-100 p-2">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                30-Day Money-Back Guarantee
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                We stand behind our hosting services with a comprehensive 30-day money-back guarantee. If you're not
                completely satisfied with your hosting service within the first 30 days, we'll refund your hosting fees
                - no questions asked.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                This guarantee applies to all new hosting accounts and covers the hosting service fees only. Some
                exclusions apply as detailed in the sections below.
              </p>
            </CardContent>
          </Card>

          {/* Eligible Services Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-blue-100 p-2">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                Eligible Services
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The following services are covered under our refund policy:
              </p>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {[
                  {
                    title: "Shared Hosting",
                    desc: "All shared hosting plans including Starter, Professional, and Business packages are eligible for full refunds within 30 days.",
                    icon: Globe,
                  },
                  {
                    title: "VPS Hosting",
                    desc: "Virtual Private Server plans are eligible for refunds within 30 days. Custom configurations may have different terms.",
                    icon: Server,
                  },
                  {
                    title: "Dedicated Servers",
                    desc: "Dedicated server rentals are eligible for refunds within 30 days, excluding setup fees and custom hardware configurations.",
                    icon: Shield,
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-blue-300 hover:shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-blue-100 p-3">
                          <item.icon className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="mb-3 font-semibold text-center">{item.title}</h3>
                      <p className="text-sm text-muted-foreground text-center">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Non-Refundable Items Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-red-50 to-orange-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-red-100 p-2">
                  <XCircle className="h-6 w-6 text-red-600" />
                </div>
                Non-Refundable Items
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The following items and services are not eligible for refunds:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Domain name registrations and renewals",
                  "SSL certificate purchases",
                  "Setup fees for custom configurations",
                  "Third-party software licenses",
                  "Email hosting add-ons after 30 days",
                  "Backup service fees",
                  "Migration services and data transfer fees",
                  "Dedicated IP address assignments",
                  "Custom development work",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50">
                    <div className="rounded-full bg-red-100 p-1 mt-1">
                      <XCircle className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Refund Process Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-purple-100 p-2">
                  <RefreshCw className="h-6 w-6 text-purple-600" />
                </div>
                Refund Process
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Follow these simple steps to request a refund:
              </p>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: 1,
                    title: "Submit Request",
                    desc: "Contact our billing team via email or support ticket with your refund request.",
                    icon: Mail,
                  },
                  {
                    step: 2,
                    title: "Verification",
                    desc: "We'll verify your account details and eligibility for the refund within 24 hours.",
                    icon: CheckCircle,
                  },
                  {
                    step: 3,
                    title: "Processing",
                    desc: "Once approved, refunds are processed within 3-5 business days to your original payment method.",
                    icon: CreditCard,
                  },
                  {
                    step: 4,
                    title: "Confirmation",
                    desc: "You'll receive email confirmation once the refund has been processed and issued.",
                    icon: Mail,
                  },
                ].map((process, index) => (
                  <Card
                    key={index}
                    className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-purple-300 hover:shadow-md"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-purple-100 p-3">
                          <process.icon className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="mb-2 text-sm font-semibold text-purple-600">Step {process.step}</div>
                      <h3 className="mb-3 font-semibold">{process.title}</h3>
                      <p className="text-sm text-muted-foreground">{process.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Special Circumstances Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-yellow-50 to-orange-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-yellow-100 p-2">
                  <AlertCircle className="h-6 w-6 text-yellow-600" />
                </div>
                Special Circumstances
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Service Downtime",
                    desc: "If our services experience extended downtime beyond our SLA guarantees, you may be eligible for service credits or prorated refunds regardless of the 30-day window.",
                  },
                  {
                    title: "Account Violations",
                    desc: "Accounts suspended or terminated for violations of our Terms of Service or Acceptable Use Policy are not eligible for refunds.",
                  },
                  {
                    title: "Chargebacks",
                    desc: "Initiating a chargeback will result in immediate account suspension. Please contact us first to resolve any billing disputes.",
                  },
                  {
                    title: "Partial Refunds",
                    desc: "For annual or multi-year plans, partial refunds may be calculated on a prorated basis for unused service periods within the first 30 days.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-yellow-300 pl-6 py-2">
                    <h4 className="font-semibold text-yellow-800 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Processing Times */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-green-100 p-2">
                  <Clock className="h-6 w-6 text-green-600" />
                </div>
                Processing Times & Methods
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Credit Card",
                    desc: "Refunds to credit cards typically appear within 3-5 business days, depending on your card issuer.",
                    icon: CreditCard,
                  },
                  {
                    title: "PayPal",
                    desc: "PayPal refunds are usually processed instantly and appear in your PayPal account immediately.",
                    icon: DollarSign,
                  },
                  {
                    title: "Bank Transfer",
                    desc: "Wire transfer refunds may take 5-10 business days and may be subject to banking fees.",
                    icon: Calendar,
                  },
                ].map((method, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-green-100 p-3">
                        <method.icon className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold">{method.title}</h3>
                    <p className="text-sm text-muted-foreground">{method.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="border-0 bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-white/20 p-4 backdrop-blur-sm">
                  <MessageSquare className="h-8 w-8" />
                </div>
              </div>
              <h2 className="mb-4 text-2xl font-bold">Need a Refund?</h2>
              <p className="mb-6 text-orange-100">
                Contact our billing team to process your refund request. We're here to help make the process as smooth
                as possible:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:billing@severhost.com"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Mail className="h-5 w-5" />
                  billing@severhost.com
                </a>
                <a
                  href="tel:+1-800-SEVERHOST"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Phone className="h-5 w-5" />
                  +1-800-SEVERHOST
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
