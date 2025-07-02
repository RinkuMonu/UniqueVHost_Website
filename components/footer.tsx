import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MailOpen, ArrowRight, Facebook, Instagram, Linkedin, X, LinkIcon } from "lucide-react"

export default function Footer() {
  const paymentMethods = [
    { src: "/placeholder.svg?height=24&width=40", alt: "Visa" },
    { src: "/placeholder.svg?height=24&width=40", alt: "Mastercard" },
    { src: "/placeholder.svg?height=24&width=40", alt: "PayPal" },
    { src: "/placeholder.svg?height=24&width=40", alt: "American Express" },
    { src: "/placeholder.svg?height=24&width=40", alt: "Wise" },
    { src: "/placeholder.svg?height=24&width=40", alt: "Skrill" },
  ]

  const featureLinks = [
    { name: "About Us", href: "/about" },
    { name: "News Feed", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Sign Up", href: "/sign-up" },
    { name: "Sign In", href: "/sign-in" },
  ]

  const helpLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Support", href: "/support" },
    { name: "Contact", href: "/contact" },
    { name: "Knowledgebase", href: "/knowledgebase" },
  ]

  const hostingLinks = [
    { name: "Shared Hosting", href: "/shared-hosting" },
    { name: "Reseller Hosting", href: "/reseller-hosting" },
    { name: "VPS Hosting", href: "/vps-hosting" },
    { name: "WordPress Hosting", href: "/wordpress-hosting" },
    { name: "Cloud Hosting", href: "/cloud-hosting" },
  ]

  const companyLinks = [
    { name: "Domain Checker", href: "/domain-checker" },
    { name: "WHMCS Template", href: "https://elitehost-whmcs.themewant.com/?systpl=elitehost" },
    { name: "Announcement", href: "https://elitehost-whmcs.themewant.com/index.php/announcements?systpl=elitehost" },
    {
      name: "Shared Hosting",
      href: "https://elitehost-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost",
    },
    { name: "VPS Hosting", href: "https://elitehost-whmcs.themewant.com/index.php/store/vps-hosting?systpl=elitehost" },
  ]

  const socialMediaLinks = [
    { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: X, href: "https://www.x.com", label: "X (Twitter)" },
    { icon: LinkIcon, href: "https://www.behance.com", label: "Behance" }, // Using LinkIcon for Behance
  ]

  return (
    <footer className="bg-elite-body-bg-2 text-elite-text-light py-section-p-y-lg md:py-section-p-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Widget 1: Logo & Contact */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="w-full lg:w-[280px]">
              <Link href="/" aria-label="main page link" className="mb-6 block">
                <Image src="/placeholder.svg?height=40&width=150" alt="Elitehost Logo" width={150} height={40} />
              </Link>
              <p className="text-base leading-relaxed mb-6">
                {"1811 Silverside Rd, Wilmington "} <br /> {"DE 19810, USA"}
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="icon mr-3 text-elite-primary">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+8060008899" className="hover:text-elite-primary transition-colors">
                    +806 (000) 88 99
                  </a>
                </div>
                <div className="flex items-center">
                  <div className="icon mr-3 text-elite-primary">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:info@elitehost.com" className="hover:text-elite-primary transition-colors">
                    info@elitehost.com
                  </a>
                </div>
              </div>
              <div className="w-full h-px bg-elite-default-border my-6"></div>
              <div className="payment__method">
                <ul className="flex flex-wrap gap-3">
                  {paymentMethods.map((method, index) => (
                    <li key={index}>
                      <Image src={method.src || "/placeholder.svg"} alt={method.alt} width={40} height={24} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Widget 2: Feature & Help */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8 lg:mb-0">
              <h5 className="text-elite-widget-title text-lg font-semibold mb-6">Feature</h5>
              <ul className="space-y-3">
                {featureLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-elite-primary transition-colors text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h5 className="text-elite-widget-title text-lg font-semibold mb-6">Help</h5>
              <ul className="space-y-3">
                {helpLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-elite-primary transition-colors text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Widget 3: Hosting & Company */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="mb-8 lg:mb-0">
              <h5 className="text-elite-widget-title text-lg font-semibold mb-6">Hosting</h5>
              <ul className="space-y-3">
                {hostingLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-elite-primary transition-colors text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h5 className="text-elite-widget-title text-lg font-semibold mb-6">Company</h5>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className="hover:text-elite-primary transition-colors text-base">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Widget 4: Newsletter & Social Media */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="w-full lg:w-[307px] lg:ml-auto">
              <h5 className="text-elite-widget-title text-lg font-semibold mb-6">Join Our Newsletter</h5>
              <p className="text-base leading-relaxed mb-6">{"We'll send you news and offers."}</p>
              <form action="#" className="relative mb-8">
                <input
                  type="email"
                  className="w-full py-4 pl-5 pr-12 rounded-md bg-elite-newsletter-bg text-elite-newsletter-text placeholder-elite-newsletter-text focus:outline-none focus:ring-1 focus:ring-elite-primary"
                  name="email"
                  placeholder="Enter mail"
                  required
                />
                <span className="absolute right-10 top-1/2 -translate-y-1/2 text-elite-newsletter-text">
                  <MailOpen className="w-5 h-5" />
                </span>
                <button
                  type="submit"
                  aria-label="Submit"
                  className="absolute right-0 top-0 h-full w-12 flex items-center justify-center bg-elite-newsletter-icon-bg text-white rounded-r-md hover:bg-elite-primary transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
              <div className="social__media">
                <h5 className="text-elite-widget-title text-lg font-semibold mb-6">social media</h5>
                <div className="flex space-x-3">
                  {socialMediaLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={`social-link-${social.label}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-elite-social-icon-bg text-white hover:bg-elite-social-icon-hover-bg transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="w-full h-px bg-elite-default-border my-12"></div>
      <div className="rts__footer__copyright is__common">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-elite-text-light text-sm">
              &copy; 2025 Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}