"use client";
export default function LatestBlogUpdates() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001233] mb-12">
          Latest Updates & Insights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-[#f9fafb] rounded-xl p-6 shadow hover:shadow-xl transition">
            <h5 className="font-bold text-[#001233] mb-2">Scaling Your SaaS on VPS</h5>
            <p className="text-sm text-[#4C5671] mb-4">
              Learn how our VPS can handle large SaaS workloads and improve uptime.
            </p>
            <a href="#" className="text-[#FD5D07] font-medium hover:underline">Read More →</a>
          </div>
          <div className="bg-[#f9fafb] rounded-xl p-6 shadow hover:shadow-xl transition">
            <h5 className="font-bold text-[#001233] mb-2">Security Best Practices for VPS</h5>
            <p className="text-sm text-[#4C5671] mb-4">
              Discover practical ways to secure your VPS and protect customer data.
            </p>
            <a href="#" className="text-[#FD5D07] font-medium hover:underline">Read More →</a>
          </div>
          <div className="bg-[#f9fafb] rounded-xl p-6 shadow hover:shadow-xl transition">
            <h5 className="font-bold text-[#001233] mb-2">Comparing VPS vs Dedicated Servers</h5>
            <p className="text-sm text-[#4C5671] mb-4">
              Which one is right for your business? We break down costs and features.
            </p>
            <a href="#" className="text-[#FD5D07] font-medium hover:underline">Read More →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
