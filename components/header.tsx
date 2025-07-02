"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Tag, MessageSquare, User, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils" // Assuming you have a cn utility function

// Data for navigation links
const navLinks = [
  {
    name: "Home",
    href: "#",
    type: "mega-home",
    submenus: [
      { title: "Home 01", href: "/", image: "/placeholder.svg?height=100&width=150" },
      { title: "Home 02", href: "/", image: "/placeholder.svg?height=100&width=150" },
      { title: "Home 03", href: "/", image: "/placeholder.svg?height=100&width=150" },
      { title: "Home 04", href: "/", image: "/placeholder.svg?height=100&width=150" },
      { title: "Home 05", href: "/", image: "/placeholder.svg?height=100&width=150" },
      { title: "Home 06", href: "/", image: "/placeholder.svg?height=100&width=150" },
    ],
  },
  {
    name: "Pages",
    href: "#",
    type: "mega-pages",
    submenus: [
      {
        section: "About",
        items: [
          {
            title: "About Elitehost",
            description: "Get know about Elitehost",
            href: "/about",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Pricing",
            description: "Elitehost provide pro price",
            href: "/pricing",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Blog",
            description: "Read Elitehost article",
            href: "/blog",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
      {
        section: "Support",
        items: [
          {
            title: "Support",
            description: "Provide detailed explan",
            href: "/support",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Sign Up",
            description: "Register Account",
            href: "/sign-up",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Blog List",
            description: "Read Elitehost article",
            href: "/blog-list",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
      {
        section: "Other",
        items: [
          {
            title: "Domain Checker",
            description: "Provide detailed explain",
            href: "/domain-checker",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Sign In",
            description: "Login Account",
            href: "/sign-in",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Blog Details",
            description: "Read Elitehost article",
            href: "/blog-details",
            icon: "/placeholder.svg?height=24&width=24",
          },
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
        section: "Hosting Types",
        items: [
          {
            title: "Shared Hosting",
            description: "Manage Shared Hosting",
            href: "/shared-hosting",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "WordPress Hosting",
            description: "WordPress Hosting speed",
            href: "/wordpress-hosting",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "VPS Hosting",
            description: "Dedicated resources",
            href: "/vps-hosting",
            icon: "/placeholder.svg?height=24&width=24",
          },
        ],
      },
      {
        section: "Advanced Hosting",
        items: [
          {
            title: "Reseller Hosting",
            description: "Earn additional revenue",
            href: "/reseller-hosting",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Dedicated Hosting",
            description: "Hosting that gives you tools",
            href: "/dedicated-hosting",
            icon: "/placeholder.svg?height=24&width=24",
          },
          {
            title: "Cloud Hosting",
            description: "Manage Cloud Hosting",
            href: "/cloud-hosting",
            icon: "/placeholder.svg?height=24&width=24",
          },
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
      {
        title: "Shared Hosting",
        href: "https://hostie-whmcs.themewant.com/index.php/store/shared-hosting?systpl=elitehost",
      },
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
    <div className="bg-elite-top-bg text-white py-2 text-sm leading-none hidden md:block backdrop-blur-2xl" style={{background:"#fd5d07",}}>
      <div className="container mx-auto px-2">
        <div className="flex justify-between items-center md:justify-center lg:justify-between">
          <div className="flex items-center space-x-4 lg:space-x-4">
            <a
              href="mailto:contact@elitehost.com"
              className="flex items-center hover:text-white transition-colors lg:hidden xl:flex"
            >
              <Mail className="w-4 h-4 mr-1" />
              <span>contact@elitehost.com</span>
            </a>
            <p className="flex items-center md:hidden lg:flex">
              <Tag className="w-4 h-4 mr-1" />
              {"Hosting Flash Sale: Starting at "}
              <strong className="text-elite-promo-strong-text bg-elite-promo-strong-bg px-1 py-0.5 rounded-md leading-none ml-1">
                {" $2.59/mo"}
              </strong>
              {" for a limited time"}
            </p>
          </div>
          <div className="flex items-center gap-10 lg:gap-5">
            <a href="#" className="flex items-center hover:text-white transition-colors">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>Live Chat</span>
            </a>
            <div className="relative group">
              <button
                onClick={() => setIsLoginOpen(!isLoginOpen)}
                className="flex items-center hover:text-white transition-colors focus:outline-none"
                aria-expanded={isLoginOpen}
                aria-controls="login-dropdown"
              >
                <User className="w-4 h-4 mr-1" />
                <span>Login</span>
              </button>
              {isLoginOpen && (
                <div
                  id="login-dropdown"
                  className="absolute right-0 mt-2 w-64 bg-white text-elite-secondary p-4 rounded-md shadow-md-custom z-50"
                >
                  <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
                    <div>
                      <Input type="email" placeholder="Your email" required className="w-full" />
                    </div>
                    <div>
                      <Input type="password" placeholder="Password" required className="w-full" />
                    </div>
                    <Button type="submit" className="w-full bg-elite-primary hover:bg-blue-700 text-white">
                      Log In
                    </Button>
                    <a href="#" className="text-sm text-elite-primary hover:underline block text-center">
                      Forgot your password?
                    </a>
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

const HeaderMain = ({ isSticky }: { isSticky: boolean }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className={cn("bg-white", isSticky ? "shadow-sm-custom py-4" : "py-4")}>
      <div className="container mx-auto px-4 flex justify-between items-center lg:py-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="block">
            <Image
              src={isSticky ? "/placeholder.svg?height=40&width=150&dark" : "/placeholder.svg?height=40&width=150"}
              alt="elitehost"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex space-x-12 xl:space-x-8 text-elite-secondary font-semibold">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center py-6 relative transition-colors",
                    isSticky ? "hover:text-elite-primary" : "hover:text-elite-primary",
                    "after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:bottom-[28px] after:bg-elite-primary after:transition-all after:duration-300 after:ease-in-out",
                    "hover:after:w-full",
                  )}
                >
                  {link.name}
                  {link.type !== "link" && (
                    <ChevronDown className="w-3 h-3 ml-1 group-hover:rotate-180 transition-transform" />
                  )}
                </Link>
                {link.type === "mega-home" && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 hidden group-hover:block bg-white shadow-md-custom rounded-xl p-8 w-[1000px] z-50 transition-all duration-300 ease-in-out">
                    <div className="grid grid-cols-6 gap-x-5 gap-y-4">
                      {link.submenus?.map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div className="mb-4 overflow-hidden rounded-md border border-elite-border-light">
                            <Link href={item.href} className="block">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                width={150}
                                height={100}
                                className="w-full h-[150px] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                              />
                            </Link>
                          </div>
                          <h4 className="text-base font-medium">
                            <Link href={item.href} className="hover:underline text-elite-secondary">
                              {item.title}
                            </Link>
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {(link.type === "mega-pages" || link.type === "mega-hosting") && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-0 pt-4 hidden group-hover:block bg-white shadow-md-custom rounded-xl p-8 w-[700px] z-50 transition-all duration-300 ease-in-out">
                    <div className="grid grid-cols-3 gap-4">
                      {link.submenus?.map((section, secIdx) => (
                        <ul key={secIdx} className="space-y-2">
                          {section.section && (
                            <h5 className="font-bold text-sm mb-1 text-elite-secondary">{section.section}</h5>
                          )}
                          {section.items?.map((item, itemIdx) => (
                            <li key={itemIdx}>
                              <Link
                                href={item.href}
                                className="flex items-center p-2 rounded-md hover:bg-elite-submenu-hover-bg transition-colors"
                              >
                                <Image
                                  src={item.icon || "/placeholder.svg"}
                                  alt="icon"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 mr-4 p-2 bg-elite-icon-bg rounded"
                                />
                                <div>
                                  <p className="font-medium text-base leading-relaxed text-elite-secondary">
                                    {item.title}
                                  </p>
                                  <span className="font-normal text-sm leading-normal text-elite-info-text">
                                    {item.description}
                                  </span>
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
                  <ul className="absolute left-0 mt-0 pt-4 hidden group-hover:block bg-white shadow-md-custom rounded-xl w-48 z-50 transition-all duration-300 ease-in-out py-4">
                    {link.submenus?.map((item, idx) => (
                      <li key={idx}>
                        <Link
                          href={item.href}
                          className="block px-4 py-2 text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg transition-colors rounded-md mx-2"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right section: Currency, Client Area, Mobile Toggle */}
        <div className="flex items-center gap-6 lg:gap-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="flex items-center text-elite-secondary hover:text-elite-primary md:hidden lg:flex"
              >
                <span>USD</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-32 shadow-sm-custom">
              <DropdownMenuItem className="text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg">
                Euro
              </DropdownMenuItem>
              <DropdownMenuItem className="text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg">
                Real
              </DropdownMenuItem>
              <DropdownMenuItem className="text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg">
                Ruble
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="https://hostie-whmcs.themewant.com/?systpl=elitehost"
            target="_blank"
            className="hidden xs:hidden md:block border border-elite-secondary px-8 py-2 text-elite-secondary rounded-md font-medium transition-colors hover:bg-elite-primary hover:text-white hover:border-elite-primary"
          >
            Client Area
          </Link>

          {/* Mobile Menu Toggle */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle mobile menu"
                className="h-12 w-12 border border-elite-secondary rounded-md text-elite-secondary"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-xs p-4 bg-white backdrop-blur-md">
              <div className="flex justify-between items-center mb-6">
                <Image
                  src="/placeholder.svg?height=40&width=150"
                  alt="elitehost"
                  width={150}
                  height={40}
                  className="h-10 w-auto"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                  className="h-12 w-12 bg-elite-primary text-white"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="mt-4">
                <Accordion type="single" collapsible className="w-full">
                  {navLinks.map((link, index) => (
                    <AccordionItem value={`item-${index}`} key={link.name}>
                      <AccordionTrigger className="text-left text-lg font-bold text-elite-secondary hover:no-underline border-b border-gray-100 py-3">
                        {link.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        {link.type === "mega-home" && (
                          <div className="grid grid-cols-2 gap-4 p-2">
                            {link.submenus?.map((item, idx) => (
                              <div key={idx} className="text-center">
                                <Link href={item.href} className="block mb-1">
                                  <Image
                                    src={item.image || "/placeholder.svg"}
                                    alt={item.title}
                                    width={100}
                                    height={60}
                                    className="w-full h-auto rounded-md mb-1"
                                  />
                                </Link>
                                <Link href={item.href} className="text-sm hover:text-elite-primary transition-colors">
                                  {item.title}
                                </Link>
                              </div>
                            ))}
                          </div>
                        )}
                        {(link.type === "mega-pages" || link.type === "mega-hosting") && (
                          <div className="space-y-2 p-2">
                            {link.submenus?.map((section, secIdx) => (
                              <div key={secIdx}>
                                {section.section && (
                                  <h5 className="font-bold text-sm mb-1 text-elite-secondary">{section.section}</h5>
                                )}
                                <ul className="space-y-1">
                                  {section.items?.map((item, itemIdx) => (
                                    <li key={itemIdx}>
                                      <Link
                                        href={item.href}
                                        className="flex items-center p-2 rounded-md hover:bg-elite-submenu-hover-bg transition-colors"
                                      >
                                        <Image
                                          src={item.icon || "/placeholder.svg"}
                                          alt="icon"
                                          width={20}
                                          height={20}
                                          className="w-5 h-5 mr-2"
                                        />
                                        <div>
                                          <p className="font-medium text-sm text-elite-secondary">{item.title}</p>
                                          <span className="text-xs text-elite-info-text">{item.description}</span>
                                        </div>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                        {link.type === "dropdown" && (
                          <ul className="space-y-1 p-2">
                            {link.submenus?.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2 text-elite-secondary hover:bg-elite-submenu-hover-bg transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="mt-6 flex flex-col space-y-3">
                  <Link
                    href="https://hostie-whmcs.themewant.com/?systpl=elitehost"
                    target="_blank"
                    className="bg-elite-primary hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center font-medium transition-colors"
                  >
                    Client Area
                  </Link>
                  <div className="flex items-center justify-center space-x-2 text-elite-secondary">
                    <span>Currency:</span>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button
                          variant="ghost"
                          className="flex items-center text-elite-secondary hover:text-elite-primary"
                        >
                          <span>USD</span>
                          <ChevronDown className="w-3 h-3 ml-1" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-32 shadow-sm-custom">
                        <DropdownMenuItem className="text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg">
                          Euro
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg">
                          Real
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-elite-secondary text-sm hover:bg-elite-submenu-hover-bg">
                          Ruble
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Adjust threshold as needed
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header
      className={cn(
        "w-full transition-all duration-300 ease-in-out",
        isSticky && "fixed top-0 left-0 right-0 z-[99] bg-white shadow-sm-custom",
      )}
    >
      {!isSticky && <HeaderTop />}
      <HeaderMain isSticky={isSticky} />
    </header>
  )
}