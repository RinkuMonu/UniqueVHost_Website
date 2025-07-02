"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const ServiceSection = () => {
  const services = [
    {
      icon: "/images/service/shared__hosting.svg",
      title: "Shared Hosting",
      desc: "The most popular hosting plan and comes at one of the most.",
      link: "#",
    },
    {
      icon: "/images/service/wordpress__hosting.svg",
      title: "WordPress Hosting",
      desc: "WordPress Hosting gives you speed and performance with a full.",
      link: "#",
    },
    {
      icon: "/images/service/cloud__hosting.svg",
      title: "Cloud Hosting",
      desc: "Earn additional revenue or support your customers with easy-to-use.",
      link: "#",
    },
    {
      icon: "/images/service/reseller__hosting.svg",
      title: "Reseller Hosting",
      desc: "Reseller hosting is a form of web hosting where the account.",
      link: "#",
    },
  ];

  return (
    <section className="rts-service section__padding body-bg-2 pb--120">
      <div className="container">
        <div className="row">
          <div className="rts-section text-center">
            <h2 className="rts-section__title">Experience Our Exceptional Services</h2>
          </div>
        </div>
        <div className="row g-5">
          {services.map((service, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="single__service">
                <div className="single__service--box">
                  <div className="single__service--box-icon">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={60}
                      height={60}
                    />
                  </div>
                  <h5 className="single__service--box-title">
                    {service.title}
                  </h5>
                  <p className="single__service--box-description">
                    {service.desc}
                  </p>
                  <div className="single__service--box-button">
                    <Link href={service.link} className="rts-btn">
                      Get a Quote <i className="fa-regular fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
