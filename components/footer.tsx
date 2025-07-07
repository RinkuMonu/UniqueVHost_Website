import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Mail,
  MailOpen,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  X,
  LinkIcon,
} from "lucide-react"

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
    { name: "Shared Hosting", href: "https://elitehost-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost" },
    { name: "VPS Hosting", href: "https://elitehost-whmcs.themewant.com/index.php/store/vps-hosting?systpl=elitehost" },
  ]

  const socialMediaLinks = [
    { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
    { icon: X, href: "https://www.x.com", label: "X (Twitter)" },
    { icon: LinkIcon, href: "https://www.behance.com", label: "Behance" },
  ]

  return (
    <footer className="relative bg-white text-gray-700 pt-20 pb-10 overflow-hidden">
      {/* After/Before style blobs */}
      <div className="absolute -top-10 -left-16 w-80 h-80 bg-orange-100 rounded-full  opacity-30 "></div>
      <div className="absolute -bottom-10 -right-20 w-80 h-80 bg-orange-200 rounded-full  opacity-30 "></div>
      {/* <div className="absolute -top-20 right-1/3 w-96 h-96 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full  opacity-20 "></div> */}

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        {/* Logo & Contact */}
        <div>
          <Link href="/" className="inline-block mb-6">
            <Image src="/images/logo/logo-1.svg" alt="Logo" width={150} height={40} />
          </Link>
          <p className="text-gray-500 mb-4">
            1811 Silverside Rd, Wilmington <br /> DE 19810, USA
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-orange-500" />
              <a href="tel:+8060008899" className="hover:text-orange-500 transition-colors">+806 (000) 88 99</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-orange-500" />
              <a href="mailto:info@elitehost.com" className="hover:text-orange-500 transition-colors">info@elitehost.com</a>
            </div>
          </div>
          {/* <div className="flex flex-wrap gap-3 border-t border-gray-200 pt-4">
            {paymentMethods.map((method, i) => (
              <Image key={i} src={method.src} alt={method.alt} width={40} height={24} />
            ))}
          </div> */}
        </div>

        {/* Feature & Help */}
        <div>
          <h5 className="text-gray-900 text-lg font-bold mb-4">Feature</h5>
          <ul className="space-y-2 mb-6">
            {featureLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
          <h5 className="text-gray-900 text-lg font-bold mb-4">Help</h5>
          <ul className="space-y-2">
            {helpLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Hosting & Company */}
        <div>
          <h5 className="text-gray-900 text-lg font-bold mb-4">Hosting</h5>
          <ul className="space-y-2 mb-6">
            {hostingLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
          <h5 className="text-gray-900 text-lg font-bold mb-4">Company</h5>
          <ul className="space-y-2">
            {companyLinks.map((link, i) => (
              <li key={i}>
                <Link href={link.href} className="hover:text-orange-500 transition-colors">{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h5 className="text-gray-900 text-lg font-bold mb-4">Join Our Newsletter</h5>
          <p className="text-gray-500 mb-4">Get updates and special offers.</p>
          <form action="#" className="relative mb-6">
            <input
              type="email"
              className="w-full py-3 pl-4 pr-14 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Enter your email"
            />
            <span className="absolute right-14 top-1/2 -translate-y-1/2 text-gray-400">
              <MailOpen className="w-5 h-5" />
            </span>
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-orange-500 text-white rounded-r-lg hover:bg-orange-600 transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
          <h5 className="text-gray-900 text-lg font-bold mb-4">Follow Us</h5>
          <div className="flex space-x-3">
            {socialMediaLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-orange-500 hover:text-white transition-all border border-gray-200"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-12 pt-6 text-center text-gray-500 text-sm">
        &copy; 2025 Premium Web Hosting, Cloud, VPS, AI Website Builder & Domain Registration Services.
      </div>
    </footer>
  )
}
