"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@/app/styles/style.css";
import "@/app/styles/plug.css";
import "@/app/styles/bootstrap.css";
import "@/app/styles/animation.css";
import "@/app/styles/header.css";
import "@/app/styles/nav.css";
import "@/app/styles/forms.css";
import "@/app/styles/mobile.css"; 
import '@/app/styles/site-elements.css'
import "@/app/styles/reset.css";
import "@/app/styles/typography.css"

const ServiceSection = () => {
  const services = [
    {
      icon: "/images/service/shared__hosting.svg",
      title: "Shared Hosting",
      desc: "The most popular hosting plan with everything you need to get started.",
      link: "#",
    },
    {
      icon: "/images/service/wordpress__hosting.svg",
      title: "WordPress Hosting",
      desc: "Optimized speed and security, tailored for WordPress websites.",
      link: "#",
    },
    {
      icon: "/images/service/cloud__hosting.svg",
      title: "Cloud Hosting",
      desc: "Flexible, scalable solutions for growing businesses and projects.",
      link: "#",
    },
    {
      icon: "/images/service/reseller__hosting.svg",
      title: "Reseller Hosting",
      desc: "Launch your own hosting business effortlessly with our reseller plans.",
      link: "#",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 inline-block border-b-4 border-amber-500 pb-1">
            Experience Our Exceptional Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover world-class hosting services designed to fit your needs and help your business grow effortlessly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-100 p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition transform flex flex-col"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center shadow-lg relative">
                <div className="absolute w-20 h-20 rounded-full bg-amber-400 opacity-20 blur-xl -z-10"></div>
                <Image src={service.icon} alt={service.title} width={30} height={30} />
              </div>
              <h5 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h5>
              <p className="text-gray-600 text-sm flex-grow">{service.desc}</p>
              <Link
                href={service.link}
                className="mt-4 inline-flex items-center justify-center px-4 py-2 bg-orange-400 hover:bg-amber-500 text-white text-sm font-medium rounded transition"
              >
                Get a Quote
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
