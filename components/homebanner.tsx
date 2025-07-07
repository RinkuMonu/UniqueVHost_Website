"use client";


import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroBanner() {
  const [tab, setTab] = useState("register");

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center">
      {/* Background Video */}
      <video
        loop
        muted
        autoPlay
        src="/images/video/hosting.mp4"
        className="absolute inset-0 object-cover w-full h-full"
      ></video>

      {/* Dark Overlay (optional for contrast) */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Box aligned left */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10  mx-6 lg:ml-20 p-8 bg-white/10 border-white/20 shadow-xl text-white"
      >
        <h6 className="text-amber-400 font-semibold mb-2">Up to 75% off Web Hosting</h6>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Powerful Web Hosting <br />
          <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Solutions</span>
        </h1>
        <p className="text-lg mb-6">From <span className="font-bold">$3.99</span>/mo. Regular $17.99/mo. excl. VAT</p>

        {/* Tabs */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => setTab("register")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              tab === "register"
                ? "bg-amber-500 text-white"
                : "bg-white/20 text-white hover:bg-amber-500 hover:text-white"
            }`}
          >
            Register
          </button>
          <button
            onClick={() => setTab("transfer")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              tab === "transfer"
                ? "bg-amber-500 text-white"
                : "bg-white/20 text-white hover:bg-amber-500 hover:text-white"
            }`}
          >
            Transfer
          </button>
        </div>

        {/* Form */}
        <form action="#" className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Enter domain name"
            required
            className="px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
          />
          <select
            className="px-4 py-3 rounded-lg border border-white/30 bg-white/10 backdrop-blur-md  focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option className="text-black">.com</option>
            <option className="text-black">.net</option>
            <option className="text-black">.org</option>
            <option className="text-black">.info</option>
            <option className="text-black">.xyz</option>
          </select>
          <button type="submit" className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 transition text-white font-semibold whitespace-nowrap">
            {tab === "register" ? "Search" : "Transfer"}
          </button>
        </form>

        {/* Prices */}
        <div className="flex flex-wrap gap-4 mt-5 text-sm">
          <div className="flex gap-1 items-center">
            <strong>.com</strong>
            <span>only $6.19</span>
          </div>
          <div className="flex gap-1 items-center">
            <strong>.org</strong>
            <span>only $5.19</span>
          </div>
          <div className="flex gap-1 items-center">
            <strong>.xyz</strong>
            <span>only $1</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
