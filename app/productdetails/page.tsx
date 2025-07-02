"use client"

import { useState, useMemo } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, Rocket, ShieldCheck, Headset } from "lucide-react" // Added more icons
import Image from "next/image"

interface Addon {
  id: string
  name: string
  description: string
  price: number
}

const basePlanPrice = 29.99 // Example base price for the plan
const yearlyDiscountPercentage = 0.2 // 20% discount for yearly billing

const addons: Addon[] = [
  {
    id: "ssl",
    name: "Premium SSL Certificate",
    description: "Secure your website with advanced encryption.",
    price: 5.0,
  },
  {
    id: "backups",
    name: "Daily Automated Backups",
    description: "Never lose data with automatic daily backups.",
    price: 7.5,
  },
  {
    id: "support",
    name: "24/7 Priority Support",
    description: "Get immediate assistance from our expert team.",
    price: 10.0,
  },
  {
    id: "cdn",
    name: "Global CDN",
    description: "Speed up your website delivery worldwide.",
    price: 8.0,
  },
]

const planSpecs = [
  "Unlimited Bandwidth",
  "100 GB SSD Storage",
  "Free Domain for 1 Year",
  "50 Email Accounts",
  "24/7 Customer Support",
  "One-Click Installer",
  "Advanced Security Features",
  "Daily Backups (optional add-on)",
]

