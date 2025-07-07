"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Plans() {
  const [activeTab, setActiveTab] = useState("monthly");
  const [openFeature, setOpenFeature] = useState("plan-features"); // default open

  const pricingPlans = [
    {
      id: "monthly",
      label: "Monthly",
      plans: [
        { type: "Basic Plan", price: "$7.20", sub: "/ mo", renews: "Renews at $5.32/month" },
        { type: "Business Plan", price: "$7.20", sub: "/ mo", renews: "Renews at $5.32/month" },
        { type: "Pro Plan", price: "$7.20", sub: "/ mo", renews: "Renews at $5.32/month" }
      ]
    },
    {
      id: "yearly",
      label: "Yearly",
      plans: [
        { type: "Basic Plan", price: "$17.20", sub: "/ yr", renews: "Renews at $15.32/yearly" },
        { type: "Business Plan", price: "$17.20", sub: "/ yr", renews: "Renews at $15.32/yearly" },
        { type: "Pro Plan", price: "$17.20", sub: "/ yr", renews: "Renews at $15.32/yearly" }
      ]
    },
    {
      id: "3year",
      label: "3 Year",
      plans: [
        { type: "Basic Plan", price: "$37.20", sub: "/ 3yr", renews: "Renews at $35.32/3yr" },
        { type: "Business Plan", price: "$37.20", sub: "/ 3yr", renews: "Renews at $35.32/3yr" },
        { type: "Pro Plan", price: "$37.20", sub: "/ 3yr", renews: "Renews at $35.32/3yr" }
      ]
    }
  ];

  const features = [
    {
      id: "plan-features",
      title: "Plan Features",
      rows: [
        { name: "Disk Space", basic: "20 GB SSD", business: "20 GB SSD", pro: "50 GB SSD" },
        { name: "File (Inode) Limit", basic: "300,000", business: "300,000", pro: "600,000" },
        { name: "Bandwidth", basic: "Unmetered", business: "Unmetered", pro: "Unmetered" },
        { name: "Hosted Domains", basic: "4", business: "Unlimited", pro: "Unlimited" },
        { name: "Parked Domains", basic: "Unlimited", business: "Unlimited", pro: "Unlimited" },
        { name: "Subdomains", basic: "32", business: "Unlimited", pro: "Unlimited" },
        { name: "Backups", basic: "Twice a Week", business: "Twice a Week + Autobackup", pro: "Twice a Week + Autobackup" }
      ]
    },
    {
      id: "email-features",
      title: "Email Features",
      rows: [
        { name: "Email Accounts", basic: "100", business: "Unlimited", pro: "Unlimited" },
        { name: "Email Storage", basic: "1 GB", business: "5 GB", pro: "10 GB" },
        { name: "Email Forwarders", basic: "Unlimited", business: "Unlimited", pro: "Unlimited" },
        { name: "Auto-Responders", basic: "Yes", business: "Yes", pro: "Yes" },
        { name: "Mailing Lists", basic: "No", business: "Yes", pro: "Yes" },
        { name: "Spam Protection", basic: "Basic", business: "Advanced", pro: "Advanced" }
      ]
    }
  ];

  const activePlan = pricingPlans.find((plan) => plan.id === activeTab);

  return (
    <section className="py-20 bg-[#FFF8F4]">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-extrabold text-[#001233] mb-12">
          Choose Your Plan
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {pricingPlans.map((plan) => (
            <button
              key={plan.id}
              className={`px-5 py-2 rounded-full font-semibold transition-all ${
                activeTab === plan.id
                  ? "bg-[#FD5D07] text-white shadow-lg"
                  : "bg-white text-[#001233] border border-[#FD5D07] hover:bg-[#FD5D07] hover:text-white"
              }`}
              onClick={() => setActiveTab(plan.id)}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {activePlan.plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 text-center border border-transparent hover:-translate-y-2 hover:border-[#FD5D07]"
            >
              <h3 className="font-bold text-xl mb-2 text-[#001233]">{plan.type}</h3>
              <p className="text-sm text-gray-500 mb-4">{plan.renews}</p>
              <div className="text-4xl font-bold text-[#FD5D07] mb-2">
                {plan.price}
                <sub className="text-base text-[#001233]">{plan.sub}</sub>
              </div>
              <button className="mt-4 px-5 py-2 bg-[#FD5D07] text-white rounded-full font-semibold hover:bg-[#e04d00] transition-all">
                Get Started
              </button>
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-2xl shadow-md overflow-hidden transition-all">
              <button
                onClick={() => setOpenFeature(openFeature === feature.id ? null : feature.id)}
                className="w-full flex justify-between items-center px-6 py-4 text-lg font-semibold text-[#001233] hover:bg-[#f9f9f9] transition-all"
              >
                {feature.title}
                <span className="text-2xl">{openFeature === feature.id ? "−" : "+"}</span>
              </button>
              {openFeature === feature.id && (
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm text-left border-t">
                    <tbody>
                      {feature.rows.map((row, idx) => (
                        <tr key={idx} className="border-b last:border-none">
                          <td className="px-4 py-3 bg-gray-50 font-medium text-[#001233]">{row.name}</td>
                          <td className="px-4 py-3 text-center">{row.basic}</td>
                          <td className="px-4 py-3 text-center">{row.business}</td>
                          <td className="px-4 py-3 text-center">{row.pro}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
