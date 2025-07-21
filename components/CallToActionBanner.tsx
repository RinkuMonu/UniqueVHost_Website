"use client";
export default function CallToActionBanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FD5D07] to-[#FFB703] text-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to supercharge your business?
        </h2>
        <p className="text-lg mb-8">
          Deploy your powerful VPS server today and get up to 30% off on your first year!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-white text-[#FD5D07] font-semibold rounded-full shadow-lg hover:bg-[#f2f2f2] transition"
        >
          Get Started Now
        </a>
      </div>
    </section>
  );
}
