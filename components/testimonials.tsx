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
      authorImg: "/images/testimonials/author-3.png",
      name: "Samira Khan",
      role: "Digital Marketer",
    },
    {
      content: "I've been using their web hosting services for over a year now, and I couldn't be happier. The uptime is fantastic, and the customer support team is always quick.",
      authorImg: "/images/testimonials/author-3.png",
      name: "Samira Khan",
      role: "Digital Marketer",
    },
    {
      content: "I've been using their web hosting services for over a year now, and I couldn't be happier. The uptime is fantastic, and the customer support team is always quick.",
      authorImg: "/images/testimonials/author-3.png",
      name: "Samira Khan",
      role: "Digital Marketer",
    },
    {
      content: "I've been using their web hosting services for over a year now, and I couldn't be happier. The uptime is fantastic, and the customer support team is always quick.",
      authorImg: "/images/testimonials/author-3.png",
      name: "Samira Khan",
      role: "Digital Marketer",
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-amber-50 via-white to-amber-100 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-amber-300 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-96 h-96 bg-amber-400 opacity-20 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Client Feedback</h2>
          <p className="text-gray-600 text-lg">
            We’re honored and humbled by the great feedback we receive from our customers every day.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          loop={true}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white/40 backdrop-blur-xl border border-white/20 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 h-full flex flex-col">
                <p className="text-gray-800 italic mb-6">"{t.content}"</p>
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500 mr-4">
                    <Image src={t.authorImg} alt={t.name} width={48} height={48} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
