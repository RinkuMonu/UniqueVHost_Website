"use client"

import Image from 'next/image'
import React, { useState } from 'react'

export default function Plans() {
  const [activeTab, setActiveTab] = useState('monthly')
  const [openFeature, setOpenFeature] = useState('plan-features') // default open

  const pricingPlans = [
    {
      id: 'monthly',
      label: 'Monthly',
      plans: [
        { type: 'Basic Plan', price: '$7.20', sub: '/ mo', renews: 'Renews at $5.32/month' },
        { type: 'Business Plan', price: '$7.20', sub: '/ mo', renews: 'Renews at $5.32/month' },
        { type: 'Pro Plan', price: '$7.20', sub: '/ mo', renews: 'Renews at $5.32/month' }
      ]
    },
    {
      id: 'yearly',
      label: 'Yearly',
      plans: [
        { type: 'Basic Plan', price: '$17.20', sub: '/ yr', renews: 'Renews at $15.32/yearly' },
        { type: 'Business Plan', price: '$17.20', sub: '/ yr', renews: 'Renews at $15.32/yearly' },
        { type: 'Pro Plan', price: '$17.20', sub: '/ yr', renews: 'Renews at $15.32/yearly' }
      ]
    },
    {
      id: '3year',
      label: '3 Year',
      plans: [
        { type: 'Basic Plan', price: '$37.20', sub: '/ 3yr', renews: 'Renews at $35.32/3yr' },
        { type: 'Business Plan', price: '$37.20', sub: '/ 3yr', renews: 'Renews at $35.32/3yr' },
        { type: 'Pro Plan', price: '$37.20', sub: '/ 3yr', renews: 'Renews at $35.32/3yr' }
      ]
    }
  ]

  const features = [
    {
      id: 'plan-features',
      title: 'Plan Features',
      rows: [
        { name: 'Disk Space', basic: '20 GB SSD', business: '20 GB SSD', pro: '50 GB SSD' },
        { name: 'File (Inode) Limit', basic: '300,000', business: '300,000', pro: '600,000' },
        { name: 'Bandwidth', basic: 'Unmetered', business: 'Unmetered', pro: 'Unmetered' },
        { name: 'Hosted Domains', basic: '4', business: 'Unlimited', pro: 'Unlimited' },
        { name: 'Parked Domains', basic: 'Unlimited', business: 'Unlimited', pro: 'Unlimited' },
        { name: 'Subdomains', basic: '32', business: 'Unlimited', pro: 'Unlimited' },
        { name: 'Backups', basic: 'Twice a Week', business: 'Twice a Week + Autobackup', pro: 'Twice a Week + Autobackup' }
      ]
    },
    {
      id: 'email-features',
      title: 'Email Features',
      rows: [
        { name: 'Email Accounts', basic: '100', business: 'Unlimited', pro: 'Unlimited' },
        { name: 'Email Storage', basic: '1 GB', business: '5 GB', pro: '10 GB' },
        { name: 'Email Forwarders', basic: 'Unlimited', business: 'Unlimited', pro: 'Unlimited' },
        { name: 'Auto-Responders', basic: 'Yes', business: 'Yes', pro: 'Yes' },
        { name: 'Mailing Lists', basic: 'No', business: 'Yes', pro: 'Yes' },
        { name: 'Spam Protection', basic: 'Basic', business: 'Advanced', pro: 'Advanced' }
      ]
    }
    // You can continue adding more sections if needed
  ]

  const activePlan = pricingPlans.find(plan => plan.id === activeTab)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-3xl font-bold mb-10">Choose Your Plan</h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          {pricingPlans.map(plan => (
            <button
              key={plan.id}
              className={`px-5 py-2 border rounded font-medium ${
                activeTab === plan.id ? 'bg-orange-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
              } transition`}
              onClick={() => setActiveTab(plan.id)}
            >
              {plan.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full border rounded-lg">
            <thead>
              <tr>
                <th className="p-4 border bg-white">
                  <Image src="/images/pricing/pricing-image.svg" alt="Pricing" width={150} height={150} />
                </th>
                {activePlan.plans.map((plan, idx) => (
                  <th key={idx} className="p-4 border text-center bg-white">
                    <div className="font-semibold text-lg">{plan.type}</div>
                    <div className="text-xs text-gray-500">{plan.renews}</div>
                    <div className="text-2xl font-bold mt-2">{plan.price}<sub className="text-sm">{plan.sub}</sub></div>
                    <button className="mt-3 px-4 py-1 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                      Get Started
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
          </table>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {features.map(feature => (
            <div key={feature.id} className="border rounded bg-white">
              <button
                onClick={() => setOpenFeature(openFeature === feature.id ? null : feature.id)}
                className="w-full flex justify-between items-center px-5 py-3 font-medium text-left"
              >
                {feature.title}
                <span className="text-xl">{openFeature === feature.id ? '−' : '+'}</span>
              </button>
              {openFeature === feature.id && (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-t">
                    <tbody>
                      {feature.rows.map((row, idx) => (
                        <tr key={idx} className="border-b">
                          <td className="p-3 border-r font-medium bg-gray-50">{row.name}</td>
                          <td className="p-3 border-r text-center">{row.basic}</td>
                          <td className="p-3 border-r text-center">{row.business}</td>
                          <td className="p-3 text-center">{row.pro}</td>
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
  )
}
