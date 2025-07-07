"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { HardDriveIcon, CpuIcon, GlobeIcon, ShieldIcon, ServerIcon, CloudIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Plan = {
  id: string
  name: string
  tagline: string
  monthlyPrice: number
  yearlyPrice: number
  features: { icon: React.ElementType; text: string }[]
}

type Addon = {
  id: string
  name: string
  description: string
  price: number
  icon: React.ElementType
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Perfect for personal websites & small projects.",
    monthlyPrice: 14.99,
    yearlyPrice: 149.99, // ~17% discount
    features: [
      { icon: HardDriveIcon, text: "50 GB SSD Storage" },
      { icon: CpuIcon, text: "2 vCPU Cores" },
      { icon: GlobeIcon, text: "1 Website" },
      { icon: ServerIcon, text: "Basic Support" },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Scale your business with powerful resources.",
    monthlyPrice: 39.99,
    yearlyPrice: 399.99, // ~17% discount
    features: [
      { icon: HardDriveIcon, text: "200 GB NVMe SSD" },
      { icon: CpuIcon, text: "8 vCPU Cores" },
      { icon: GlobeIcon, text: "Unlimited Websites" },
      { icon: ServerIcon, text: "Priority Support" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Dedicated power for mission-critical applications.",
    monthlyPrice: 99.99,
    yearlyPrice: 999.99, // ~17% discount
    features: [
      { icon: HardDriveIcon, text: "1 TB NVMe SSD" },
      { icon: CpuIcon, text: "16 vCPU Cores" },
      { icon: GlobeIcon, text: "Unlimited Websites" },
      { icon: ServerIcon, text: "Dedicated Account Manager" },
    ],
  },
]

const addons: Addon[] = [
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

export default function ProductDetailV3Page() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("growth")
  const [isYearlyBilling, setIsYearlyBilling] = useState<boolean>(false)
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set())

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

  const handleAddonToggle = (addonId: string, checked: boolean) => {
    setSelectedAddons((prev) => {
      const newSet = new Set(prev)
      if (checked) {
        newSet.add(addonId)
      } else {
        newSet.delete(addonId)
      }
      return newSet
    })
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFF5EF] text-[#001233]">Loading plans...</div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FFF5EF] text-[#4C5671]">
      {/* Hero Section */}
      <div className="bg-[#001233] text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side: Text content */}
          <div>
            <h1 className="text-5xl font-extrabold mb-4">Find Your Perfect Hosting Solution</h1>
            <p className="text-xl max-w-xl">
              Choose from our flexible plans and powerful add-ons to build and scale your online presence with
              confidence.
            </p>
          </div>
          {/* Right side: Image placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-sm h-64 bg-[#FD5D07]/20 rounded-lg flex items-center justify-center text-gray-400 text-lg">
              {/* Placeholder for your image */}
              Image Placeholder
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Billing Cycle Toggle */}
        <div className="flex justify-center items-center space-x-4 mb-12 bg-[#FFF8F4] p-4 rounded-lg shadow-sm">
          <Label htmlFor="billing-toggle" className="text-[#001233] text-xl font-semibold">
            Monthly Billing
          </Label>
          <Switch
            id="billing-toggle"
            checked={isYearlyBilling}
            onCheckedChange={setIsYearlyBilling}
            className="data-[state=checked]:bg-[#FD5D07] data-[state=unchecked]:bg-[#4C5671] scale-125"
          />
          <Label htmlFor="billing-toggle" className="text-[#001233] text-xl font-semibold">
            Yearly Billing (Save up to 17%)
          </Label>
        </div>

        {/* Plan Selection Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "bg-white rounded-xl shadow-lg p-8 flex flex-col border-4 transition-all duration-300 cursor-pointer",
                selectedPlanId === plan.id
                  ? "border-[#FD5D07] ring-4 ring-[#FD5D07]/30"
                  : "border-transparent hover:border-[#FD5D07]/20 hover:shadow-xl",
              )}
              onClick={() => setSelectedPlanId(plan.id)}
            >
              <h2 className="text-4xl font-bold text-[#001233] mb-2">{plan.name}</h2>
              <p className="text-[#4C5671] text-lg mb-6">{plan.tagline}</p>
              <div className="text-6xl font-extrabold text-[#FD5D07] mb-6">
                ${isYearlyBilling ? plan.yearlyPrice.toFixed(2) : plan.monthlyPrice.toFixed(2)}
                <span className="text-xl font-medium text-[#4C5671]">/{isYearlyBilling ? "yr" : "mo"}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((feature, index) => {
                  const Icon = feature.icon
                  return (
                    <li key={index} className="flex items-center gap-3 text-[#4C5671] text-lg">
                      <Icon className="h-6 w-6 text-[#FD5D07]" />
                      <span>{feature.text}</span>
                    </li>
                  )
                })}
              </ul>
              <Button
                className={cn(
                  "w-full font-bold py-4 rounded-lg text-xl transition-colors",
                  selectedPlanId === plan.id
                    ? "bg-[#FD5D07] hover:bg-[#E04A00] text-white"
                    : "bg-[#001233] hover:bg-[#001233]/90 text-white",
                )}
              >
                {selectedPlanId === plan.id ? "Current Plan" : "Select This Plan"}
              </Button>
            </div>
          ))}
        </div>

        {/* Add-ons Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-[#001233] mb-8 text-center">Boost Your Hosting with Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon) => {
              const Icon = addon.icon
              return (
                <div
                  key={addon.id}
                  className={cn(
                    "flex flex-col items-center text-center p-6 rounded-lg border-2 transition-all duration-300",
                    selectedAddons.has(addon.id)
                      ? "border-[#FD5D07] bg-[#FFF8F4]"
                      : "border-gray-200 hover:border-[#FD5D07]/20 hover:bg-gray-50",
                  )}
                >
                  <Icon className="h-12 w-12 text-[#FD5D07] mb-4" />
                  <h3 className="text-xl font-semibold text-[#001233] mb-2">{addon.name}</h3>
                  <p className="text-[#4C5671] text-sm flex-1 mb-4">{addon.description}</p>
                  <span className="text-2xl font-bold text-[#FD5D07] mb-4">${addon.price.toFixed(2)}/mo</span>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={addon.id}
                      checked={selectedAddons.has(addon.id)}
                      onCheckedChange={(checked) => handleAddonToggle(addon.id, !!checked)}
                      className="border-[#FD5D07] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-white h-5 w-5"
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
        <div className="bg-[#001233] text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-3xl font-bold mb-2">Your Total Investment:</h3>
            <p className="text-lg text-gray-300">
              <span className="font-semibold">{selectedPlan.name}</span> Plan ({isYearlyBilling ? "Yearly" : "Monthly"})
              {selectedAddons.size > 0 && (
                <>
                  {" "}
                  + Add-ons:{" "}
                  {Array.from(selectedAddons)
                    .map((id) => addons.find((a) => a.id === id)?.name)
                    .join(", ")}
                </>
              )}
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <span className="text-5xl font-extrabold text-[#FD5D07] mb-4">
              ${finalTotalPrice.toFixed(2)}
              <span className="text-2xl font-medium text-white">/{isYearlyBilling ? "yr" : "mo"}</span>
            </span>
            <Button className="bg-[#FD5D07] hover:bg-[#E04A00] text-white font-bold py-4 px-10 rounded-lg text-xl">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
