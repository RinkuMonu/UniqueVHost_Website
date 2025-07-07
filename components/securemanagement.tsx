import Image from 'next/image';
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

export default function SecureManagementFeatures() {
  return (
    <div className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left image */}
          <div className="flex justify-center">
            <Image
              src="/images/feature/feature-hero-08.webp"
              alt="Feature Hero"
              width={574}
              height={574}
              className="rounded-xl "
            />
          </div>

          {/* Right content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b-4 border-amber-500 inline-block pb-1">
              Secure Remote Management Protocols
            </h2>

            {[
              {
                icon: "/images/feature/feature-05.svg",
                title: "SSL Certificates",
                desc: "Encrypt data and build trust with industry-standard SSL certificates.",
              },
              {
                icon: "/images/feature/feature-06.svg",
                title: "DDoS Protection",
                desc: "Stay online and secure with advanced DDoS mitigation tools.",
              },
              {
                icon: "/images/feature/feature-07.svg",
                title: "Two-Factor Authentication",
                desc: "Add an extra layer of security with 2FA for all critical logins.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start bg-white rounded-xl p-5 mb-5 border border-gray-100 shadow-sm hover:shadow-lg transition"
              >
                <div className="w-14 h-14 flex-shrink-0 rounded-full bg-gradient-to-r flex items-center justify-center shadow-lg mr-4">
                  <Image src={item.icon} alt={item.title} width={30} height={30} />
                </div>
                <div>
                  <h6 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h6>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
