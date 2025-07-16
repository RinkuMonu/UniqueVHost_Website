"use client"
import Image from 'next/image';
import Plans from '@/components/Plans';
import AdditionalServices from '@/components/AdditionalServices';
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

const Page = () => {
  const dedicatedFeatures = [
    {
      title: "Free migration",
      description: "Move to our cloud easily with expert-assisted migration support.",
      icon: "/images/hosting/15.svg",
    },
    {
      title: "Flexible management",
      description: "Full root access and easy control through an intuitive dashboard.",
      icon: "/images/hosting/16.svg",
    },
    {
      title: "Airtight security",
      description: "Advanced firewall, DDoS protection, and continuous threat monitoring.",
      icon: "/images/hosting/17.svg",
    },
    {
      title: "Optimized network",
      description: "Global CDN, ultra-low latency, and enterprise-grade network backbone.",
      icon: "/images/hosting/18.svg",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#f8f9fa] py-24">
        <div className="absolute -top-0 -left-32 w-80 h-80 bg-[#FD5D07]/10 rounded-full"></div>
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#FD5D07]/10 rounded-full"></div>

        <div className="container mx-auto px-4 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="flex-1 text-left lg:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#001233] leading-tight">
              Next-Gen Cloud Hosting for Ultimate Performance
            </h1>
            <p className="text-lg text-[#4C5671] mb-8">
              Flexible, scalable, and secure cloud solutions tailored to empower your business growth worldwide.
            </p>
            <a
              href="#"
              className="inline-block px-8 py-3 bg-[#FD5D07] text-white font-semibold rounded-full shadow-lg hover:bg-[#e15400] transition"
            >
              Get Started Today
            </a>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/banner/breadcrumb-04.webp"
              width={380}
              height={480}
              alt="Cloud Hosting Illustration"
              className="rounded-xl "
            />
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <Plans sharedHosting={"cloudHosting"} />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001233]">Key Cloud Hosting Features</h2>
            <p className="text-[#4C5671] max-w-2xl mx-auto mt-4">
              Empower your websites and apps with top-tier features designed for speed, security, and scalability.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dedicatedFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-[#f9fafb] p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 flex justify-center">
                  <img src={feature.icon} alt={feature.title} className="w-14 h-14" />
                </div>
                <h5 className="font-semibold text-[#001233] mb-2 text-lg">{feature.title}</h5>
                <p className="text-sm text-[#4C5671]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <AdditionalServices />
    </>
  );
};

export default Page;
