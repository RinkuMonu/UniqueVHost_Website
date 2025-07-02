import Plans from '@/components/Plans'
import React from 'react'

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

const wordpressHostingServices = [
  {
    title: "Security",
    items: [
      { id: "wpMalwareScan", label: "Malware Scanning for WP (₹600/month)" },
      { id: "wpFirewall", label: "WordPress Firewall (₹800/month)" },
      { id: "wpLoginGuard", label: "Login Protection & CAPTCHA (₹300/month)" },
    ],
  },
  {
    title: "Performance",
    items: [
      { id: "wpCache", label: "Advanced Caching (₹700/month)" },
      { id: "imageCDN", label: "Image CDN + Compression (₹500/month)" },
      { id: "lazyLoad", label: "Lazy Load Images (Free)" },
    ],
  },
  {
    title: "Support",
    items: [
      { id: "wpExpert", label: "WordPress Expert Help (₹1000/month)" },
      { id: "themeSupport", label: "Theme Installation Help (₹400 one-time)" },
      { id: "pluginHelp", label: "Plugin Troubleshooting (₹600/month)" },
    ],
  },
  {
    title: "Add-ons",
    items: [
      { id: "autoUpdate", label: "Auto Update Plugins & Themes (₹300/month)" },
      { id: "stagingSite", label: "Staging Environment (₹900/month)" },
      { id: "dailyBackupWP", label: "Daily Cloud Backups (₹700/month)" },
    ],
  },
];


  return (
    <>
        <div className="rts-breadcrumb-area body-bg-2">
      <div className="container">
        <div className="breadcrumb-inner">
          <div className="row align-items-center">
            <div className="col-lg-7 order-change">
              <div className="breadcrumb-content">
                <h1 className="heading-title" style={{ maxWidth: "696px" }}>
                  Unbeatable WordPress Hosting: Power & Speed
                </h1>
                <p className="desc">
                  Unlock the full potential of your WordPress website with our unbeatable hosting plans!
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="breadcrumb-image-area">
                <img src="/images/banner/breadcrumb-02.webp" width="373" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breadcrumb-shape-area">
        <img src="/images/banner/breadcrumb-shape.svg" alt="" />
      </div>
    </div>

    <Plans/>

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



 <section className=" bg-light" style={{"paddingTop":"110px" , "paddingBottom":"110px"}}>
                <div className="container">
                    <h2 className="text-center mb-5 text-black fw-bold">Additional WordPress Hosting Services</h2>
                    <div className="row g-4">
                        {wordpressHostingServices.map((section, idx) => (
                            <div className="col-md-3" key={idx}>
                                <div className="bg-white  border-4 rounded-3 shadow-md p-4 h-100" style={{"borderLeft":"2px solid #fd5d07"}}>
                                    <h5 className="fw-bold mb-4 fs-4  text-uppercase ">{section.title}</h5>
                                    {section.items.map((item) => (
                                        <div className="form-check mb-2" key={item.id}>
                                            <input
                                                className="form-check-input border border-dark bg-transparent shadow-none"
                                                type="checkbox"
                                                id={item.id}
                                            />
                                            <label className="form-check-label " htmlFor={item.id}>
                                               <p className='fs-5'> {item.label}</p>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                  <div className="d-flex justify-content-center mt-5 ">
                              <a href="#" className='get-started-btn px-4'>Buy Now</a>
                            </div>
            </section>

    </>
  )
}

export default Page
