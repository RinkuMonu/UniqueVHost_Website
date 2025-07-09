"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { HardDriveIcon, CpuIcon, GlobeIcon, ShieldIcon, ServerIcon, CloudIcon, StarIcon, ChevronRightIcon, ChevronLeftIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { useEffect } from "react"
import axios from "axios"
import Link from "next/link"

type Plan = {
  id: string
  name: string
  tagline: string
  monthlyPrice: number
  yearlyPrice: number
  features: { icon: React.ElementType; text: string }[]
  popular?: boolean
}

type Addon = {
  id: string
  name: string
  description: string
  price: number
  icon: React.ElementType
}

type Testimonial = {
  id: string
  name: string
  role: string
  content: string
  rating: number
  avatar: string
}



const staticAddons: Addon[] = [
  {
    id: "ssl",
    name: "SSL Certificate",
    description: "Secure your website with HTTPS encryption.",
    price: 5.0,
    icon: ShieldIcon,
  },
  {
    id: "backups",
    name: "Daily Backups",
    description: "Automated daily backups for data recovery.",
    price: 10.0,
    icon: CloudIcon,
  },
  {
    id: "dedicatedIp",
    name: "Dedicated IP",
    description: "A unique IP address for enhanced SEO and security.",
    price: 15.0,
    icon: GlobeIcon,
  },
  {
    id: "monitoring",
    name: "Advanced Monitoring",
    description: "24/7 proactive server health monitoring.",
    price: 20.0,
    icon: ServerIcon,
  },
]

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Founder, Bloom & Grow",
    content: "Switching to this hosting service was the best decision for our e-commerce site. The performance improvement was noticeable immediately, and their support team is fantastic.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CTO, TechStart Inc.",
    content: "The enterprise plan with add-ons gives us everything we need to run our SaaS platform reliably. Uptime has been 99.99% since we migrated.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: "3",
    name: "Emma Rodriguez",
    role: "Blogger, TravelWithEmma",
    content: "As a blogger, I need my site to be fast and always available. The starter plan is perfect for my needs and the price is very reasonable.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: "4",
    name: "David Wilson",
    role: "Freelance Developer",
    content: "I host all my clients' sites here. The flexibility to choose add-ons per project makes it cost-effective while still providing premium features.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
]


const API_BASE_URL = "http://localhost:5000/api"

async function fetchPlans() {
  const response = await axios.get(`${API_BASE_URL}/plans`)
  return response.data
}

async function fetchAddons() {
  const response = await axios.get(`${API_BASE_URL}/plans?is_active=true`) // adjust if your backend has a separate endpoint for addons
  return response.data
}


