"use client"; 
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

import { useState } from "react";

export default function HeroBanner() {
  const [tab, setTab] = useState("register");

  return (
    <div className="rts-hero hero__banner wp__banner banner__background-4">
      <div className="rts-hero__video">
        <video
          loop
          muted
          autoPlay
          src="/images/video/hosting.mp4"
          className="appl1-hdvd-xx"
        ></video>
      </div>
      <div className="container">
        <div className="row">
          <div
            className="hero__banner__wrapper d-flex flex-wrap flex-lg-nowrap gap-5 gap-lg-0 
                align-items-center justify-content-between px-5 px-lg-0"
          >
            {/* banner content */}
            <div className="hero__banner__content content-5">
              <h6 className="mb-0">Up to 75% off Web Hosting</h6>
              <h1 className="heading">Powerful Web Hosting Solutions</h1>
              <p className="price-area">
                From <span>$3.99</span>/mo. Regular $17.99/mo. excl. VAT
              </p>
              <div className="domain__options">
                <div className="domain__form">
                  <div id="nav-tabcontent" className="tab-content">
                    <div
                      id="register"
                      className={`tab-pane fade ${
                        tab === "register" ? "active show" : ""
                      }`}
                      role="tabpanel"
                    >
                      <form action="#" className="domain__search d-flex">
                        <input type="text" placeholder="Enter domain name" required />
                        <select name="r" id="r">
                          <option value=".com">.com</option>
                          <option value=".net">.net</option>
                          <option value=".love">.love</option>
                          <option value=".pw">.pw</option>
                          <option value=".org">.org</option>
                          <option value=".info">.info</option>
                          <option value=".xyz">.xyz</option>
                        </select>
                        <button type="submit" className="btn__primary">Search</button>
                      </form>
                    </div>

                    <div
                      id="transfer"
                      className={`tab-pane fade ${
                        tab === "transfer" ? "active show" : ""
                      }`}
                      role="tabpanel"
                    >
                      <form action="#" className="domain__search d-flex">
                        <input type="text" placeholder="Enter domain name" required />
                        <select name="t" id="t">
                          <option value=".com">.com</option>
                          <option value=".net">.net</option>
                          <option value=".love">.love</option>
                          <option value=".pw">.pw</option>
                          <option value=".org">.org</option>
                          <option value=".info">.info</option>
                          <option value=".xyz">.xyz</option>
                        </select>
                        <button type="submit" className="btn__primary">Transfer</button>
                      </form>
                    </div>
                  </div>
                  <div className="d-flex gap-3 mt-3">
                    <button
                      type="button"
                      onClick={() => setTab("register")}
                      className={`btn__two ${tab === "register" ? "active" : ""}`}
                    >
                      Register
                    </button>
                    <button
                      type="button"
                      onClick={() => setTab("transfer")}
                      className={`btn__two ${tab === "transfer" ? "active" : ""}`}
                    >
                      Transfer
                    </button>
                  </div>
                </div>

                <div className="domain__list d-flex gap-5 mt-4">
                  <div className="single__domain d-flex gap-1">
                    <strong>.com</strong>
                    <span>only $6.19</span>
                  </div>
                  <div className="single__domain d-flex gap-1">
                    <strong>.org</strong>
                    <span>only $5.19</span>
                  </div>
                  <div className="single__domain d-flex gap-1">
                    <strong>.xyz</strong>
                    <span>only $1</span>
                  </div>
                </div>
              </div>
            </div>
            {/* banner content end */}
          </div>
        </div>
      </div>
    </div>
  );
}
