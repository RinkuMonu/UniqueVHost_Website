"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Tag, MessageSquare, User, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import '@/app/styles/style.css'
import '@/app/styles/header.css'

const navLinks = [
  {
    name: "Home",
    href: "/",
    type: "link",
  },
  {
    name: "About",
    href: "/about",
    type: "link",
  },
  {
    name: "Blog",
    href: "/blog",
    type: "link",
  },
  {
    name: "Server",
    href: "#",
    type: "mega-server",
    submenus: [
      {
        items: [
          { title: "Dedicated Server", href: "/dedicatedserver", icon: "/images/mega-menu/22.svg" },
          { title: "VPS Servers", href: "/vpsserver", icon: "/images/mega-menu/23.svg" },
          { title: "Cloud Servers (AWS / GCP style)", href: "/cloudserver", icon: "/images/mega-menu/24.svg" },
        ],
      },
    ],
  },
  {
    name: "Hosting",
    href: "#",
    type: "mega-hosting",
    submenus: [
      {
        items: [
          { title: "Shared Hosting", description: "Manage Shared Hosting", href: "/sharedHosting", icon: "/images/mega-menu/22.svg" },
          { title: "WordPress Hosting", description: "WordPress Hosting speed", href: "/wordpressHosting", icon: "/images/mega-menu/23.svg" },
          { title: "VPS Hosting", description: "Dedicated resources", href: "/vpsHosting", icon: "/images/mega-menu/24.svg" },
        ],
      },
      {
        items: [
          { title: "Reseller Hosting", description: "Earn additional revenue", href: "/resellerHosting", icon: "/images/mega-menu/25.svg" },
          { title: "Dedicated Hosting", description: "Hosting with tools", href: "/dedicatedHosting", icon: "/images/mega-menu/27.svg" },
          { title: "Cloud Hosting", description: "Manage Cloud Hosting", href: "/cloudHosting", icon: "/images/mega-menu/29.svg" },
        ],
      },
    ],
  },
  {
    name: "Features",
    href: "#",
    type: "dropdown",
    submenus: [
      { title: "WHMCS Template", href: "https://hostie-whmcs.themewant.com/?systpl=elitehost" },
      { title: "Shared Hosting", href: "https://hostie-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost" },
      { title: "VPS Hosting", href: "https://hostie-whmcs.themewant.com/index.php/store/vps-hosting?systpl=elitehost" },
      { title: "Announcement", href: "https://hostie-whmcs.themewant.com/index.php/announcements?systpl=elitehost" },
    ],
  },
  {
    name: "Help Center",
    href: "#",
    type: "dropdown",
    submenus: [
      { title: "FAQ", href: "/faq" },
      { title: "Support", href: "/support" },
      { title: "Contact", href: "/contact" },
      { title: "Knowledgebase", href: "/knowledgebase" },
    ],
  },
 
]


const HeaderTop = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <div className="bg-elite-top-bg text-white py-2 text-sm hidden md:block backdrop-blur-2xl" style={{ background: "#fd5d07" }}>
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center md:justify-center lg:justify-evenly">
          <div className="flex items-center space-x-4 lg:space-x-4">
            <a href="mailto:contact@elitehost.com" className="flex items-center text-2xl transition-colors lg:hidden xl:flex">
              <Mail className="w-4 h-4 mr-1" />
              <span>contact@elitehost.com</span>
            </a>
            <p className="flex items-center md:hidden lg:flex text-[14px]">
              <Tag className="w-4 h-4 mr-1" />
              Hosting Flash Sale: Starting at
              <strong className="bg-elite-promo-strong-bg px-1 py-0.5 rounded-md ml-1">$2.59/mo</strong> for a limited time
            </p>
          </div>
          <div className="flex items-center gap-10 lg:gap-5">
            <a href="#" className="flex items-center hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>Live Chat</span>
            </a>
            <div className="relative group menu-item elitehost-has-dropdown">
              <button onClick={() => setIsLoginOpen(!isLoginOpen)} className="flex items-center hover:text-white transition-colors focus:outline-none">
                <User className="w-4 h-4 mr-1" />
                <span>Login</span>
              </button>
              {isLoginOpen && (
                <div className="elitehost-submenu absolute right-0 mt-2 w-64 bg-white text-elite-secondary p-4 rounded-md shadow-md-custom z-50">
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <Input type="email" placeholder="Your email" required className="w-full" />
                    <Input type="password" placeholder="Password" required className="w-full" />
                    <Button type="submit" className="w-full bg-black hover:bg-blue-700 text-white">Log In</Button>
                    <a href="#" className="text-black hover:underline block text-center">Forgot your password?</a>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const HeaderMain = ({ isSticky }) => {
  return (
    <div className={cn("bg-white", isSticky ? "shadow-sm-custom" : "")}>
      <div className="container mx-auto rts-header__menu px-4 flex gap-3 items-center lg:py-0">
        <Link href="/" className="block">
          <Image src="/images/logo/logo-1.svg" alt="logo" width={160} height={40} className="h-10 w-auto" />
        </Link>
        <nav className="elitehost-menu hidden lg:block">
          <ul className="elitehost-desktop-menu">
            {navLinks.map((link) => (
              <li key={link.name} className="menu-item elitehost-has-dropdown group relative">
                <Link href={link.href} className="elitehost-dropdown-main-element flex items-center py-6 relative" style={{ display: "flex", gap: "5px" }}>
                  {link.name}
                  {link.type !== "link" && <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />}
                </Link>

                {(link.type === "mega-hosting" || link.type === "mega-server") && (
                  <div className={cn("rts-mega-menu", link.type === "mega-hosting" ? "big" : "")}>
                    <div
                      className={cn(
                        "grid gap-6",
                        link.type === "mega-server" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-1" : "grid-cols-2"
                      )}
                    >
                      {link.submenus?.map((section, secIdx) => (
                        <ul key={secIdx} className="mega-menu-item">
                          {section.section && <h5 className="font-bold text-[15px] mb-3 text-elite-secondary">{section.section}</h5>}
                          {section.items?.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link href={item.href} className="flex items-center p-2 rounded hover:bg-elite-submenu-hover-bg transition-all">
                                <Image src={item.icon} alt="icon" width={40} height={40} className="mr-4 p-2 bg-[#FFD4BD40] rounded" />
                                <div>
                                  <p className="mb-0">{item.title}</p>
                                  <span className="">{item.description}</span>
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      ))}
                    </div>
                  </div>
                )}


                {link.type === "dropdown" && (
                  <ul className="elitehost-submenu">
                    {link.submenus?.map((item, idx) => (
                      <li key={idx} className="nav-item">
                        <Link href={item.href} className="nav-link">{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          
        </nav>
      </div>
    </div>
  )
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 100)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <header className={cn("w-full transition-all duration-300 ease-in-out", isSticky && "fixed top-0 left-0 right-0 z-[99] bg-white shadow-sm-custom")}>
      {!isSticky && <HeaderTop />}
      <HeaderMain isSticky={isSticky} />
    </header>
  )
}
