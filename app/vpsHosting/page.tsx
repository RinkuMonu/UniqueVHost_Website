"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Testimonials from '@/components/testimonials';
import Plans from '@/components/Plans';
import Faqs from '@/components/faqs';
import LatestBlog from '@/components/latestblog';

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
                
                 <h1 className="heading-title" style={{ maxWidth: '477px' }}>VPS Hosting</h1>
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



     <section className=" bg-light " style={{"paddingTop":"110px" , "paddingBottom":"110px"}}>
                <div className="container"  >
                    <h2 className="text-center mb-5 text-black fw-bold">Additional VPS Hosting Services</h2>
                    <div className="row g-4">
                        {vpsHostingServices.map((section, idx) => (
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