export default function ProductDetailV3Page() {
  const [plans, setPlans] = useState<Plan[]>([])
  const [addons, setAddons] = useState<Addon[]>([])
  const [loading, setLoading] = useState(true)

  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth")
  const [isYearlyBilling, setIsYearlyBilling] = useState<boolean>(false)
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const planResponse = await axios.get(`${API_BASE_URL}/plans`)
        const addonResponse = await axios.get(`${API_BASE_URL}/addons?is_active=true`)
        setPlans(planResponse.data)
        setAddons(addonResponse.data)
      } catch (error) {
        console.error("Error fetching plans or addons:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth")
  const [isYearlyBilling, setIsYearlyBilling] = useState<boolean>(false)
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0)

  const selectedPlan = useMemo(() => plans.find((p) => p.id === selectedPlanId), [selectedPlanId])

  const currentBasePrice = useMemo(() => {
    if (!selectedPlan) return 0
    return isYearlyBilling ? selectedPlan.yearlyPrice : selectedPlan.monthlyPrice
  }, [selectedPlan, isYearlyBilling])

  const currentAddonsTotal = useMemo(() => {
    let total = 0
    selectedAddons.forEach((addonId) => {
      const addon = addons.find((a) => a.id === addonId)
      if (addon) {
        total += addon.price
      }
    })
    return total
  }, [selectedAddons])

  const finalTotalPrice = useMemo(() => currentBasePrice + currentAddonsTotal, [currentBasePrice, currentAddonsTotal])

  const handleAddonToggle = async (addonId: string, checked: boolean) => {
    setSelectedAddons((prev) => {
      const newSet = new Set(prev)
      if (checked) {
        newSet.add(addonId)
      } else {
        newSet.delete(addonId)
      }
      return newSet
    })

    // 🔁 Send addon to backend
    const selectedAddon = addons.find((a) => a.id === addonId)
    const orderId = "6863d176f728489787687184" // TODO: Replace with real order ID

    if (checked && selectedAddon && orderId) {
      try {
        await axios.post(`${API_BASE_URL}/addons/add`, {
          order_id: orderId,
          name: selectedAddon.name,
          price: selectedAddon.price,
          quantity: 1
        }, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // or use a proper auth context
          }
        })

        console.log("Addon added successfully")
      } catch (error) {
        console.error("Error adding addon:", error)
      }
    }
  }

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF5EF] to-[#FFE8D9] text-[#001233]">Loading plans...</div>
    )
  }

  return (

    <div className="min-h-screen bg-gradient-to-br  text-[#4C5671]">
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Product Details
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Experience unparalleled speed and reliability with our dedicated servers,
              designed for demanding workloads and global reach. Deploy in minutes with
              full root access.
            </p>
            <div className="inline-block relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FD5D07] to-[#FFB703] blur-xl opacity-60 transition-opacity group-hover:opacity-80 animate-pulse"></div>
              <Button
                size="lg"
                className="relative bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            <img
              src="/images/banner/banner-hero-03.webp"
              alt="Dedicated Server Illustration"
              className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Uptime Stat */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">99.9%</div>
              <p className="text-[#4C5671] font-medium text-lg">Uptime</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>

          {/* Support Stat */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">24/7</div>
              <p className="text-[#4C5671] font-medium text-lg">Support</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>

          {/* Customers Stat */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">10K+</div>
              <p className="text-[#4C5671] font-medium text-lg">Customers</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>

          {/* Response Time Stat */}
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">45s</div>
              <p className="text-[#4C5671] font-medium text-lg">Avg. Response</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className=" mx-auto py-12 ">


        {/* Plan Selection Grid */}
        <div className="mx-auto  px-4 py-12 bg-[#FFF8F4]">
          <div className="max-w-5xl mx-auto ">
            {/* Header */}
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-2">Simple, Transparent Pricing</h2>
              <p className="text-lg text-gray-600">Choose the perfect plan for your needs</p>
            </div>

            {/* Billing toggle */}
            <div className="flex justify-center mb-12 ">
              <div className="flex items-center bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setIsYearlyBilling(false)}
                  className={`px-6 py-2 rounded-full ${!isYearlyBilling ? 'bg-white shadow' : ''}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearlyBilling(true)}
                  className={`px-6 py-2 rounded-full ${isYearlyBilling ? 'bg-white shadow' : ''}`}
                >
                  Yearly <span className="text-orange-500 ml-1">(Save 17%)</span>
                </button>
              </div>
            </div>

            {/* Pricing cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={cn(
                    "border rounded-xl p-6 transition-all",
                    selectedPlanId === plan.id ? "border-orange-500 ring-2 ring-orange-500/20" : "border-gray-200",
                    plan.popular ? "relative" : ""
                  )}
                  onClick={() => setSelectedPlanId(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      POPULAR
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    <p className="text-gray-500">{plan.tagline}</p>
                  </div>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-orange-500">
                      ${isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500">/{isYearlyBilling ? "yr" : "mo"}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <Icon className="h-5 w-5 text-orange-500 mt-0.5" />
                          <span className="text-gray-700">{feature.text}</span>
                        </li>
                      )
                    })}
                  </ul>

                  <button
                    className={cn(
                      "w-full py-3 rounded-lg font-medium transition-colors",
                      selectedPlanId === plan.id
                        ? "bg-orange-500 text-white hover:bg-orange-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    )}
                  >
                    {selectedPlanId === plan.id ? "Current Plan" : "Select Plan"}
                  </button>
                </div>
              ))}
            </div>

            {/* Included features */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-4">
                <ShieldIcon className="h-5 w-5 mr-2" />
                <span>All plans include</span>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Free SSL</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add-ons Section */}
        <div className="bg-white/80 backdrop-blur-sm rounded-xl  p-8 mb-12 border border-white">
          <h2 className="text-5xl font-bold text-[#001233] mb-2 text-center">Boost Your Hosting with Add-ons</h2>
          <p className="text-[#4C5671] text-center mb-8 max-w-2xl mx-auto">Customize your hosting package with these powerful add-ons to get exactly what you need.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(addons.length > 0 ? addons : staticAddons).map((addon) => {
              const Icon = addon.icon
              return (
                <div
                  key={addon.id}
                  className={cn(
                    "flex flex-col items-center text-center p-6 rounded-lg border-2 transition-all duration-300 bg-white hover:shadow-lg",
                    selectedAddons.has(addon.id)
                      ? "border-[#FD5D07] bg-gradient-to-b from-[#FFF8F4] to-white"
                      : "border-gray-200 hover:border-[#FD5D07]/20",
                  )}
                >
                  <div className="w-20 h-20 bg-[#FD5D07]/10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-10 w-10 text-[#FD5D07]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#001233] mb-2">{addon.name}</h3>
                  <p className="text-[#4C5671] text-sm flex-1 mb-4">{addon.description}</p>
                  <span className="text-2xl font-bold text-[#FD5D07] mb-4">${addon.price.toFixed(2)}/mo</span>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={addon.id}
                      checked={selectedAddons.has(addon.id)}
                      onCheckedChange={(checked) => handleAddonToggle(addon.id, !!checked)}
                      className="border-[#FD5D07] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-white h-5 w-5 mr-3"
                    />
                    <Label htmlFor={addon.id} className="text-[#001233] text-base cursor-pointer">
                      Add to Plan
                    </Label>
                  </div>
                </div>
              )
            })}
          </div>
        </div>



        {/* Final Summary and Checkout */}
        <div className="bg-gradient-to-r from-[#FD5D07] to-[#FF7B3A] text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-2">Ready to Get Started?</h3>
            <p className="text-lg text-white/90">
              <span className="font-semibold">{selectedPlan.name}</span> Plan ({isYearlyBilling ? "Yearly" : "Monthly"})
              {selectedAddons.size > 0 && (
                <>
                  {" "}
                  + {selectedAddons.size} Add-ons
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-5xl font-extrabold text-white mb-4">
              ${finalTotalPrice.toFixed(2)}
              <span className="text-2xl font-medium text-white/90">/{isYearlyBilling ? "yr" : "mo"}</span>
            </span>
            <Link href="/checkout" className="bg-white text-[#FD5D07] hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-xl transition-all transform hover:scale-105">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}