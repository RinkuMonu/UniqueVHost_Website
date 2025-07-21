import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  FileText,
  Mail,
  Phone,
  Lock,
  Eye,
  Users,
  AlertCircle,
  Database,
  Globe,
  Settings,
  MessageSquare,
  Server,
} from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#fff2e2] py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto max-w-4xl text-center text-white">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-[#ab6545] p-4 backdrop-blur-sm">
                <Shield className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-[#ab6545] mb-4">
              Privacy Policy
            </h1>
            <p className="mt-6 text-xl text-[#000]">
              Your privacy is our priority. Learn how we protect and handle your data.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Lock className="mr-2 h-4 w-4" />
                Data Protection
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Eye className="mr-2 h-4 w-4" />
                Transparency
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-[#000] hover:bg-white/30">
                <Server className="mr-2 h-4 w-4" />
                Secure Hosting
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
                  <a href="mailto:privacy@severhost.com" className="hover:underline">
                    privacy@severhost.com
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

          {/* Introduction Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-blue-50 to-purple-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-blue-100 p-2">
                  <AlertCircle className="h-6 w-6 text-blue-600" />
                </div>
                Introduction
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                Welcome to SeverHost! We are committed to protecting your privacy and handling your data with the
                highest level of security and transparency. This Privacy Policy explains how we collect, use, disclose,
                and safeguard your information when you use our server hosting, cloud services, and related solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By using our hosting services, you agree to the collection and use of information in accordance with
                this policy. If you do not agree with the terms of this Privacy Policy, please discontinue use of our
                services.
              </p>
            </CardContent>
          </Card>

          {/* Information We Collect Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-green-50 to-blue-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-green-100 p-2">
                  <Database className="h-6 w-6 text-green-600" />
                </div>
                Information We Collect
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We collect various types of information to provide reliable hosting services and improve our offerings.
              </p>
              <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
                {[
                  {
                    title: "Account Information",
                    desc: "Personal details provided during registration including name, email, billing address, phone number, and payment information for hosting account management.",
                    icon: Users,
                  },
                  {
                    title: "Server Usage Data",
                    desc: "Technical information about your server usage, bandwidth consumption, storage utilization, and performance metrics to ensure optimal service delivery.",
                    icon: Server,
                  },
                  {
                    title: "Website Analytics",
                    desc: "Information about how you interact with our website and control panel, including IP addresses, browser information, and usage patterns.",
                    icon: Eye,
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

          {/* How We Use Information Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-purple-100 p-2">
                  <Settings className="h-6 w-6 text-purple-600" />
                </div>
                How We Use Your Information
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We use the collected data to provide exceptional hosting services:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  "To provision and maintain your hosting services",
                  "To process billing and manage your account",
                  "To provide technical support and customer service",
                  "To monitor server performance and uptime",
                  "To prevent abuse and ensure service security",
                  "To send service notifications and updates",
                  "To improve our hosting infrastructure",
                  "To comply with legal and regulatory requirements",
                  "To offer relevant hosting solutions and upgrades",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-purple-50/50">
                    <div className="rounded-full bg-purple-100 p-1 mt-1">
                      <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Security Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-green-50 to-teal-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-green-100 p-2">
                  <Lock className="h-6 w-6 text-green-600" />
                </div>
                Data Security & Infrastructure
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-4">
                As a hosting provider, security is at the core of everything we do. We implement enterprise-grade
                security measures including encrypted data transmission, secure data centers with 24/7 monitoring,
                regular security audits, and compliance with industry standards.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our servers are housed in Tier-3 data centers with redundant power, cooling, and network connectivity.
                All customer data is backed up regularly and stored securely. However, we recommend that customers
                maintain their own backups as an additional security measure.
              </p>
            </CardContent>
          </Card>

          {/* Data Retention Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-orange-50 to-red-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-orange-100 p-2">
                  <FileText className="h-6 w-6 text-orange-600" />
                </div>
                Data Retention & Sharing
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                We retain your data only as long as necessary to provide services and comply with legal obligations:
              </p>
              <div className="space-y-6">
                {[
                  {
                    title: "Account Data",
                    desc: "Retained for the duration of your hosting service plus 30 days after account closure for billing and support purposes.",
                  },
                  {
                    title: "Server Logs",
                    desc: "Technical logs are retained for 90 days for troubleshooting and security monitoring purposes.",
                  },
                  {
                    title: "Billing Records",
                    desc: "Financial records are retained for 7 years as required by accounting and tax regulations.",
                  },
                  {
                    title: "Third-Party Sharing",
                    desc: "We do not sell or rent your personal information. Data may be shared with payment processors, data center partners, and legal authorities when required by law.",
                  },
                ].map((item, index) => (
                  <div key={index} className="border-l-4 border-orange-300 pl-6 py-2">
                    <h4 className="font-semibold text-orange-800 mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Your Rights Section */}
          <Card className="border-0 shadow-lg">
            <CardHeader className="py-5 bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className="rounded-full bg-blue-100 p-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                Your Rights & Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                You have full control over your data and hosting account:
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Account Access",
                    desc: "Access and update your account information through our customer portal at any time.",
                    icon: Eye,
                  },
                  {
                    title: "Data Export",
                    desc: "Download your website files, databases, and email data through our control panel or support team.",
                    icon: Database,
                  },
                  {
                    title: "Account Deletion",
                    desc: "Request account closure and data deletion with 30 days notice. Some data may be retained for legal compliance.",
                    icon: Settings,
                  },
                ].map((right, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="rounded-full bg-blue-100 p-3">
                        <right.icon className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.desc}</p>
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
              <h2 className="mb-4 text-2xl font-bold">Privacy Questions?</h2>
              <p className="mb-6 text-orange-100">
                If you have any questions about this Privacy Policy or need assistance with your data rights, contact
                our privacy team:
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="mailto:privacy@severhost.com"
                  className="flex items-center gap-2 rounded-full bg-white/20 px-6 py-3 backdrop-blur-sm transition-all hover:bg-white/30"
                >
                  <Mail className="h-5 w-5" />
                  privacy@severhost.com
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
