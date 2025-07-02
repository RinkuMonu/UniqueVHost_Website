"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Testimonials from '@/components/ui/testimonials';
import Plans from '@/components/Plans';
import Faqs from '@/components/ui/faqs';
import LatestBlog from '@/components/ui/latestblog';

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
                
                 <h1 className="heading-title" style={{ maxWidth: '477px' }}>Cloud Hosting</h1>
                           <p className="desc">Control and flexibility when your business needs it</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-image-area">
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



     <section className=" bg-light " style={{"paddingTop":"110px" , "paddingBottom":"110px"}}>
                <div className="container"  >
                    <h2 className="text-center mb-5 text-black fw-bold">Additional VPS Hosting Services</h2>
                    <div className="row g-4">
                        {cloudHostingServices.map((section, idx) => (
                            <div className="col-md-3" key={idx}>
                                <div className="bg-white  border-4 rounded-3 shadow-md p-4 h-100" style={{"borderLeft":"2px solid #fd5d07"}}>
                                    <h5 className="fw-bold mb-4 fs-4  text-uppercase ">{section.title}</h5>
                                    {section.items.map((item) => (
                                        <div className="form-check mb-2" key={item.id}>
                                            <input
                                                className="form-check-input border border-dark bg-transparent shadow-none"
                                                type="checkbox"
                                                id={item.id}
                                            />
                                            <label className="form-check-label " htmlFor={item.id}>
                                               <p className='fs-5'> {item.label}</p>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                   <div className="d-flex justify-content-center mt-5 ">
                              <a href="#" className='get-started-btn px-4'>Buy Now</a>
                            </div>
            </section>
  </>
  );
};

export default Page;