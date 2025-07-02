"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox" // Import Checkbox
import { CheckCircle2, CreditCard, DollarSign, Truck, Tag, MapPin, Plus, User } from "lucide-react"

// Dummy data for selected plan and addons (from original hosting checkout)
const basePlanPrice = 29.99 // Example base price for the plan
const yearlyDiscountPercentage = 0.2 // 20% discount for yearly billing

const dummySelectedPlan = {
  name: "Pro Hosting Plan",
  price: basePlanPrice,
  billingDuration: "monthly", // This would come from the previous page's state
  yearlyDiscountPercentage: yearlyDiscountPercentage,
}

const dummySelectedAddons = [
  {
    id: "ssl",
    name: "Premium SSL Certificate",
    price: 5.0,
  },
  {
    id: "backups",
    name: "Daily Automated Backups",
    price: 7.5,
  },
  {
    id: "ddos",
    name: "Advanced DDoS Protection",
    description: "Protect your server from malicious attacks.",
    price: 12.0,
  },
]

const dummySavedAddresses = [
  {
    id: "home",
    name: "My Home Address",
    addressLine1: "123 Hosting Lane",
    addressLine2: "Apt 101",
    city: "Cloudville",
    state: "TX",
    zip: "75001",
  },
  {
    id: "office",
    name: "Office Location",
    addressLine1: "456 Server Blvd",
    addressLine2: "Suite 200",
    city: "Datacenter City",
    state: "CA",
    zip: "90210",
  },
  {
    id: "billing",
    name: "Billing Department",
    addressLine1: "789 Network Way",
    city: "Tech Town",
    state: "NY",
    zip: "10001",
  },
]

const shippingMethods = [
  { id: "standard", name: "Standard Delivery", price: 0.0, description: "3-5 business days for hardware setup" },
  { id: "express", name: "Expedited Setup", price: 15.0, description: "1-2 business days for hardware setup" },
]

