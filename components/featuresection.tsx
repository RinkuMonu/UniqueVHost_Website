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
const FeatureSection = () => {
  const features = [
    {
      icon: "/images/feature/feature-01.svg",
      title: "Free WHM & cPanel",
      desc: "We guarantee it you don't have to worry about it.",
    },
    {
      icon: "/images/feature/feature-02.svg",
      title: "Performance Optimized",
      desc: "If your website is slow or down then you losing customers.",
    },
    {
      icon: "/images/feature/feature-03.svg",
      title: "Super Easy to Use",
      desc: "Our custom control panel to use and removes the headache.",
    },
    {
      icon: "/images/feature/feature-04.svg",
      title: "24/7 Expert Support",
      desc: "Our custom control panel to use and removes the headache.",
    },
  ];

  return (
    <section className="rts-feature section__padding">
      <div className="container">
        <div className="row gy-30">
          {features.map((feature, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="single__feature">
                <div className="single__feature--box">
                  <div className="single__feature--box-icon">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h5 className="single__feature--box-title">
                    {feature.title}
                  </h5>
                  <p className="single__feature--box-description">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
