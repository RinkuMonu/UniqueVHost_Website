"use client";
import Image from "next/image";

export default function HostingFeatureArea() {
  return (
    <div className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 relative inline-block after:block after:w-16 after:h-1 after:bg-amber-500 after:mt-2">
              Unmatched Website Performance
            </h2>
            <p className="text-gray-700 mb-10 text-lg">
              The ultimate toolkit for your online success, from lightning domains to blazing hosting.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: "/images/pricing/09.svg",
                  title: "Easy Domain Search",
                  desc: "Search and secure your domain easily.",
                },
                {
                  icon: "/images/pricing/10.svg",
                  title: "Best Pricing",
                  desc: "Affordable plans for every business.",
                },
                {
                  icon: "/images/pricing/09.svg",
                  title: "24/7 Assistance",
                  desc: "Support you can rely on, always.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start bg-white/70 backdrop-blur-md rounded-xl p-5 border border-white/30 shadow-md hover:shadow-xl hover:-translate-y-1 transition transform"
                >
                  <div className="w-14 h-14 flex-shrink-0 rounded-full  flex items-center justify-center shadow-lg mr-4 relative">
                    <div className="absolute w-20 h-20 rounded-full bg-amber-400 opacity-20 blur-xl -z-10"></div>
                    <Image src={item.icon} alt={item.title} width={28} height={28} />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-gray-900">{item.title}</h5>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <Image
              src="/images/feature/feature-hero-09.webp"
              alt="Hosting Feature"
              width={580}
              height={500}
              className="rounded-2xl shadow-2xl border border-white/30"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