export default function CheckoutPage() {
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(dummySavedAddresses[0]?.id || null)
  const [paymentMethod, setPaymentMethod] = useState("stripe")
  const [selectedShippingMethodId, setSelectedShippingMethodId] = useState(shippingMethods[0].id)
  const [couponCode, setCouponCode] = useState("")
  const [discountAmount, setDiscountAmount] = useState(0) // Dummy discount
  const [isBillingSameAsDelivery, setIsBillingSameAsDelivery] = useState(true) // New state for billing address checkbox

  // State for new delivery address form (if "Add New Address" is selected)
  const [newDeliveryFirstName, setNewDeliveryFirstName] = useState("")
  const [newDeliveryLastName, setNewDeliveryLastName] = useState("")
  const [newDeliveryEmail, setNewDeliveryEmail] = useState("")
  const [newDeliveryPhone, setNewDeliveryPhone] = useState("")
  const [newDeliveryAddressLine1, setNewDeliveryAddressLine1] = useState("")
  const [newDeliveryAddressLine2, setNewDeliveryAddressLine2] = useState("")
  const [newDeliveryCity, setNewDeliveryCity] = useState("")
  const [newDeliveryState, setNewDeliveryState] = useState("")
  const [newDeliveryZip, setNewDeliveryZip] = useState("")

  // State for separate billing address form (if isBillingSameAsDelivery is false)
  const [billingFirstName, setBillingFirstName] = useState("")
  const [billingLastName, setBillingLastName] = useState("")
  const [billingEmail, setBillingEmail] = useState("")
  const [billingPhone, setBillingPhone] = useState("")
  const [billingAddressLine1, setBillingAddressLine1] = useState("")
  const [billingAddressLine2, setBillingAddressLine2] = useState("")
  const [billingCity, setBillingCity] = useState("")
  const [billingState, setBillingState] = useState("")
  const [billingZip, setBillingZip] = useState("")

  const [newState, setNewState] = useState("") // Declare the missing variable

  const basePlanAdjustedPrice = useMemo(() => {
    let price = dummySelectedPlan.price
    if (dummySelectedPlan.billingDuration === "yearly") {
      price = price * (1 - dummySelectedPlan.yearlyDiscountPercentage)
    }
    return price
  }, [])

  const addonsTotalPrice = useMemo(() => {
    return dummySelectedAddons.reduce((sum, addon) => sum + addon.price, 0)
  }, [])

  const currentShippingCost = useMemo(() => {
    const method = shippingMethods.find((s) => s.id === selectedShippingMethodId)
    return method ? method.price : 0
  }, [selectedShippingMethodId])

  const subtotal = basePlanAdjustedPrice + addonsTotalPrice + currentShippingCost
  const taxRate = 0.18 // Example 18% GST/Tax
  const taxAmount = (subtotal - discountAmount) * taxRate
  const totalDue = subtotal - discountAmount + taxAmount

  const handleApplyCoupon = () => {
    // Dummy coupon logic
    if (couponCode === "SAVE10") {
      setDiscountAmount(10.0)
    } else if (couponCode === "FREESETUP") {
      setDiscountAmount(currentShippingCost) // Example: free shipping
    } else {
      setDiscountAmount(0)
      alert("Invalid coupon code!")
    }
  }

  return (
<div className="p-10">
    
      <div className="w-full  bg-[#fff] rounded-xl  flex-col lg:flex-row justify-around flex ">
        {/* Left Column: Scrollable Content (with page scroll) */}
        <div className="lg:w-3/5 p-6 md:p-10 ">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#001233] text-center mb-10 lg:hidden">
            Complete Your Order
          </h1>

          <div className="space-y-8">
            {/* Delivery Address */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#001233] flex items-center gap-2 mb-4">
                <MapPin className="w-6 h-6 text-[#FD5D07]" />
                Delivery Address
              </h2>
              <p className="text-[#4C5671] mb-6">Select a saved address or add new details for delivery.</p>
              <RadioGroup
                value={selectedAddressId || ""}
                onValueChange={setSelectedAddressId}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {dummySavedAddresses.map((addr) => (
                  <Label
                    key={addr.id}
                    htmlFor={addr.id}
                    className={`flex flex-col items-start rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 
                      ${
                        selectedAddressId === addr.id
                          ? "border-[#FD5D07] bg-[#FD5D07]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <RadioGroupItem id={addr.id} value={addr.id} className="sr-only" />
                    <span className="font-semibold text-[#001233]">{addr.name}</span>
                    <p className="text-sm text-[#4C5671]">
                      {addr.addressLine1}
                      {addr.addressLine2 && `, ${addr.addressLine2}`}
                    </p>
                    <p className="text-sm text-[#4C5671]">
                      {addr.city}, {addr.state} {addr.zip}
                    </p>
                  </Label>
                ))}
                <Label
                  htmlFor="new-delivery-address"
                  className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 cursor-pointer transition-all duration-200 
                    ${
                      selectedAddressId === "new-delivery-address"
                        ? "border-[#FD5D07] bg-[#FD5D07]/5"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                >
                  <RadioGroupItem id="new-delivery-address" value="new-delivery-address" className="sr-only" />
                  <Plus className="w-6 h-6 text-[#FD5D07] mb-2" />
                  <span className="font-semibold text-[#001233]">Add New Address</span>
                </Label>
              </RadioGroup>

              {selectedAddressId === "new-delivery-address" && (
                <>
                  <Separator className="bg-gray-200" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="new-delivery-firstName py-" className="text-[#4C5671] mb-3">
                        First Name
                      </Label>
                      <Input
                        id="new-delivery-firstName"
                        placeholder="John"
                        value={newDeliveryFirstName}
                        onChange={(e) => setNewDeliveryFirstName(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-delivery-lastName" className="text-[#4C5671] mb-3">
                        Last Name
                      </Label>
                      <Input
                        id="new-delivery-lastName"
                        placeholder="Doe"
                        value={newDeliveryLastName}
                        onChange={(e) => setNewDeliveryLastName(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="new-delivery-email" className="text-[#4C5671] mb-3">
                      Email
                    </Label>
                    <Input
                      id="new-delivery-email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={newDeliveryEmail}
                      onChange={(e) => setNewDeliveryEmail(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-delivery-phone" className="text-[#4C5671] mb-3">
                      Phone Number
                    </Label>
                    <Input
                      id="new-delivery-phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={newDeliveryPhone}
                      onChange={(e) => setNewDeliveryPhone(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-delivery-addressLine1" className="text-[#4C5671] mb-3">
                      Address Line 1
                    </Label>
                    <Input
                      id="new-delivery-addressLine1"
                      placeholder="123 Main St"
                      value={newDeliveryAddressLine1}
                      onChange={(e) => setNewDeliveryAddressLine1(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="new-delivery-addressLine2" className="text-[#4C5671] mb-3">
                      Address Line 2 (Optional)
                    </Label>
                    <Input
                      id="new-delivery-addressLine2"
                      placeholder="Apt, Suite, etc."
                      value={newDeliveryAddressLine2}
                      onChange={(e) => setNewDeliveryAddressLine2(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="new-delivery-city" className="text-[#4C5671] mb-3">
                        City
                      </Label>
                      <Input
                        id="new-delivery-city"
                        placeholder="Anytown"
                        value={newDeliveryCity}
                        onChange={(e) => setNewDeliveryCity(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-delivery-state" className="text-[#4C5671] mb-3">
                        State/Province
                      </Label>
                      <Input
                        id="new-delivery-state"
                        placeholder="CA"
                        value={newDeliveryState}
                        onChange={(e) => setNewDeliveryState(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="new-delivery-zip" className="text-[#4C5671] mb-3">
                        Zip/Postal Code
                      </Label>
                      <Input
                        id="new-delivery-zip"
                        placeholder="90210"
                        value={newDeliveryZip}
                        onChange={(e) => setNewDeliveryZip(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <Separator className="bg-gray-200" />

            {/* Billing Information */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#001233] flex items-center gap-2 mb-4">
                <User className="w-6 h-6 text-[#FD5D07]" />
                Billing Information
              </h2>
              <div className="flex items-center space-x-2 mb-4">
                <Checkbox
                  id="same-as-delivery"
                  checked={isBillingSameAsDelivery}
                  onCheckedChange={(checked) => setIsBillingSameAsDelivery(checked as boolean)}
                  className="border-[#4C5671] data-[state=checked]:bg-[#FD5D07] data-[state=checked]:text-[#fff]"
                />
                <Label htmlFor="same-as-delivery" className="text-[#4C5671] mb-3 cursor-pointer">
                  Billing address same as delivery address
                </Label>
              </div>

              {!isBillingSameAsDelivery && (
                <>
                  <p className="text-[#4C5671]  mb-6">Please provide your separate billing details.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="billing-firstName" className="text-[#4C5671] mb-3">
                        First Name
                      </Label>
                      <Input
                        id="billing-firstName"
                        placeholder="John"
                        value={billingFirstName}
                        onChange={(e) => setBillingFirstName(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billing-lastName" className="text-[#4C5671] mb-3">
                        Last Name
                      </Label>
                      <Input
                        id="billing-lastName"
                        placeholder="Doe"
                        value={billingLastName}
                        onChange={(e) => setBillingLastName(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="billing-email" className="text-[#4C5671] mb-3">
                      Email
                    </Label>
                    <Input
                      id="billing-email"
                      type="email"
                      placeholder="john.doe@example.com"
                      value={billingEmail}
                      onChange={(e) => setBillingEmail(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="billing-phone" className="text-[#4C5671] mb-3">
                      Phone Number
                    </Label>
                    <Input
                      id="billing-phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={billingPhone}
                      onChange={(e) => setBillingPhone(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="billing-addressLine1" className="text-[#4C5671] mb-3">
                      Address Line 1
                    </Label>
                    <Input
                      id="billing-addressLine1"
                      placeholder="123 Main St"
                      value={billingAddressLine1}
                      onChange={(e) => setBillingAddressLine1(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="billing-addressLine2" className="text-[#4C5671] mb-3">
                      Address Line 2 (Optional)
                    </Label>
                    <Input
                      id="billing-addressLine2"
                      placeholder="Apt, Suite, etc."
                      value={billingAddressLine2}
                      onChange={(e) => setBillingAddressLine2(e.target.value)}
                      className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="billing-city" className="text-[#4C5671] mb-3">
                        City
                      </Label>
                      <Input
                        id="billing-city"
                        placeholder="Anytown"
                        value={billingCity}
                        onChange={(e) => setBillingCity(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billing-state" className="text-[#4C5671] mb-3">
                        State/Province
                      </Label>
                      <Input
                        id="billing-state"
                        placeholder="CA"
                        value={billingState}
                        onChange={(e) => setNewState(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billing-zip" className="text-[#4C5671] mb-3">
                        Zip/Postal Code
                      </Label>
                      <Input
                        id="billing-zip"
                        placeholder="90210"
                        value={billingZip}
                        onChange={(e) => setBillingZip(e.target.value)}
                        className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <Separator className="bg-gray-200" />

            {/* Shipping Method */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#001233] flex items-center gap-2 mb-4">
                <Truck className="w-6 h-6 text-[#FD5D07]" />
                Shipping Method
              </h2>
              <p className="text-[#4C5671] mb-6">
                Choose your preferred delivery option for any physical components or setup services.
              </p>
              <RadioGroup
                value={selectedShippingMethodId}
                onValueChange={setSelectedShippingMethodId}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {shippingMethods.map((method) => (
                  <Label
                    key={method.id}
                    htmlFor={method.id}
                    className={`flex flex-col items-start rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 
                      ${
                        selectedShippingMethodId === method.id
                          ? "border-[#FD5D07] bg-[#FD5D07]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                  >
                    <RadioGroupItem id={method.id} value={method.id} className="sr-only" />
                    <span className="text-lg font-medium text-[#001233]">{method.name}</span>
                    <span className="text-sm text-[#4C5671]">
                      {method.price === 0 ? "Free" : `$${method.price.toFixed(2)}`}
                    </span>
                    <span className="text-xs text-[#4C5671]/80">{method.description}</span>
                  </Label>
                ))}
              </RadioGroup>
            </div>

            <Separator className="bg-gray-200" />

           
            {/* Payment Options */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#001233] flex items-center gap-2 mb-4">
                <CreditCard className="w-6 h-6 text-[#FD5D07]" />
                Payment Method
              </h2>
              <p className="text-[#4C5671] mb-6">Select your preferred payment gateway for a secure transaction.</p>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                <Label
                  htmlFor="stripe"
                  className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 
                    ${
                      paymentMethod === "stripe"
                        ? "border-[#FD5D07] bg-[#FD5D07]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <RadioGroupItem id="stripe" value="stripe" className="sr-only" />
                  <img src="/placeholder.svg?height=40&width=80" alt="Stripe" className="mb-2" />
                  <span className="text-lg font-medium text-[#001233]">Stripe</span>
                </Label>
                <Label
                  htmlFor="paypal"
                  className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 
                    ${
                      paymentMethod === "paypal"
                        ? "border-[#FD5D07] bg-[#FD5D07]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <RadioGroupItem id="paypal" value="paypal" className="sr-only" />
                  <img src="/placeholder.svg?height=40&width=80" alt="PayPal" className="mb-2" />
                  <span className="text-lg font-medium text-[#001233]">PayPal</span>
                </Label>
                <Label
                  htmlFor="razorpay"
                  className={`flex flex-col items-center justify-between rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 
                    ${
                      paymentMethod === "razorpay"
                        ? "border-[#FD5D07] bg-[#FD5D07]/5"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                >
                  <RadioGroupItem id="razorpay" value="razorpay" className="sr-only" />
                  <img src="/placeholder.svg?height=40&width=80" alt="Razorpay" className="mb-2" />
                  <span className="text-lg font-medium text-[#001233]">Razorpay</span>
                </Label>
              </RadioGroup>
            </div>
          </div>
        </div>

        {/* Right Column: Static Order Summary */}
        <div className="lg:w-2/5 p-6 md:p-10 bg-[#FFF8F4] flex flex-col justify-between mt-5 lg:sticky lg:top-0 lg:h-screen sticky top-0 max-w-md overflow-auto">
          <h2 className="text-2xl font-bold text-[#001233] flex items-center gap-2">
            <DollarSign className="w-6 h-6 text-[#FD5D07]" />
            Order Summary
          </h2>
           {/* Discount Form */}
            <div className="space-y-4 mb-2">
              <p className="text-[#4C5671] mb-6">Have a coupon code? Enter it here to get a discount on your order.</p>
              <div className="flex items-end gap-2">
                <div className="flex-grow">
                  <Label htmlFor="coupon" className="text-[#4C5671] text-md  mb-2">
                    Coupon Code
                  </Label>
                  <Input
                    id="coupon"
                    placeholder="Enter coupon code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="border-gray-300 focus:border-[#FD5D07] focus:ring-[#FD5D07]/20 text-[#001233]"
                  />
                </div>
                <Button onClick={handleApplyCoupon} className="bg-[#FF7E2E] hover:bg-[#FD5D07] text-[#fff] px-6 py-2">
                  Apply
                </Button>
              </div>
              {discountAmount > 0 && (
                <p className="text-sm text-[#FD5D07] font-semibold mt-2">
                  Discount applied: -${discountAmount.toFixed(2)}
                </p>
              )}
            </div>

          

          <div className="space-y-4">
            {/* Selected Plan */}
            <div className="flex justify-between items-center text-lg">
              <span className="text-[#4C5671]">
                {dummySelectedPlan.name} ({dummySelectedPlan.billingDuration})
              </span>
              <span className="font-medium text-[#001233]">${basePlanAdjustedPrice.toFixed(2)}</span>
            </div>
            {/* Addons */}
            {dummySelectedAddons.length > 0 && (
              <>
                <Separator className="bg-gray-200" />
                <div className="space-y-2">
                  <p className="text-[#4C5671] text-lg">Add-ons:</p>
                  {dummySelectedAddons.map((addon) => (
                    <div key={addon.id} className="flex justify-between items-center text-base">
                      <span className="text-[#4C5671] ml-2 flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-[#FD5D07]" />
                        {addon.name}
                      </span>
                      <span className="font-medium text-[#001233]">+${addon.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </>
            )}
            {/* Shipping Cost */}
            <div className="flex justify-between items-center text-lg">
              <span className="text-[#4C5671]">
                Shipping ({shippingMethods.find((s) => s.id === selectedShippingMethodId)?.name})
              </span>
              <span className="font-medium text-[#001233]">
                {currentShippingCost === 0 ? "Free" : `$${currentShippingCost.toFixed(2)}`}
              </span>
            </div>
            <Separator className="bg-gray-200" />
            {/* Subtotal */}
            <div className="flex justify-between items-center text-lg">
              <span className="text-[#4C5671]">Subtotal</span>
              <span className="font-medium text-[#001233]">${subtotal.toFixed(2)}</span>
            </div>
            {/* Discount (now only displays if applied) */}
            {discountAmount > 0 && (
              <div className="flex justify-between items-center text-lg text-[#FD5D07] font-semibold">
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            {/* Tax */}
            <div className="flex justify-between items-center text-lg">
              <span className="text-[#4C5671]">GST/Tax ({(taxRate * 100).toFixed(0)}%)</span>
              <span className="font-medium text-[#001233]">${taxAmount.toFixed(2)}</span>
            </div>
            <Separator className="bg-gray-200" />
            {/* Total */}
            <div className="flex justify-between items-center text-2xl font-bold text-[#001233]">
              <span>Total Due</span>
              <span>${totalDue.toFixed(2)}</span>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-[#FD5D07] hover:bg-[#FF7E2E] text-[#fff] text-xl py-4 rounded-lg shadow-lg transition-colors duration-200 mt-6"
          >
            Place Order
          </Button>
        </div>
      </div>
</div>

  )
}
