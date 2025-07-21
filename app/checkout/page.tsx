"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CheckCircle2,
  CreditCard,
  DollarSign,
  Truck,
  MapPin,
  Plus,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Example data
const basePlanPrice = 29.99;
const yearlyDiscountPercentage = 0.2;

const dummySelectedPlan = {
  name: "Pro Hosting Plan",
  price: basePlanPrice,
  billingDuration: "monthly",
  yearlyDiscountPercentage,
};

const dummySelectedAddons = [
  { id: "ssl", name: "Premium SSL Certificate", price: 5 },
  { id: "backups", name: "Daily Automated Backups", price: 7.5 },
];

const dummySavedAddresses = [
  {
    id: "home",
    name: "Home",
    addressLine1: "123 Hosting Lane",
    city: "Cloudville",
    state: "TX",
    zip: "75001",
  },
  {
    id: "office",
    name: "Office",
    addressLine1: "456 Server Blvd",
    city: "Datacenter City",
    state: "CA",
    zip: "90210",
  },
];

const shippingMethods = [
  {
    id: "standard",
    name: "Standard Delivery",
    price: 0,
    description: "3-5 business days",
  },
  {
    id: "express",
    name: "Expedited Setup",
    price: 15,
    description: "1-2 business days",
  },
];

export default function CheckoutPage() {
  const [selectedAddressId, setSelectedAddressId] = useState(
    dummySavedAddresses[0]?.id || ""
  );
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [selectedShippingMethodId, setSelectedShippingMethodId] = useState(
    shippingMethods[0].id
  );
  const [couponCode, setCouponCode] = useState("");
  const [discountAmount, setDiscountAmount] = useState(0);

  // States for new address form
  const [newName, setNewName] = useState("");
  const [newLine1, setNewLine1] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newZip, setNewZip] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newConsent, setNewConsent] = useState(false);

  const basePlanAdjustedPrice = useMemo(() => {
    let price = dummySelectedPlan.price;
    if (dummySelectedPlan.billingDuration === "yearly") {
      price = price * (1 - dummySelectedPlan.yearlyDiscountPercentage);
    }
    return price;
  }, []);

  const addonsTotalPrice = useMemo(
    () => dummySelectedAddons.reduce((sum, addon) => sum + addon.price, 0),
    []
  );

  const currentShippingCost = useMemo(
    () =>
      shippingMethods.find((s) => s.id === selectedShippingMethodId)?.price || 0,
    [selectedShippingMethodId]
  );

  const subtotal = basePlanAdjustedPrice + addonsTotalPrice + currentShippingCost;
  const taxRate = 0.18;
  const taxAmount = (subtotal - discountAmount) * taxRate;
  const totalDue = subtotal - discountAmount + taxAmount;

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscountAmount(10);
    } else if (couponCode === "FREESHIP") {
      setDiscountAmount(currentShippingCost);
    } else {
      setDiscountAmount(0);
      alert("Invalid coupon code!");
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#f9fafb] via-[#fefefe] to-[#f9fafb] py-12">
      {/* Steps */}
      <div className="container mx-auto px-4 mb-8 flex justify-center">
        <div className="flex gap-4 items-center text-[#4C5671] font-medium">
          {["Address", "Shipping", "Payment"].map((label, i) => (
            <div className="flex items-center gap-2" key={i}>
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FD5D07] text-white text-sm">
                {i + 1}
              </span>
              {label}
              {i < 2 && <span>→</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 bg-white rounded-xl shadow-xl p-8 space-y-8 relative"
        >
          {/* Checkout Header */}
          <h2 className="text-3xl font-bold text-[#001233]">Checkout</h2>

          {/* Address Selection */}
          <div>
            <h3 className="text-xl font-semibold text-[#001233] flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#FD5D07]" /> Delivery Address
            </h3>
            <RadioGroup
              value={selectedAddressId}
              onValueChange={setSelectedAddressId}
              className="space-y-4"
            >
              {dummySavedAddresses.map((addr) => (
                <Label
                  key={addr.id}
                  htmlFor={addr.id}
                  className={`block border rounded-lg p-4 cursor-pointer transition ${
                    selectedAddressId === addr.id
                      ? "border-[#FD5D07] bg-[#FFF8F4]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem id={addr.id} value={addr.id} className="sr-only" />
                  <div className="font-medium text-[#001233]">{addr.name}</div>
                  <div className="text-sm text-[#4C5671]">
                    {addr.addressLine1}, {addr.city}, {addr.state} {addr.zip}
                  </div>
                </Label>
              ))}

              {/* Add New Address Option */}
              <Label
                htmlFor="new"
                className={`block border rounded-lg p-4 align-baseline text-center cursor-pointer transition ${
                  selectedAddressId === "new"
                    ? "border-[#FD5D07] bg-[#FFF8F4]"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={{ display: "flex" }}
              >
                <RadioGroupItem id="new" value="new" className="sr-only" />
                <Plus className="w-5 h-5 text-[#FD5D07] mb-1" />
                <div className="font-medium text-[#001233]">Add New Address</div>
              </Label>
            </RadioGroup>

            {/* New Address Form */}
            <AnimatePresence>
              {selectedAddressId === "new" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 overflow-hidden space-y-3"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" value={newName} onChange={(e) => setNewName(e.target.value)} />
                    <Input placeholder="Phone Number" value={newPhone} onChange={(e) => setNewPhone(e.target.value)} />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Email Address" value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
                    <select
                      value={newCountry}
                      onChange={(e) => setNewCountry(e.target.value)}
                      className="border border-gray-300 rounded px-3 py-2 w-full focus:border-[#FD5D07]"
                    >
                      <option value="">Select a Country</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">UK</option>
                      <option value="Russia">Russia</option>
                      <option value="France">France</option>
                    </select>
                  </div>

                  <Input placeholder="Address Line 1" value={newLine1} onChange={(e) => setNewLine1(e.target.value)} />

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Input placeholder="City" value={newCity} onChange={(e) => setNewCity(e.target.value)} />
                    <Input placeholder="State/Province" value={newState} onChange={(e) => setNewState(e.target.value)} />
                    <Input placeholder="Zip Code" value={newZip} onChange={(e) => setNewZip(e.target.value)} />
                  </div>

                  <textarea
                    placeholder="A brief description about your consultation"
                    rows={3}
                    value={newDescription}
                    onChange={(e) => setNewDescription(e.target.value)}
                    className="border border-gray-300 rounded px-3 py-2 w-full focus:border-[#FD5D07]"
                  ></textarea>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="consent"
                      checked={newConsent}
                      onCheckedChange={(checked) => setNewConsent(checked === true)}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-sm text-[#4C5671]">
                      By submitting your information you provide written consent to elitehost and its family of brands contacting you.
                    </label>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Shipping */}
          <div>
            <h3 className="text-xl font-semibold text-[#001233] flex items-center gap-2 mb-4">
              <Truck className="w-5 h-5 text-[#FD5D07]" /> Shipping
            </h3>
            <RadioGroup
              value={selectedShippingMethodId}
              onValueChange={setSelectedShippingMethodId}
              className="space-y-4"
            >
              {shippingMethods.map((method) => (
                <Label
                  key={method.id}
                  htmlFor={method.id}
                  className={`block border rounded-lg p-4 cursor-pointer transition ${
                    selectedShippingMethodId === method.id
                      ? "border-[#FD5D07] bg-[#FFF8F4]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem id={method.id} value={method.id} className="sr-only" />
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-medium text-[#001233]">{method.name}</div>
                      <div className="text-xs text-[#4C5671]">{method.description}</div>
                    </div>
                    <div className="font-medium text-[#001233]">
                      {method.price === 0 ? "Free" : `$${method.price.toFixed(2)}`}
                    </div>
                  </div>
                </Label>
              ))}
            </RadioGroup>
          </div>

          {/* Payment */}
          <div>
            <h3 className="text-xl font-semibold text-[#001233] flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-[#FD5D07]" /> Payment
            </h3>
            <RadioGroup
              value={paymentMethod}
              onValueChange={setPaymentMethod}
              className="space-y-4"
            >
              {["stripe", "paypal", "razorpay"].map((method) => (
                <Label
                  key={method}
                  htmlFor={method}
                  className={`block border rounded-lg p-4 text-center cursor-pointer transition ${
                    paymentMethod === method
                      ? "border-[#FD5D07] bg-[#FFF8F4]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem id={method} value={method} className="sr-only" />
                  <div className="font-medium text-[#001233] capitalize">{method}</div>
                </Label>
              ))}
            </RadioGroup>
          </div>
        </motion.div>

        {/* Right Column: Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full lg:w-1/3 bg-[#FFF8F4] rounded-xl shadow-xl p-8 sticky top-8 h-fit"
        >
          <h3 className="text-2xl font-bold text-[#001233] flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-[#FD5D07]" /> Order Summary
          </h3>

          <div className="space-y-2 mt-4">
            <div className="flex justify-between text-[#4C5671]">
              <span>
                {dummySelectedPlan.name} ({dummySelectedPlan.billingDuration})
              </span>
              <span>${basePlanAdjustedPrice.toFixed(2)}</span>
            </div>

            {dummySelectedAddons.map((addon) => (
              <div key={addon.id} className="flex justify-between text-[#4C5671]">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-[#FD5D07]" />
                  {addon.name}
                </span>
                <span>+${addon.price.toFixed(2)}</span>
              </div>
            ))}

            <div className="flex justify-between text-[#4C5671]">
              <span>Shipping</span>
              <span>
                {currentShippingCost === 0
                  ? "Free"
                  : `$${currentShippingCost.toFixed(2)}`}
              </span>
            </div>

            <Separator />
            <div className="flex justify-between font-medium text-[#001233]">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            {discountAmount > 0 && (
              <div className="flex justify-between text-[#FD5D07] font-semibold">
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="flex justify-between text-[#4C5671]">
              <span>Tax (18%)</span>
              <span>${taxAmount.toFixed(2)}</span>
            </div>

            <Separator />
            <div className="flex justify-between text-2xl font-bold text-[#001233]">
              <span>Total</span>
              <span>${totalDue.toFixed(2)}</span>
            </div>
          </div>

          {/* Coupon Code */}
          <div className="mt-6">
            <Label htmlFor="coupon" className="text-[#4C5671] block mb-2">
              Coupon Code
            </Label>
            <div className="flex gap-2">
              <Input
                id="coupon"
                placeholder="Enter coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border-gray-300 focus:border-[#FD5D07]"
              />
              <Button
                onClick={handleApplyCoupon}
                className="bg-[#FD5D07] hover:bg-[#FF7E2E] text-white"
              >
                Apply
              </Button>
            </div>
          </div>

          <Button
            size="lg"
            className="w-full bg-[#FD5D07] hover:bg-[#FF7E2E] text-white font-semibold text-lg py-3 rounded-md shadow transition mt-6"
          >
            Place Order
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
