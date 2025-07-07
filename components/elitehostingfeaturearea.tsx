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
export default function EliteHostFeatureArea() {
  return (
    <section className="rts-service area-2 body-bg-2 section__padding">
      <div className="container">
        <div className="row">
          <div className="rts-section text-center">
            <h2 className="rts-section__title">Here's why you'll love hosting with Elitehost</h2>
          </div>
        </div>
        <div className="service-inner">
          <ul>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/01.svg" alt="No Limits" width={60} height={60} />
                <h6>No Limits</h6>
              </div>
              <p className="desc">You don't have to sacrifice quality to get great hosting at a low cost.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/02.svg" alt="Affordability" width={60} height={60} />
                <h6>Affordability</h6>
              </div>
              <p className="desc">Get unlimited storage and scalable bandwidth.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/03.svg" alt="Free Domain" width={60} height={60} />
                <h6>Free Domain</h6>
              </div>
              <p className="desc">Get your domain for free when you use the promo code.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/04.svg" alt="Drag & Drop Capability" width={60} height={60} />
                <h6>Drag & Drop Capability</h6>
              </div>
              <p className="desc">Our easy-to-use drag-and-drop website builder is automatically included.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/05.svg" alt="99% Uptime Guarantee" width={60} height={60} />
                <h6>99% Uptime Guarantee</h6>
              </div>
              <p className="desc">Reliability you can count on, so your site will be up and running.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/01.svg" alt="Reliability & Security" width={60} height={60} />
                <h6>Reliability & Security</h6>
              </div>
              <p className="desc">Get unlimited storage and scalable bandwidth.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/01.svg" alt="Safe & Secure" width={60} height={60} />
                <h6>Safe & Secure</h6>
              </div>
              <p className="desc">Get unlimited storage and scalable bandwidth.</p>
            </li>
            <li className="service-wrapper">
              <div className="icon-area">
                <Image src="/images/service/06.svg" alt="24/7 Expert Support" width={60} height={60} />
                <h6>24/7 Expert Support</h6>
              </div>
              <p className="desc">Encrypt data with an automatic SSL plan and access even more security tools.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
