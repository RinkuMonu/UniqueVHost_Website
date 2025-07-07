"use client";
import React from "react";

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
      <section className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-center mb-12 text-[#001233] font-bold text-3xl md:text-4xl">
            Additional Shared Hosting Services
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sharedHostingServices.map((section, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 flex flex-col border-t-4 border-[#FD5D07] hover:-translate-y-2"
              >
                <h5 className="font-bold mb-4 text-lg md:text-xl text-[#001233]">
                  {section.title}
                </h5>
                <div className="flex-1 space-y-3">
                  {section.items.map((item) => (
                    <div
                      className="flex items-start gap-2 text-sm text-[#4C5671]"
                      key={item.id}
                    >
                      <input
                        type="checkbox"
                        id={item.id}
                        className="accent-[#FD5D07] mt-1"
                      />
                      <label htmlFor={item.id} className="cursor-pointer">
                        {item.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-[#FD5D07] text-white rounded-full font-semibold shadow-lg hover:bg-[#e24e00] transition-all"
            >
              Buy Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
