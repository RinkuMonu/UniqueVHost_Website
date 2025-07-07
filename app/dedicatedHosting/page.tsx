import AdditionalServices from '@/components/AdditionalServices';
import Plans from '@/components/Plans'
import React from 'react'
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
function Page() {

    const features = [
        {
            icon: "/images/feature/feature-01.svg",
            title: "Free WHM & cPanel",
            description: "We guarantee it you don't have to worry about it.",
        },
        {
            icon: "/images/feature/feature-02.svg",
            title: "Performance Optimized",
            description: "If your website is slow or down then you losing customers.",
        },
        {
            icon: "/images/feature/feature-03.svg",
            title: "Super Easy to Use",
            description: "Our custom control panel to use and removes the headache",
        },
        {
            icon: "/images/feature/feature-04.svg",
            title: "24/7 Expert Support",
            description: "Our custom control panel to use and removes the headache",
        },
    ];

    const serviceSections = [
        {
            title: "Security",
            items: [
                { id: "ddosProtection", label: "DDoS Protection (₹1000/month)" },
                { id: "sslCert", label: "SSL Certificate (₹500/year)" },
                { id: "firewall", label: "Firewall Management (₹1200/month)" },
            ],
        },
        {
            title: "Performance",
            items: [
                { id: "cdn", label: "CDN Integration (₹800/month)" },
                { id: "caching", label: "Caching Setup (₹700 one-time)" },
                { id: "monitoring", label: "Resource Monitoring (₹500/month)" },
            ],
        },
        {
            title: "Support",
            items: [
                { id: "prioritySupport", label: "24/7 Priority Support (₹1500/month)" },
                { id: "accountManager", label: "Dedicated Account Manager (₹2000/month)" },
                { id: "migration", label: "Site Migration Support (₹1000 one-time)" },
            ],
        },
        {
            title: "Add-ons",
            items: [
                { id: "ipAddress", label: "Extra IP Address (₹300/month)" },
                { id: "cpanel", label: "cPanel License (₹1200/month)" },
                { id: "backups", label: "Daily Backups (₹800/month)" },
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
                                    <h1 className="heading-title" >
                                        Dedicated Hosting
                                    </h1>
                                    <p className="desc">Control and flexibility when your business needs it</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="breadcrumb-image-area" style={{display:'flex', justifyContent:"center"}}>
                                    <img src="/images/banner/breadcrumb-04.webp" width="310" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-area">
                    <img src="/images/banner/breadcrumb-shape.svg" alt="" />
                </div>
            </div>

            <Plans />

            <section className="rts-feature section__padding">
                <div className="container">
                    <div className="row">
                        <div className="rts-section text-center">
                            <h2 className="rts-section__title">Why EliteHost</h2>
                        </div>
                    </div>
                    <div className="row gy-30">
                        {features.map((item, index) => (
                            <div className="col-xl-3 col-lg-6 col-md-6" key={index}>
                                <div className="single__feature">
                                    <div className="single__feature--box">
                                        <div className="single__feature--box-icon">
                                            <img src={item.icon} alt={item.title} />
                                        </div>
                                        <h5 className="single__feature--box-title">{item.title}</h5>
                                        <p className="single__feature--box-description">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

           <AdditionalServices />


        </>
    )
}

export default Page
