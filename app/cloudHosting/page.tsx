"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// import Testimonials from '@/components/ui/testimonials';
import Plans from '@/components/Plans';
import AdditionalServices from '@/components/AdditionalServices';
// import Faqs from '@/components/ui/faqs';
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


const dedicatedFeatures = [
  {
    title: "Free migration",
    description: "Manage everything from one single dashboard (cPanel).",
    link: "/shared-hosting",
    icon: "/images/hosting/15.svg",
  },
  {
    title: "Management options",
    description: "Create and modify your clients’ hosting accounts with Web Host.",
    link: "/wordpress-hosting",
    icon: "/images/hosting/16.svg",
  },
  {
    title: "Airtight security",
    description: "Whether you want to set up client invoices or brand the existing.",
    link: "/cloud-hosting",
    icon: "/images/hosting/17.svg",
  },
  {
    title: "Optimized network",
    description: "Deliver fast, reliable, and secure hosting to your clients, thanks.",
    link: "/reseller-hosting",
    icon: "/images/hosting/18.svg",
  },
];





const cloudHostingServices = [
  {
    title: "Scalability",
    items: [
      { id: "autoScale", label: "Auto-Scaling Support (₹1000/month)" },
      { id: "loadBalancer", label: "Load Balancer Setup (₹1500/month)" },
      { id: "multiRegion", label: "Multi-Region Deployment (₹2000/month)" },
    ],
  },
  {
    title: "Security",
    items: [
      { id: "cloudDdos", label: "Cloud DDoS Shield (₹1000/month)" },
      { id: "cloudWAF", label: "Web Application Firewall (₹1200/month)" },
      { id: "zeroTrust", label: "Zero Trust Network Setup (₹1500 one-time)" },
    ],
  },
  {
    title: "Management",
    items: [
      { id: "cloudPanel", label: "Cloud Control Panel (₹800/month)" },
      { id: "autoBackup", label: "Automated Backups (₹600/month)" },
      { id: "cloudMonitoring", label: "24/7 Cloud Monitoring (₹500/month)" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { id: "objectStorage", label: "Object Storage (₹0.5/GB/month)" },
      { id: "cdnBoost", label: "Premium CDN Boost (₹700/month)" },
      { id: "dedicatedIp", label: "Dedicated IP (₹300/month)" },
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
                
                 <h1 className="heading-title">Cloud Hosting</h1>
                           <p className="desc">Control and flexibility when your business needs it</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-image-area" style={{display:'flex', justifyContent:'center'}}>
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
                            <h2 className="rts-section__title">Cloud Hosting Feature</h2>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {dedicatedFeatures.map((item, index) => (
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