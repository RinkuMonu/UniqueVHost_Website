import Image from "next/image";

export default function EliteHostFeatureArea() {
  return (
    <section className="relative bg-gradient-to-b from-amber-50 via-white to-amber-50 py-24 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-amber-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 -right-20 w-72 h-72 bg-amber-200 rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block border-b-4 border-amber-500 pb-2">
            Why you Will love hosting with Elitehost
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Enjoy blazing-fast performance, industry-leading security, and support you can always count on — all at an affordable price.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "/images/service/01.svg",
              title: "No Limits",
              desc: "Get great hosting quality without sacrificing affordability.",
            },
            {
              icon: "/images/service/02.svg",
              title: "Affordability",
              desc: "Unlimited storage and scalable bandwidth to grow with you.",
            },
            {
              icon: "/images/service/03.svg",
              title: "Free Domain",
              desc: "Claim a free domain when you sign up with a promo code.",
            },
            {
              icon: "/images/service/04.svg",
              title: "Drag & Drop",
              desc: "Easily build your site with our intuitive drag-and-drop tools.",
            },
            {
              icon: "/images/service/05.svg",
              title: "99% Uptime",
              desc: "Dependable performance ensures your site is always up.",
            },
            {
              icon: "/images/service/01.svg",
              title: "Security & Reliability",
              desc: "Advanced protection and optimized resources for peace of mind.",
            },
            {
              icon: "/images/service/01.svg",
              title: "Safe & Secure",
              desc: "Industry-leading security to keep your site safe.",
            },
            {
              icon: "/images/service/06.svg",
              title: "24/7 Support",
              desc: "Expert assistance anytime you need it.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 mb-5 rounded-full bg-gradient-to-r from-orange-200 to-pink-100 flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110">
                <Image src={item.icon} alt={item.title} width={30} height={30} />
              </div>
              <h6 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h6>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
