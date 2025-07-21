"use client";

import React from "react";
import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";
import { CpuIcon, ShieldIcon, ServerIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import axiosInstance from "../AxiosInstance/axiosInstance";

type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: { icon: React.ElementType; text: string }[];
  popular?: boolean;
  category_id: string;
  slug: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  os_options: string[];
  location: string;
};

type Addon = {
  recommended: React.ReactNode;
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ElementType;
};
interface RawPlan {
  _id: string;
  name: string;
  slug: string;
  price: number;
  features?: {
    title: string;
    values: { [key: string]: string };
  }[];
  category_id: string;
  cpu: string;
  ram: string;
  storage: string;
  bandwidth: string;
  os_options: string[];
  location: string;
}

interface RawAddon {
  _id: string;
  name: string;
  description?: string;
  price: number;
}

export default function ProductDetailV3Page() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("");
  const [isYearlyBilling, setIsYearlyBilling] = useState<boolean>(false);
  const [selectedAddons, setSelectedAddons] = useState<Set<string>>(new Set());
  const [plans, setPlans] = useState<Plan[]>([]);
  const [addons, setAddons] = useState<Addon[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const selectedPlan = useMemo(
    () => plans.find((p) => p.id === selectedPlanId),
    [selectedPlanId, plans]
  );

  const currentBasePrice = useMemo(() => {
    if (!selectedPlan) return 0;
    return isYearlyBilling
      ? selectedPlan.yearlyPrice
      : selectedPlan.monthlyPrice;
  }, [selectedPlan, isYearlyBilling]);

  const currentAddonsTotal = useMemo(() => {
    let total = 0;
    selectedAddons.forEach((addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      if (addon) {
        total += addon.price;
      }
    });
    return total;
  }, [selectedAddons, addons]);

  const finalTotalPrice = useMemo(
    () => currentBasePrice + currentAddonsTotal,
    [currentBasePrice, currentAddonsTotal]
  );

  useEffect(() => {
    const fetchPlansAndAddons = async () => {
      try {
        const plansRes = await axiosInstance.get("/plans");
        const rawPlans = plansRes.data.plans || plansRes.data;

        const transformedPlans = rawPlans.map((plan: RawPlan) => ({
          id: plan._id,
          name: plan.name,
          tagline: plan.slug
            .replace(/-/g, " ")
            .replace(/\b\w/g, (l: string) => l.toUpperCase()),
          monthlyPrice: plan.price,
          yearlyPrice: Math.round(plan.price * 12 * 0.83), // 17% discount for yearly
          features: plan.features?.map(
            (feature: {
              title: string;
              values: { [key: string]: string };
            }) => ({
              icon: CpuIcon,
              text: `${feature.title}: ${
                feature.values[
                  plan.name.toLowerCase().includes("basic")
                    ? "basic"
                    : plan.name.toLowerCase().includes("standard")
                    ? "standard"
                    : "premium"
                ]
              }`,
            })
          ),
          popular: plan.name.toLowerCase().includes("premium"),
          category_id: plan.category_id,
          slug: plan.slug,
          cpu: plan.cpu,
          ram: plan.ram,
          storage: plan.storage,
          bandwidth: plan.bandwidth,
          os_options: plan.os_options,
          location: plan.location,
        }));

        setPlans(transformedPlans);

        // Set the first category as default if available
        if (transformedPlans.length > 0) {
          setSelectedCategory(transformedPlans[0].category_id);
        }

        const addonsRes = await axiosInstance.get("/addons/all");
        const rawAddons = addonsRes.data.addons || addonsRes.data;

        // Transform addons
        const transformedAddons = rawAddons.map((addon: RawAddon) => ({
          id: addon._id,
          name: addon.name,
          description:
            addon.description || "Enhance your hosting with extra features.",
          price: addon.price,
          icon: ServerIcon,
          recommended: (
            <span className="absolute top-2 right-2 bg-[#FD5D07] text-white text-xs px-2 py-0.5 rounded-full shadow-sm">
              Recommended
            </span>
          ),
        }));
        setAddons(transformedAddons);
      } catch (error) {
        console.error("Error fetching plans or addons:", error);
      }
    };

    fetchPlansAndAddons();
  }, []);

  useEffect(() => {
    if (plans.length > 0 && selectedCategory && !selectedPlanId) {
      const categoryPlans = plans.filter(
        (plan) => plan.category_id === selectedCategory
      );
      if (categoryPlans.length > 0) {
        setSelectedPlanId(categoryPlans[0].id);
      }
    }
  }, [plans, selectedCategory]);

  const handleAddonToggle = async (addonId: string, checked: boolean) => {
    setSelectedAddons((prev) => {
      const newSet = new Set(prev);
      if (checked) {
        newSet.add(addonId);
      } else {
        newSet.delete(addonId);
      }
      return newSet;
    });

    if (checked) {
      const addon = addons.find((a) => a.id === addonId);
      if (!addon) return;

      try {
        const token = localStorage.getItem("token");
        const orderId = localStorage.getItem("orderId");

        if (!orderId) {
          console.error("Order ID not found in localStorage");
          return;
        }

        await axiosInstance.post(
          "/addons/add",
          {
            order_id: orderId,
            name: addon.name,
            description: addon.description || "Addon service",
            price: addon.price,
            quantity: 1,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        console.error("Failed to add addon to backend:", error);
      }
    }
  };

  const handleOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const token = localStorage.getItem("token");

    if (!user?.id) {
      Swal.fire("Error", "User not logged in", "error");
      return;
    }

    if (!selectedPlanId) {
      Swal.fire("Error", "Please select a plan", "error");
      return;
    }

    const startDate = new Date().toISOString();
    const endDate = new Date(
      new Date().setMonth(new Date().getMonth() + (isYearlyBilling ? 12 : 1))
    ).toISOString();

    const selectedPlanData = plans.find((p) => p.id === selectedPlanId);

    const payload = {
      user_id: user.id,
      plan_id: selectedPlanId,
      start_date: startDate,
      end_date: endDate,
      server_info: {
        ip: "192.168.1.100",
        panel: "cPanel",
        username: user.name || "demo_user",
        cpu: selectedPlanData?.cpu || "",
        ram: selectedPlanData?.ram || "",
        storage: selectedPlanData?.storage || "",
        bandwidth: selectedPlanData?.bandwidth || "",
        os: selectedPlanData?.os_options[0] || "Ubuntu",
        location: selectedPlanData?.location || "",
      },
      additional_services: [...selectedAddons],
    };

    try {
      const res = await axiosInstance.post(
        "/orders/order/createorder",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.data?.order?._id) {
        localStorage.setItem("orderId", res.data.order._id);
        Swal.fire(
          "Success!",
          "Your order has been placed successfully!",
          "success"
        );
      } else {
        Swal.fire("Failed", "Order creation failed", "error");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "An error occurred while placing order", "error");
    }
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF5EF] to-[#FFE8D9] text-[#001233]">
        Loading plans...
      </div>
    );
  }

  // Get unique categories from plans
  const categories = [...new Set(plans.map((plan) => plan.category_id))];

  // Filter plans by selected category
  const filteredPlans = selectedCategory
    ? plans.filter((plan) => plan.category_id === selectedCategory)
    : plans;

  return (
    <div className="min-h-screen bg-gradient-to-br text-[#4C5671]">
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Product Details
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Experience unparalleled speed and reliability with our dedicated
              servers, designed for demanding workloads and global reach. Deploy
              in minutes with full root access.
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
          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">
                99.9%
              </div>
              <p className="text-[#4C5671] font-medium text-lg">Uptime</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">24/7</div>
              <p className="text-[#4C5671] font-medium text-lg">Support</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">10K+</div>
              <p className="text-[#4C5671] font-medium text-lg">Customers</p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute inset-0 bg-[#FD5D07]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="text-5xl font-bold text-[#FD5D07] mb-3">45s</div>
              <p className="text-[#4C5671] font-medium text-lg">
                Avg. Response
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#FD5D07] to-orange-300 rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto px-4 py-12 bg-[#FFF8F4]">
        <div className="max-w-5xl mx-auto">
          {/* Category Selection */}
          {categories.length > 1 && (
            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap justify-center gap-2">
                {categories.map((categoryId) => {
                  const categoryPlans = plans.filter(
                    (plan) => plan.category_id === categoryId
                  );
                  const categoryName =
                    categoryPlans[0]?.slug
                      .replace(/-/g, " ")
                      .replace(/\b\w/g, (l: string) => l.toUpperCase()) ||
                    "Category";
                  return (
                    <button
                      key={categoryId}
                      onClick={() => setSelectedCategory(categoryId)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === categoryId
                          ? "bg-[#FD5D07] text-white"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {categoryName}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect plan for your needs
            </p>
          </div>

          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center bg-gray-100 rounded-full p-1">
              <button
                onClick={() => setIsYearlyBilling(false)}
                className={`px-6 py-2 rounded-full ${
                  !isYearlyBilling ? "bg-white shadow" : ""
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearlyBilling(true)}
                className={`px-6 py-2 rounded-full ${
                  isYearlyBilling ? "bg-white shadow" : ""
                }`}
              >
                Yearly <span className="text-orange-500 ml-1">(Save 17%)</span>
              </button>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {filteredPlans.map((plan) => {
              const isSelected = selectedPlanId === plan.id;
              return (
                <div
                  key={plan.id}
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={cn(
                    "relative group cursor-pointer border rounded-2xl p-8 transition-all duration-300 shadow-sm bg-white hover:shadow-xl hover:-translate-y-1",
                    isSelected
                      ? "border-orange-500 ring-4 ring-orange-500/20 bg-gradient-to-br from-[#FFF7F2] to-white"
                      : "border-gray-200"
                  )}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 right-5 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce">
                      POPULAR
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="mb-6 text-center">
                    <h3 className="text-2xl font-bold text-[#001233]">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-[#4C5671] mt-1">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 text-center">
                    <span className="text-5xl font-extrabold text-orange-500 tracking-tight">
                      ${isYearlyBilling ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-500 text-base">
                      /{isYearlyBilling ? "yr" : "mo"}
                    </span>
                  </div>

                  {/* Key Specs */}
                  <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
                    <div className="flex flex-col items-center">
                      <span className="font-medium">CPU</span>
                      <span>{plan.cpu}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-medium">RAM</span>
                      <span>{plan.ram}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-medium">Storage</span>
                      <span>{plan.storage}</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-medium">Bandwidth</span>
                      <span>{plan.bandwidth}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => {
                      const Icon = feature.icon;
                      return (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <Icon className="h-5 w-5 text-orange-500 shrink-0" />
                          <span className="text-sm">{feature.text}</span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={cn(
                      "w-full py-3 rounded-full font-semibold text-sm transition-all",
                      isSelected
                        ? "bg-orange-500 text-white hover:bg-orange-600 shadow-md"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    )}
                  >
                    {isSelected ? "✓ Selected" : "Select Plan"}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Order Now CTA */}
          <div className="mt-14 flex justify-center">
            <Button
              onClick={handleOrder}
              className="bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🚀 Order Now
            </Button>
          </div>

          {/* Included features */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-4">
              <ShieldIcon className="h-5 w-5 mr-2" />
              <span>All plans include</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-orange-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-orange-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>Free SSL</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="h-5 w-5 text-orange-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add-ons Section */}
      <div className="relative bg-white/60 backdrop-blur-lg border border-white/30 shadow-none rounded-3xl px-8 py-16 mb-20">
        <h2 className="text-5xl font-extrabold text-center text-[#001233] drop-shadow-sm mb-3">
          Boost Your Hosting with Add-ons
        </h2>
        <p className="text-center text-[#4C5671] text-lg mb-12 max-w-2xl mx-auto">
          Power up your plan with smart, performance-driven tools tailored for
          your hosting needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {addons.map((addon) => {
            const Icon = addon.icon;
            const isSelected = selectedAddons.has(addon.id);
            return (
              <div
                key={addon.id}
                className={cn(
                  "group relative p-6 rounded-2xl border-2 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:-translate-y-1 bg-white/90 backdrop-blur-md",
                  isSelected
                    ? "border-[#FD5D07] bg-gradient-to-b from-[#FFF4E7] to-white"
                    : "border-gray-200 hover:border-[#FD5D07]/50"
                )}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FD5D07]/10 to-transparent blur-xl opacity-0 group-hover:opacity-60 transition-all duration-300 pointer-events-none"></div>

                <div className="w-16 h-16 mb-4 bg-[#FD5D07]/20 rounded-full flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-[#FD5D07]" />
                </div>

                <h3 className="text-xl font-semibold text-center text-[#001233] mb-2">
                  {addon.name}
                </h3>
                <p className="text-sm text-center text-[#4C5671] mb-6 min-h-[60px]">
                  {addon.description}
                </p>
                <div className="text-center text-2xl font-extrabold text-[#FD5D07] mb-4">
                  ${addon.price.toFixed(2)}/mo
                </div>

                <button
                  onClick={() => handleAddonToggle(addon.id, !isSelected)}
                  className={cn(
                    "relative inline-flex justify-center w-full px-5 py-2.5 rounded-full font-medium text-sm transition duration-300 shadow-sm",
                    isSelected
                      ? "bg-[#FD5D07] text-white hover:bg-[#e25506]"
                      : "bg-[#f6f6f6] text-[#001233] hover:bg-[#FD5D07]/10"
                  )}
                >
                  {isSelected ? "✓ Added to Plan" : "Add to Plan"}
                </button>

                {addon.recommended}
              </div>
            );
          })}
        </div>
      </div>

      {/* Final Summary and Checkout */}
      <div className="bg-gradient-to-r from-[#FD5D07] to-[#FF7B3A] text-white p-8 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-3xl font-bold mb-2">Ready to Get Started?</h3>
          <p className="text-lg text-white/90">
            <span className="font-semibold">{selectedPlan.name}</span> Plan (
            {isYearlyBilling ? "Yearly" : "Monthly"})
            {selectedAddons.size > 0 && <> + {selectedAddons.size} Add-ons</>}
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <span className="text-5xl font-extrabold text-white mb-4">
            ${finalTotalPrice.toFixed(2)}
            <span className="text-2xl font-medium text-white/90">
              /{isYearlyBilling ? "yr" : "mo"}
            </span>
          </span>
          <Button
            onClick={handleOrder}
            className="bg-white text-[#FD5D07] hover:bg-gray-100 font-bold py-4 px-10 rounded-lg text-xl transition-all transform hover:scale-105"
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
