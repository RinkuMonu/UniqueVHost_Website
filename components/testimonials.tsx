"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      content: "I am using Digital Ocean Plan in Cloudways and I can confirm it is very good. Also, the backup with my hosting is awesome too.",
      authorImg: "/images/testimonials/author.png",
      name: "Jamie Knop",
      role: "Business Owner",
    },
    {
      content: "I started my own web hosting business with their reseller hosting plan, and it's been a great decision. The resources are ample, the management tools are easy to use.",
      authorImg: "/images/testimonials/author-2.png",
      name: "Jahed Khan",
      role: "Business Owner",
    },
    {
      content: "I've been using their web hosting services for over a year now, and I couldn't be happier. The uptime is fantastic, and the customer support team is always quick.",
      authorImg: "/images/testimonials/author-3.png",
      name: "Samira Khan",
      role: "Digital Marketer",
    },
    {
      content: "I've been using their web hosting services for over a year now, and I couldn't be happier. The uptime is fantastic, and the customer support team is always quick.",
      authorImg: "/images/testimonials/author.png",
      name: "Jamie Knop",
      role: "Business Owner",
    },
  ];

  return (
    <section className="rts-testimonial area-2 section__padding">
      <div className="container">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="rts-section w-460 text-center">
              <h2 className="rts-section__title">Our Client Feedback</h2>
              <p className="rts-section__description">
                We’re honored and humbled by the great feedback we receive from our customers on a daily basis.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Swiper
              modules={[Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              pagination={{ clickable: true }}
              loop={true}
              className="rts-testimonial__slider testimonial__slider--second"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <div className="rts-testimonial__single2">
                    <div className="quote-icon">
                      <Image
                        src="/images/testimonials/quote.svg"
                        alt="Quote Icon"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div className="content">
                      <p>{testimonial.content}</p>
                    </div>
                    <div className="author__meta">
                      <div className="author__meta--image">
                        <Image
                          src={testimonial.authorImg}
                          alt={testimonial.name}
                          width={60}
                          height={60}
                        />
                      </div>
                      <div className="author__meta--details">
                        <a href="#">{testimonial.name}</a>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