export default function Component() {
  const [billingDuration, setBillingDuration] = useState<"monthly" | "yearly">("monthly")
  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const totalPrice = useMemo(() => {
    let currentPrice = basePlanPrice

    if (billingDuration === "yearly") {
      currentPrice = currentPrice * (1 - yearlyDiscountPercentage)
    }

    const addonsPrice = selectedAddons.reduce((sum, addonId) => {
      const addon = addons.find((a) => a.id === addonId)
      return sum + (addon ? addon.price : 0)
    }, 0)

    return currentPrice + addonsPrice
  }, [billingDuration, selectedAddons])

  const handleAddonChange = (addonId: string, checked: boolean) => {
    setSelectedAddons((prev) => (checked ? [...prev, addonId] : prev.filter((id) => id !== addonId)))
  }

  return (
    <div className="min-h-screen bg-[#FFF5EF] text-[#4C5671] flex flex-col items-center p-4 md:p-6">
      {/* Hero Section */}
      <section className="w-full max-w-6xl bg-[#FFF8F4] rounded-xl shadow-xl overflow-hidden mb-12 p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-10 relative">
        {/* Background gradient overlay for visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F4] via-[#FFF5EF] to-[#FFF8F4] opacity-70 rounded-xl -z-10" />

        <div className="lg:w-1/2 text-center lg:text-left space-y-6 z-10">
          <p className="text-lg font-semibold text-[#FD5D07] uppercase tracking-wide">Elevate Your Online Presence</p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#001233] leading-tight">
            Powerful Hosting Solutions for Every Vision
          </h1>
          <p className="text-xl md:text-2xl text-[#4C5671] max-w-lg mx-auto lg:mx-0">
            From personal blogs to e-commerce giants, our hosting plans provide the speed, security, and support you
            need to thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button
              size="lg"
              className="bg-[#FD5D07] hover:bg-[#FF7E2E] text-[#fff] text-lg py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Explore Plans
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#FD5D07] text-[#FD5D07] bg-transparent hover:bg-[#FD5D07]/10 text-lg py-3 px-8 rounded-full transition-colors duration-300"
            >
              Contact Sales
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Rocket className="w-8 h-8 text-[#FD5D07] mb-2" />
              <span className="font-semibold text-[#001233]">Blazing Fast</span>
              <span className="text-sm text-[#4C5671]">SSD NVMe Drives</span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <ShieldCheck className="w-8 h-8 text-[#FD5D07] mb-2" />
              <span className="font-semibold text-[#001233]">Ironclad Security</span>
              <span className="text-sm text-[#4C5671]">DDoS Protection</span>
            </div>
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Headset className="w-8 h-8 text-[#FD5D07] mb-2" />
              <span className="font-semibold text-[#001233]">24/7 Support</span>
              <span className="text-sm text-[#4C5671]">Expert Assistance</span>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
          <Image
            src="/placeholder.svg?height=500&width=700"
            width={700}
            height={500}
            alt="Abstract server racks or cloud computing illustration"
            className="rounded-xl object-cover w-full max-w-lg lg:max-w-full shadow-2xl"
          />
        </div>
      </section>

      {/* Product Detail Content */}
      <div className="w-full max-w-6xl bg-[#fff] rounded-lg shadow-lg overflow-hidden grid grid-cols-1 lg:grid-cols-3">
        {/* Left Column: Plan Specs & Addons */}
        <div className="lg:col-span-2 p-6 md:p-8 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#001233]">Pro Hosting Plan</h1>

          {/* Plan Specifications */}
          <section aria-labelledby="plan-specs-heading">
            <h2 id="plan-specs-heading" className="text-2xl font-semibold text-[#001233] mb-4">
              Plan Specifications
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-lg">
              {planSpecs.map((spec, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#FD5D07]" />
                  {spec}
                </li>
              ))}
            </ul>
          </section>

          <Separator className="bg-gray-200" />

          {/* Billing Duration */}
          <section aria-labelledby="billing-duration-heading">
            <h2 id="billing-duration-heading" className="text-2xl font-semibold text-[#001233] mb-4">
              Choose Billing Duration
            </h2>
            <RadioGroup
              defaultValue="monthly"
              onValueChange={(value: "monthly" | "yearly") => setBillingDuration(value)}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Label
                htmlFor="monthly"
                className="flex flex-col items-center justify-between rounded-lg border-2 border-[#FF7E2E] p-4 cursor-pointer transition-all duration-200 has-[input:checked]:border-[#FD5D07] has-[input:checked]:bg-[#FD5D07]/5"
              >
                <RadioGroupItem id="monthly" value="monthly" className="sr-only" />
                <span className="text-xl font-medium text-[#001233]">Monthly</span>
                <span className="text-lg text-[#4C5671]">${basePlanPrice.toFixed(2)} / month</span>
              </Label>
              <Label
                htmlFor="yearly"
                className="flex flex-col items-center justify-between rounded-lg border-2 border-[#FF7E2E] p-4 cursor-pointer transition-all duration-200 has-[input:checked]:border-[#FD5D07] has-[input:checked]:bg-[#FD5D07]/5"
              >
                <RadioGroupItem id="yearly" value="yearly" className="sr-only" />
                <span className="text-xl font-medium text-[#001233]">Yearly</span>
                <span className="text-lg text-[#4C5671]">
                  {(basePlanPrice * (1 - yearlyDiscountPercentage)).toFixed(2)} / year
                </span>
                <span className="text-sm text-[#FD5D07] font-semibold mt-1">
                  Save {yearlyDiscountPercentage * 100}%!
                </span>
              </Label>
            </RadioGroup>
          </section>

          <Separator className="bg-gray-200" />

          {/* Add-ons */}
          <section aria-labelledby="addons-heading">
            <h2 id="addons-heading" className="text-2xl font-semibold text-[#001233] mb-4">
              Add-ons
            </h2>
            <div className="grid gap-4">
              {addons.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      id={addon.id}
                      checked={selectedAddons.includes(addon.id)}
                      onCheckedChange={(checked) => handleAddonChange(addon.id, checked as boolean)}
                      className="w-5 h-5 border-[#FD5D07] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                    />
                    <div className="grid gap-1">
                      <Label htmlFor={addon.id} className="text-lg font-medium text-[#001233]">
                        {addon.name}
                      </Label>
                      <p className="text-sm text-[#4C5671]">{addon.description}</p>
                    </div>
                  </div>
                  <span className="text-lg font-semibold text-[#001233]">+${addon.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Price Summary */}
        <div className="lg:col-span-1 bg-[#FFF8F4] p-6 md:p-8 flex flex-col justify-between">
          <Card className="bg-[#fff] shadow-md border-none">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#001233]">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center text-lg">
                <span className="text-[#4C5671]">Base Plan ({billingDuration})</span>
                <span className="font-medium text-[#001233]">
                  $
                  {billingDuration === "monthly"
                    ? basePlanPrice.toFixed(2)
                    : (basePlanPrice * (1 - yearlyDiscountPercentage)).toFixed(2)}
                </span>
              </div>
              {selectedAddons.length > 0 && (
                <>
                  <Separator className="bg-gray-100" />
                  <div className="space-y-2">
                    <p className="text-[#4C5671] text-lg">Add-ons:</p>
                    {selectedAddons.map((addonId) => {
                      const addon = addons.find((a) => a.id === addonId)
                      return (
                        addon && (
                          <div key={addon.id} className="flex justify-between items-center text-base">
                            <span className="text-[#4C5671] ml-2">{addon.name}</span>
                            <span className="font-medium text-[#001233]">+${addon.price.toFixed(2)}</span>
                          </div>
                        )
                      )
                    })}
                  </div>
                </>
              )}
              <Separator className="bg-gray-200" />
              <div className="flex justify-between items-center text-2xl font-bold text-[#001233]">
                <span>Total Due</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
          <Button
            size="lg"
            className="w-full mt-6 bg-[#FD5D07] hover:bg-[#FF7E2E] text-[#fff] text-lg py-3 rounded-lg transition-colors duration-200"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}
