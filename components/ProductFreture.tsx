import { Cpu, Globe, HardDrive, MemoryStick } from 'lucide-react'
import React from 'react'

export default function ProductFreture() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-[#FFF8F4] to-[#FFF2E6] overflow-hidden mb-10">
      {/* Decorative background shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-4">Why Developers Love Our Cloud</h2>
        <p className="max-w-xl mx-auto text-[#4C5671] mb-12">Discover the features that make our cloud solutions the favorite among developers worldwide.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Cpu,
              title: "Fast CPUs",
              desc: "Latest-gen CPUs ensure your workloads run at maximum speed.",
            },
            {
              icon: MemoryStick,
              title: "Flexible RAM",
              desc: "Adjust memory configurations on the fly as your needs grow.",
            },
            {
              icon: HardDrive,
              title: "SSD Storage",
              desc: "Ultra-fast NVMe SSD disks for lightning-fast data access.",
            },
            {
              icon: Globe,
              title: "Global Reach",
              desc: "Deploy your applications in multiple regions around the world instantly.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all border border-[#F3F4F6]"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[#FD5D07]/10 rounded-full mx-auto mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-[#FD5D07]" />
              </div>
              <h3 className="font-semibold text-[#001233] mb-2 text-lg group-hover:text-[#FD5D07] transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-[#4C5671]">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
