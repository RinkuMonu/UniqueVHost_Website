"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AdditionalServices from "@/components/AdditionalServices";
import Plans from "@/components/Plans";

const Page = () => {
  const hostingFeatures = [
    {
      icon: "/images/hosting/07.svg",
      title: "All the Essentials",
      desc: "Manage everything from one single dashboard (cPanel).",
      link: "/shared-hosting",
    },
    {
      icon: "/images/hosting/08.svg",
      title: "WHM Control",
      desc: "Create and modify your clients’ hosting accounts with Web Host.",
      link: "/wordpress-hosting",
    },
    {
      icon: "/images/hosting/09.svg",
      title: "Account Management Tools",
      desc: "Whether you want to set up client invoices or brand the existing.",
      link: "/cloud-hosting",
    },
    {
      icon: "/images/hosting/10.svg",
      title: "State-of-Art Technology",
      desc: "Deliver fast, reliable, and secure hosting to your clients, thanks.",
      link: "/reseller-hosting",
    },
  ];

  return (
    <>
      {/* Hero section */}
      <section className="relative bg-[#FFF8F4] py-20 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Reseller Hosting
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              The quality you need with all the potential to earn
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-3 bg-[#FD5D07] text-white rounded-full font-semibold shadow-md hover:bg-[#e04d00] transition-all"
            >
              Start Selling
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/banner/reseller.png"
              alt="Reseller Hosting"
              width={350}
              height={500}
              className="rounded-xl w-full transition-transform hover:scale-105"
            />
          </div>
        </div>

        <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
      </section>

      {/* Plans section */}
      <Plans sharedHosting={"resellerHosting"}/>

      {/* Features section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-12">
            Reseller Hosting Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hostingFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#fff] rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 text-center border border-transparent hover:border-[#FD5D07] hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={60}
                    height={60}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <Link href={feature.link} className="block font-bold text-lg text-[#001233] mb-2 hover:text-[#FD5D07] transition-colors">
                  {feature.title}
                </Link>
                <p className="text-sm text-[#4C5671] mb-4">{feature.desc}</p>
                <Link
                  href={feature.link}
                  className="inline-block px-5 py-2 border border-[#FD5D07] text-[#FD5D07] rounded-full font-medium hover:bg-[#FD5D07] hover:text-white transition-all"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <AdditionalServices />
    </>
  );
};

export default Page;
