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


const hostingFeatures = [
  {
    icon: '/images/hosting/07.svg',
    title: 'All the Essentials',
    desc: 'Manage everything from one single dashboard (cPanel).',
    link: '/shared-hosting',
  },
  {
    icon: '/images/hosting/08.svg',
    title: 'WHM Control',
    desc: 'Create and modify your clients’ hosting accounts with Web Host.',
    link: '/wordpress-hosting',
  },
  {
    icon: '/images/hosting/09.svg',
    title: 'Account Management Tools',
    desc: 'Whether you want to set up client invoices or brand the existing.',
    link: '/cloud-hosting',
  },
  {
    icon: '/images/hosting/10.svg',
    title: 'State-of-Art Technology',
    desc: 'Deliver fast, reliable, and secure hosting to your clients, thanks.',
    link: '/reseller-hosting',
  },
];



  const resellerHostingServices = [
  {
    title: "Branding",
    items: [
      { id: "whiteLabel", label: "White-label Branding (Included)" },
      { id: "customLogo", label: "Custom Logo Integration (₹500 one-time)" },
      { id: "clientPanel", label: "Branded Client Panel (₹800/month)" },
    ],
  },
  {
    title: "Resource Management",
    items: [
      { id: "whmAccess", label: "WHM Access (Free)" },
      { id: "accountLimits", label: "Account Limit Control (Free)" },
      { id: "autoSuspend", label: "Auto Suspend Inactive Clients (₹300/month)" },
    ],
  },
  {
    title: "Support & Tools",
    items: [
      { id: "billingSoftware", label: "Billing Software Integration (₹1000/month)" },
      { id: "ticketSystem", label: "Client Ticket System (₹700/month)" },
      { id: "priorityResellerSupport", label: "Priority Reseller Support (₹1200/month)" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { id: "extraCpanel", label: "Additional cPanel License (₹100/month/client)" },
      { id: "emailMarketing", label: "Email Marketing Tool (₹600/month)" },
      { id: "dailyResellerBackup", label: "Automated Daily Backups (₹900/month)" },
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
                <h1 className="heading-title">
                  Reseller Hosting
                </h1>
                <p className="desc">The quality you need with all the potential to earn</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="breadcrumb-image-area"
                  style={{display:"flex", justifyContent:"center"}}
              
              >
                <Image
                  src="/images/banner/breadcrumb-03.webp"
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

    <div className="rts-hosting-type pb--120">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row justify-content-center">
              <div className="section-title-area text-center">
                <h2 className="section-title">Reseller Hosting Feature</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt--60">
          <div className="col-lg-12">
            <div className="rts-hosting-inner">
              <div className="row g-5">
                {hostingFeatures.map((feature, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className="rts-hosting-type__single area-2">
                      <div className="hosting-icon">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={60}
                          height={60}
                        />
                      </div>
                      <Link href={feature.link} className="title">
                        {feature.title}
                      </Link>
                      <p className="excerpt">{feature.desc}</p>
                      <Link href={feature.link} className="primary__btn border__btn">
                        View Details <i className="fa-regular fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


<AdditionalServices />
  </>
  );
};

export default Page;