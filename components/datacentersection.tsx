"use client";

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
import '@/app/styles/site-elements.css'
import "@/app/styles/reset.css";
import "@/app/styles/typography.css"

const DataCenterSection = () => {
  const locations = [
    { id: "one", country: "Canada", flag: "/images/flag-01.svg" },
    { id: "two", country: "Germany", flag: "/images/flag-02.svg" },
    { id: "three", country: "Russia", flag: "/images/flag-03.svg" },
    { id: "four", country: "USA", flag: "/images/flag-04.svg" },
    { id: "five", country: "Egypt", flag: "/images/flag-05.svg" },
    { id: "six", country: "India", flag: "/images/flag-06.svg" },
    { id: "seven", country: "China", flag: "/images/flag-07.svg" },
    { id: "eight", country: "Brazil", flag: "/images/flag-08.svg" },
    { id: "nine", country: "South Africa", flag: "/images/flag-09.svg" },
    { id: "ten", country: "Australia", flag: "/images/flag-10.svg" },
  ];

  return (
    <div className="py-24 bg-gradient-to-br from-amber-50 via-white to-amber-100 relative overflow-hidden">
      {/* Decorative blurred gradient shapes */}
      <div className="absolute top-[-80px] left-[-80px] w-96 h-96 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-20  z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20  z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4 relative inline-block after:block after:w-16 after:h-1 after:bg-amber-500 after:mt-2">
            Data Centers All Around the World
          </h3>
          <p className="text-gray-600 text-lg">
            Our hosting plans offer global data center locations to keep your website close to your customers, ensuring faster loading and better reliability.
          </p>
        </div>

        <div className="relative rts-data-center__location flex justify-center">
          <Image
            src="/images/data__center.png"
            alt="Data Center Map"
            width={1200}
            height={700}
            className="rounded-xl  border-white/20"
          />

          <ul className="absolute round-shape top-0 left-0 w-full h-full pointer-events-none">
            {locations.map((loc) => (
              <li
                key={loc.id}
                className={`absolute ${loc.id} flex flex-col items-center pointer-events-auto group`}
              >
                <span
                  className="w-4 h-4 bg-amber-500 rounded-full animate-ping opacity-75 "
                ></span>
                <div className="w-10 h-10 mt-1 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-md group-hover:scale-110 transition">
                  <Image src={loc.flag} alt={loc.country} width={20} height={20} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DataCenterSection;
