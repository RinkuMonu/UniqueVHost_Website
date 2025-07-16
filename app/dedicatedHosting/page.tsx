"use client";
import AdditionalServices from "@/components/AdditionalServices";
import Plans from "@/components/Plans";
import React from "react";
import Image from "next/image";
import "@/app/styles/style.css";
import "@/app/styles/plug.css";
import "@/app/styles/bootstrap.css";
import "@/app/styles/animation.css";
import "@/app/styles/header.css";
import "@/app/styles/nav.css";
import "@/app/styles/forms.css";
import "@/app/styles/mobile.css";
import "@/app/styles/site-elements.css";
import "@/app/styles/reset.css";
import "@/app/styles/typography.css";

function Page() {
  const features = [
    {
      icon: "/images/feature/feature-01.svg",
      title: "Free WHM & cPanel",
      description: "We guarantee it you don't have to worry about it.",
    },
    {
      icon: "/images/feature/feature-02.svg",
      title: "Performance Optimized",
      description: "If your website is slow or down then you losing customers.",
    },
    {
      icon: "/images/feature/feature-03.svg",
      title: "Super Easy to Use",
      description: "Our custom control panel to use and removes the headache",
    },
    {
      icon: "/images/feature/feature-04.svg",
      title: "24/7 Expert Support",
      description: "Get fast help from dedicated experts anytime you need.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#FFF8F4] py-20 overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Dedicated Hosting
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Control and flexibility when your business needs it
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-[#FD5D07] text-white rounded-full font-semibold shadow-md hover:bg-[#e04d00] transition-all"
            >
              Get Started
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/banner/breadcrumb-04.webp"
              alt="Dedicated Hosting"
              width={350}
              height={350}
              className="rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
        <div className="absolute -top-24 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-24 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
      </section>

      {/* Plans Section */}
       <Plans sharedHosting={"dedicatedHosting"} />

      {/* Why EliteHost Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-12">Why EliteHost</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all p-6 text-center border border-transparent hover:border-[#FD5D07] hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="transition-transform group-hover:scale-110"
                  />
                </div>
                <h5 className="font-semibold text-lg text-[#001233] mb-2">{item.title}</h5>
                <p className="text-sm text-[#4C5671]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <AdditionalServices />
    </>
  );
}

export default Page;
