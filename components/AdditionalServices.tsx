'use clint'
import React from 'react'

export default function AdditionalServices() {
    const sharedHostingServices = [
        {
          title: "Security",
          items: [
            { id: "basicSSL", label: "Free Basic SSL Certificate (Included)" },
            { id: "spamFilter", label: "Spam Filter for Email (₹300/month)" },
            {
              id: "sharedFirewall",
              label: "Shared Firewall Protection (₹400/month)",
            },
          ],
        },
        {
          title: "Performance",
          items: [
            { id: "liteSpeed", label: "LiteSpeed Server (₹600/month)" },
            { id: "phpSelector", label: "PHP Version Selector (Free)" },
            {
              id: "speedBooster",
              label: "Speed Optimization Plugin (₹500 one-time)",
            },
          ],
        },
        {
          title: "Support",
          items: [
            { id: "sharedSupport", label: "Email Ticket Support (Free)" },
            { id: "chatSupport", label: "Live Chat Support (₹300/month)" },
            {
              id: "migrationSupport",
              label: "Migration Assistance (₹500 one-time)",
            },
          ],
        },
        {
          title: "Add-ons",
          items: [
            { id: "domainPrivacy", label: "Domain Privacy Protection (₹200/year)" },
            { id: "extraStorage", label: "Extra 10GB Storage (₹400/month)" },
            { id: "ftpAccess", label: "Unlimited FTP Accounts (Free)" },
          ],
        },
      ];
    return (
        <>
            <section className="bg-[#f8f9fa] py-[110px]">
  <div className="container mx-auto px-4">
    <h2 className="text-center mb-12 text-black font-bold text-3xl md:text-4xl">
      Additional Shared Hosting Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {sharedHostingServices.map((section, idx) => (
        <div
          key={idx}
          className="bg-white border-l-4 border-[#fd5d07] rounded-2xl shadow-md p-6 flex flex-col h-full"
        >
          <h5 className="font-bold mb-6 text-lg md:text-xl uppercase">
            {section.title}
          </h5>
          <div className="flex-1 space-y-3">
            {section.items.map((item) => (
              <div className="flex items-start gap-2" key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  className="border border-gray-700 rounded-sm focus:ring-0 focus:outline-none"
                />
                <label htmlFor={item.id} className="text-base text-gray-700">
                  {item.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  <div className="flex justify-center mt-10">
    <a
      href="#"
      className="inline-block px-8 py-3 bg-[#fd5d07] text-white rounded-md text-base font-medium hover:bg-orange-600 transition-all"
    >
      Buy Now
    </a>
  </div>
</section>
            
        </>
    )
}
