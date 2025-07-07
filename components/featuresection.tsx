"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const FeatureSection = () => {
  const features = [
    {
      icon: "/images/feature/feature-01.svg",
      title: "Free WHM & cPanel",
      desc: "Manage your sites effortlessly with free, powerful WHM & cPanel tools.",
    },
    {
      icon: "/images/feature/feature-02.svg",
      title: "Performance Optimized",
      desc: "Blazing fast performance to keep your visitors engaged and happy.",
    },
    {
      icon: "/images/feature/feature-03.svg",
      title: "Super Easy to Use",
      desc: "Intuitive control panel and tools designed for ease of use.",
    },
    {
      icon: "/images/feature/feature-04.svg",
      title: "24/7 Expert Support",
      desc: "Our friendly experts are available around the clock to help you.",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-100">
      {/* Decorative blurred gradient blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-30 blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-3xl z-0 animate-pulse"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-white/30 text-center shadow-xl hover:shadow-2xl hover:-translate-y-1 transition transform flex flex-col items-center relative group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Animated gradient glow behind icon */}
              <div className="absolute w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full opacity-20 blur-2xl z-0 group-hover:opacity-40 transition group-hover:scale-110"></div>

              <div className="w-16 h-16 mb-4 rounded-full  flex items-center justify-center shadow-lg relative z-10 group-hover:scale-110 transition">
                <Image src={feature.icon} alt={feature.title} width={30} height={30} />
              </div>
              <h5 className="text-lg font-bold text-gray-900 mb-2 relative z-10">{feature.title}</h5>
              <p className="text-gray-700 text-sm relative z-10">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
