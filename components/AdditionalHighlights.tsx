"use client";
import Image from "next/image";

const highlights = [
  {
    icon: "/images/icons/icon-rocket.svg",
    title: "Blazing Fast Deployments",
    description:
      "Spin up your VPS in seconds with instant provisioning and optimized configurations.",
  },
  {
    icon: "/images/icons/icon-shield.svg",
    title: "Enterprise-Grade Security",
    description:
      "Get advanced DDoS protection, automatic backups, and robust firewall included.",
  },
  {
    icon: "/images/icons/icon-global.svg",
    title: "Global Data Centers",
    description:
      "Choose from multiple worldwide locations for low latency and high availability.",
  },
  {
    icon: "/images/icons/icon-support.svg",
    title: "24/7 Premium Support",
    description:
      "Our expert support team is ready to help you anytime — day or night.",
  },
];

export default function AdditionalHighlights() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8F4] to-[#ffffff]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-12">
          What Makes Our VPS Stand Out
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 border border-transparent hover:border-[#FD5D07] hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="transition-transform hover:scale-110"
                />
              </div>
              <h5 className="font-semibold text-lg text-[#001233] mb-2">
                {item.title}
              </h5>
              <p className="text-sm text-[#4C5671]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
