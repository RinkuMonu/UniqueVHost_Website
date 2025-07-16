"use client";
import React, { useEffect, useState } from "react";
import Faqs from "@/components/faqs";
import LatestBlog from "@/components/latestblog";
import Testimonials from "@/components/testimonials";
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
import "@/app/styles/site-elements.css";
import "@/app/styles/reset.css";
import "@/app/styles/typography.css";
import AdditionalServices from "@/components/AdditionalServices";
import axiosInstance from "../AxiosInstance/axiosInstance";
import Plans from "@/components/Plans";



const SharedHostingPage = () => {
  const [sharedHostingPlan, setSharedHostingPlan] = useState([]);


  // useEffect(() => {
  //   const fetchPlan = async () => {
  //     try {
  //       const response = await axiosInstance.get("/plans/slug/sharedHosting");
  //       console.log(response)
  //       setSharedHostingPlan(response.data || []);
  //       console.log("Shared Hosting Plan:", response.data?.plans);
  //     } catch (error) {
  //       console.error("Failed to fetch shared hosting plan", error);
  //     }
  //   };

  //   fetchPlan();
  // }, []);

  const features = [
    "Data Backup and Recovery",
    "Integration with Other Services",
    "Performance and Speed",
  ];

  const hostingOptions = [
    {
      icon: "/images/hosting/01.svg",
      title: "Free SSL Certificates",
      description:
        "Although SSL certificates are now mandatory, still got your back.",
      link: "shared-hosting.html",
    },
    {
      icon: "/images/hosting/02.svg",
      title: "WordPress and cPanel",
      description:
        "Deploy WordPress in seconds with the Softaculous app installer.",
      link: "wordpress-hosting.html",
    },
    {
      icon: "/images/hosting/03.svg",
      title: "Personalized Email Service",
      description:
        "Enjoy domain-based email address of your choice to represent.",
      link: "cloud-hosting.html",
    },
    {
      icon: "/images/hosting/04.svg",
      title: "24/7 Live Support",
      description: "Need some help? Our team of hosting experts is standing.",
      link: "reseller-hosting.html",
    },
  ];

  return (
    <div>
      {/* Breadcrumb Area */}
      <div className="relative bg-[#FFF8F4] py-20 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full"></div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              Shared Website Hosting
            </h1>
            <p className="text-lg md:text-xl text-[#4C5671] mb-4">
              Fast, secure, and affordable hosting plans for any budget
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/images/banner/breadcrumb-01.webp"
              alt="Shared Hosting Banner"
              className=" rounded-xl transition-transform hover:scale-105"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="breadcrumb-shape-area absolute bottom-4 left-0 opacity-50">
          <Image
            src="/images/banner/breadcrumb-shape.svg"
            width={300}
            height={300}
            alt="Breadcrumb Shape"
          />
        </div>
      </div>

      {/* Plans Card Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-[#001233]">
              Our Plans
            </h2> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sharedHostingPlan.map((plan, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-200 p-6 text-center shadow hover:shadow-lg transition-all"
              >
                <h3 className="text-xl font-semibold text-[#001233] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-[#4C5671] mb-4">
                  Renews at ${plan.price}/month
                </p>

                <div className="text-3xl font-bold text-orange-500 mb-2">
                  ${plan.price}
                  <span className="text-lg font-medium text-[#001233]">
                    /mo
                  </span>
                </div>

                <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded-full transition-all">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hosting Feature Section */}
      <div className="bg-[#F9FAFB] py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/images/feature/feature-hero-10.webp"
              alt=""
              className="w-full object-cover transition-transform hover:scale-105"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-4">
              Looking for reliable hosting solutions to Business
            </h2>
            <p className="text-[#152960] mb-6">
              Leverage the power of cloud storage to streamline your data
              management and enhance productivity. Our cloud storage solutions
              offer scalable and flexible plans to fit your growing needs,
              ensuring you only pay for what you use.
            </p>
            <ul className="space-y-3">
              {features.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-[#313149]">
                  <i className="fa-solid fa-check text-[#FD5D07]"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Plans sharedHosting={"sharedHosting"} />

      {/* Hosting Options Cards */}
      <div className="">
        <div className=" mx-auto">
          <div className="text-center">
            {/* <h2 className="text-3xl md:text-4xl font-bold text-[#001233]">
              Shared Hosting Feature
            </h2> */}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sharedHostingPlan.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-6 text-center transition-all hover:-translate-y-2"
              >
                <div className="flex justify-center mb-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-16 h-16 transition-transform group-hover:scale-110"
                  />
                </div>
                {/* <Link
                  href={item.link}
                  className="text-lg font-semibold text-[#001233] hover:text-[#FD5D07] mb-2 block"
                >
                  {item.title}
                </Link> */}
                <p className="text-sm text-[#4C5671] mb-4">{item.description}</p>
                {/* <Link
                  href={item.link}
                  className="inline-flex items-center px-4 py-2 border border-[#FD5D07] text-[#FD5D07] rounded-full hover:bg-[#FD5D07] hover:text-white transition-all"
                >
                  View Details <i className="fa-regular fa-long-arrow-right ml-2"></i>
                </Link> */}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* <AdditionalServices /> */}
    </div>
  );
};

export default SharedHostingPage;