"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Testimonials from '@/components/testimonials';
import Plans from '@/components/Plans';
import Faqs from '@/components/faqs';
import LatestBlog from '@/components/latestblog';
import AdditionalServices from '@/components/AdditionalServices';
import "@/app/styles/style.css";
import "@/app/styles/plug.css";
import "@/app/styles/bootstrap.css";
import "@/app/styles/animation.css";
import "@/app/styles/header.css";
import "@/app/styles/nav.css";
import "@/app/styles/forms.css";
// import "@/app/styles/styles2.css";
import "@/app/styles/mobile.css";
import "@/app/styles/site-elements.css";
import "@/app/styles/reset.css";
import "@/app/styles/typography.css";
const Page = () => {


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
            description: "Our custom control panel to use and removes the headache",
        },
    ];





const vpsHostingServices = [
  {
    title: "Performance",
    items: [
      { id: "cpuUpgrade", label: "CPU Upgrade (₹500/month per core)" },
      { id: "ramUpgrade", label: "RAM Upgrade (₹400/month per GB)" },
      { id: "ssdStorage", label: "Additional SSD Storage (₹300/month per 20GB)" },
    ],
  },
  {
    title: "Security",
    items: [
      { id: "ddos", label: "Advanced DDoS Protection (₹1000/month)" },
      { id: "managedFirewall", label: "Managed Firewall (₹1200/month)" },
      { id: "serverHardening", label: "Server Hardening (₹1500 one-time)" },
    ],
  },
  {
    title: "Management",
    items: [
      { id: "fullyManaged", label: "Fully Managed VPS (₹2000/month)" },
      { id: "controlPanel", label: "Control Panel Setup (₹800/month)" },
      { id: "osReinstall", label: "OS Reinstall Assistance (₹500 one-time)" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { id: "snapshots", label: "Snapshot Backups (₹700/month)" },
      { id: "ipv6", label: "IPv6 Support (Free)" },
      { id: "extraIp", label: "Additional IP (₹250/month)" },
    ],
  },
];

  return (
  <>
     <div className="rts-breadcrumb-area body-bg-2">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row align-items-center">
            <div className="col-lg-6 order-change">
              <div className="breadcrumb-content">
                
                 <h1 className="heading-title">VPS Hosting</h1>
                            <p className="desc">Control and flexibility when your business needs it</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-image-area" style={{display:"flex", justifyContent:"center"}}> 
                <Image
                  src="/images/banner/breadcrumb-04.webp"
                  width={332}
                  height={590}
                  alt="Reseller Hosting"
                  layout="intrinsic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-shape-area">
        <Image
          src="/images/banner/breadcrumb-shape.svg"
          width={500}
          height={500}
          alt="Breadcrumb Shape"
        />
      </div>
    </div>

   <Plans/>

   <section className="rts-feature section__padding">
                <div className="container">
                    <div className="row">
                        <div className="rts-section text-center">
                            <h2 className="rts-section__title">Why EliteHost</h2>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {features.map((item, index) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                                <div className="single__feature">
                                    <div className="single__feature--box">
                                        <div className="single__feature--box-icon">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <h5 className="single__feature--box-title">{item.title}</h5>
                                        <p className="single__feature--box-description">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

<AdditionalServices />
  </>
  );
};

export default Page;