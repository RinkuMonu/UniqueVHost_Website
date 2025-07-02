"use client";
import Image from "next/image";

export default function HostingFeatureArea() {
  return (
    <div className="rts-hosting-feature-area area-3 body-bg-2 section__padding">
      <div className="container">
        <div className="section-inner">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="left-side-image">
                <Image
                  src="/images/feature/feature-hero-09.webp"
                  alt="Hosting Feature"
                  width={630}
                  height={500}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-side-content">
                <div className="section-title-area text-start">
                  <h2 className="section-title">Unmatched Website Performance</h2>
                  <p className="desc">
                    Finding and purchasing the perfect domain name is the first step to establishing a successful online presence. With our comprehensive domain registration.
                  </p>
                </div>
                <ul className="feature-list">
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/pricing/09.svg"
                        alt="Easy Domain Search"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text">
                      <h5 className="title">Easy Domain Search</h5>
                      <p>Find the perfect domain name with various extensions (.com, .net, .org, etc.).</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/pricing/10.svg"
                        alt="Competitive Pricing"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text">
                      <h5 className="title">Competitive Pricing</h5>
                      <p>Enjoy affordable domain registration fees.</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <Image
                        src="/images/pricing/09.svg"
                        alt="24/7 Customer Support"
                        width={50}
                        height={50}
                      />
                    </div>
                    <div className="text">
                      <h5 className="title">24/7 Customer Support</h5>
                      <p>Get assistance anytime with our round-the-clock support team.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
