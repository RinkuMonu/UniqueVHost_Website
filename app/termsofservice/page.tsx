import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  FileText,
  Mail,
  Phone,
  Lock,
  AlertTriangle,
  Users,
  AlertCircle,
  Server,
  Globe,
  Settings,
  MessageSquare,
  Clock,
  CreditCard,
  Ban,
  CheckCircle,
} from "lucide-react"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#fff2e2] py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#ab6545] p-4 backdrop-blur-sm">
                <FileText className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#ab6545] mb-4">
              Terms of Service
            </h1>
            <p className="mt-6 text-xl text-[#000]">
              Clear terms and conditions for our hosting services and platform usage.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Server className="mr-2 h-4 w-4" />
                Hosting Services
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Shield className="mr-2 h-4 w-4" />
                Service Level
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Users className="mr-2 h-4 w-4" />
                User Rights
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
                  <a href="mailto:legal@severhost.com" className="hover:underline">
                    legal@severhost.com
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

          {/* Agreement Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="  py-5 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Service Agreement
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                These Terms of Service ("Terms") govern your use of SeverHost's hosting services, including shared
                hosting, VPS, dedicated servers, and cloud solutions. By using our services, you agree to be bound by
                these terms.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                These terms constitute a legally binding agreement between you and SeverHost. Please read them carefully
                before using our services. If you do not agree to these terms, you may not use our services.
              </p>
            </CardContent>
          </Card>

          {/* Service Levels Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50  py-5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-green-100 p-2">
                  <Server className="h-6 w-6 text-green-600" />
                </div>
                Service Levels & Guarantees
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We provide different service levels with specific guarantees and limitations:
              </p>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {[
                  {
                    title: "Uptime Guarantee",
                    desc: "99.9% uptime guarantee for all hosting services. Service credits available for downtime exceeding this threshold.",
                    icon: CheckCircle,
                  },
                  {
                    title: "Support Response",
                    desc: "24/7 technical support with response times varying by service level: Premium (1 hour), Standard (4 hours), Basic (24 hours).",
                    icon: Clock,
                  },
                  {
                    title: "Resource Limits",
                    desc: "Each hosting plan has specific resource allocations. Exceeding limits may result in service suspension or upgrade requirements.",
                    icon: Settings,
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="border-2 border-dashed border-gray-200 bg-gradient-to-br from-white to-gray-50 transition-all hover:border-green-300 hover:shadow-md"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex justify-center">
                        <div className="rounded-full bg-green-100 p-3">
                          <item.icon className="h-6 w-6 text-green-600" />
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

          {/* Acceptable Use Policy */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50  py-5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-red-100 p-2">
                  <Ban className="h-6 w-6 text-red-600" />
                </div>
                Acceptable Use Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                The following activities are strictly prohibited on our hosting platform:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "Illegal content or activities violating local or international laws",
                  "Spam, phishing, or unsolicited bulk email distribution",
                  "Malware, viruses, or malicious code hosting",
                  "Adult content or pornographic material",
                  "Copyright infringement or pirated content",
                  "Resource abuse or excessive server load",
                  "Cryptocurrency mining or similar resource-intensive activities",
                  "Proxy services or anonymization tools",
                  "Content promoting violence, hatred, or discrimination",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-red-50/50">
                    <div className="rounded-full bg-red-100 p-1 mt-1">
                      <Ban className="h-3 w-3 text-red-600" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Billing & Payment Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50  py-5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-purple-100 p-2">
                  <CreditCard className="h-6 w-6 text-purple-600" />
                </div>
                Billing & Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Payment Schedule",
                    desc: "Services are billed in advance based on your selected billing cycle (monthly, quarterly, annually). Payment is due upon invoice generation.",
                  },
                  {
                    title: "Late Payments",
                    desc: "Accounts with overdue payments may be suspended after 7 days. A $25 late fee applies to payments more than 15 days overdue.",
                  },
                  {
                    title: "Refund Policy",
                    desc: "30-day money-back guarantee for new hosting accounts. Setup fees and domain registrations are non-refundable. See our Refund Policy for details.",
                  },
                  {
                    title: "Price Changes",
                    desc: "We reserve the right to modify pricing with 30 days advance notice. Existing customers will be grandfathered at current rates for their current billing cycle.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-purple-300 pl-6 py-2">
                    <h4 className="font-semibold text-purple-800 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Account Management */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50  py-5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-blue-100 p-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                Account Management & Termination
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    title: "Account Security",
                    desc: "You are responsible for maintaining the security of your account credentials and all activities under your account.",
                    icon: Lock,
                  },
                  {
                    title: "Service Termination",
                    desc: "Either party may terminate services with 30 days notice. Immediate termination may occur for terms violations.",
                    icon: AlertTriangle,
                  },
                  {
                    title: "Data Backup",
                    desc: "While we provide backup services, you are responsible for maintaining your own backups of critical data.",
                    icon: Shield,
                  },
                  {
                    title: "Account Transfer",
                    desc: "Account ownership transfers require written authorization and may be subject to verification procedures.",
                    icon: Users,
                  },
                ].map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-blue-50/50">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-blue-100 p-3">
                        <item.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 py-5">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-yellow-100 p-2">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                SeverHost's liability is limited to the amount paid for services in the 12 months preceding any claim.
                We are not liable for indirect, incidental, or consequential damages including but not limited to loss
                of profits, data, or business interruption.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Services are provided "as is" without warranties of any kind. While we strive for 100% uptime and
                security, no hosting service can guarantee absolute availability or security against all threats.
              </p>
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
              <h2 className="mb-4 text-2xl font-bold">Legal Questions?</h2>
              <p className="mb-6 text-orange-100">
                If you have questions about these Terms of Service or need legal clarification, contact our legal team:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:legal@severhost.com"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Mail className="h-5 w-5" />
                  legal@severhost.com
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
