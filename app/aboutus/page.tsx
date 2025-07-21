"use client"
import React from 'react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <>
      <div className="relative bg-[#FFF8F4] py-24 overflow-hidden">
        {/* Decorative blurred shapes */}
        <div className="absolute -top-32 -left-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-20 w-72 h-72 bg-[#FD5D07]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 items-center gap-12">
          {/* Left content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#FD5D07] via-[#FFB703] to-[#FD5D07] bg-clip-text text-transparent animate-gradient-x">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Experience unparalleled speed and reliability with our dedicated servers,
              designed for demanding workloads and global reach. Deploy in minutes with
              full root access.
            </p>
            <div className="inline-block relative group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FD5D07] to-[#FFB703] blur-xl opacity-60 transition-opacity group-hover:opacity-80 animate-pulse"></div>
              <Button
                size="lg"
                className="relative bg-[#FD5D07] hover:bg-[#FD5D07]/90 text-white px-8 py-4 rounded-full font-semibold shadow-xl transition-all"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="flex justify-center">
            <img
              src="/images/banner/breadcrumb-05.webp"
              alt="Dedicated Server Illustration"
              className="w-full max-w-md rounded-xl transition-transform hover:scale-105"
            />
          </div>
        </div>
      </div>

      <section className="rts-about-area pt-24">
        <div className="container">
          <div className="section-inner">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-7">
                <div className="about-image-area">
                  <img className="main-image" src="/images/about/about-01.webp" width="410" alt="" />
                  <img className="floating-image" src="/images/about/about-02.webp" width="310" alt="" />
                  <div className="counter-wrapper">
                    <h2 className="title-main"><span className="counter">15</span> <span>+</span></h2>
                    <p className="disc">
                      Year Experience
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="about-content-area">
                  <h2 className="text-4xl font-extrabold text-gray-900 mb-4 inline-block border-b-4 border-amber-500 pb-1">About Elitehost</h2>
                  <p className="desc pb-5">Since our founding in 2011, Elitehost has offered web hosting solutions that continually innovate new ways to deliver on our mission: empowering people to harness their brands online.</p>
                  <div className="about-feature-area">
                    <ul>
                      <li>
                        <div className="icon"><img src="/images/about/03.svg" alt="" /></div>
                        <div className="text">24/7 Guru Support</div>
                      </li>
                      <li>
                        <div className="icon"><img src="/images/about/04.svg" alt="" /></div>
                        <div className="text">Up To 20X Faster Turbo</div>
                      </li>
                    </ul>
                  </div>
                  <div className="feature-area-bottom">
                    <ul>
                      <li>Comprehensive tools for all</li>
                      <li>Research Hosting Providers</li>
                      <li>WordPress.org-recommended</li>
                      <li>Define Your Hosting Needs</li>
                      <li>Trusted by 2M users</li>
                      <li>Evaluate Features and Resources</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rts-journey-area section-padding pt-34">
        <div className="container">
          <div className="section-title-area">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 inline-block border-b-4 border-amber-500 pb-1">We empower entrepreneurs by providing the ideal support and resources
              for their journey.</h2>
            <p className="desc text-center pt-5">This is where people bring their ideas to life, develop a captivating brand and an impressive website, attract customers through digital and social marketing, and efficiently manage their work. When a tool alone is not enough, we offer direct one-on-one guidance with a personal touch.</p>
          </div>
          <div className="section-inner">
            <div className="image-area">
              <img src="/images/about/about-03.webp" width="410" alt="" />
              <img src="/images/about/about-04.webp" width="410" alt="" />
              <img src="/images/about/about-05.webp" width="410" alt="" />
            </div>
          </div>
          <div className="bottom-counter-area py-24">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4 ">
                <div className="counter-wrapper ">
                  <div className="icon flex justify-center md:block"><img src="/images/about/05.svg" width="100" alt="" /></div>
                  <div className="content">
                    <h2 className="title-main text-5xl font-bold flex justify-center md:justify-start"><span className="counter">2</span> <span>k</span></h2>
                    <p className="disc text-center md:text-left">
                      More than 2 thousand <br /> employees.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="counter-wrapper">
                  <div className="icon flex justify-center md:block"><img src="/images/about/06.svg" width="100" alt="" /></div>
                  <div className="content ">
                    <h2 className="title-main  text-5xl font-bold flex justify-center md:justify-start"><span className="counter">21</span> <span>m</span></h2>
                    <p className="disc text-center md:text-left">
                      We empower 21 million <br /> entrepreneurs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="counter-wrapper">
                  <div className="icon flex justify-center md:block"><img src="/images/about/05.svg" width="100" alt="" /></div>
                  <div className="content">
                    <h2 className="title-main  text-5xl font-bold flex justify-center md:justify-start"><span className="counter">85</span> <span>m</span></h2>
                    <p className="disc text-center md:text-left">
                      Our customers trust us with <br /> their 85 million domain names.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="rts-team-area py-24 body-bg-2">
        <div className="container">
          <div className="rts-section-title-area">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 pb-1 text-center">Part of our team</h2>
            <p className="desc w-450 pt-5">Over the last 19 years, Site Ground has grown to more than
              A considerable number of our people started working</p>
          </div>
          <div className="section-inner">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-4">
                <div className="team-wrapper">
                  <div className="image-area">
                    <img src="/images/team/team-01.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">Jhone Doe</h4>
                    <p className="desc">CEO</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="team-wrapper">
                  <div className="image-area">
                    <img src="/images/team/team-02.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">Peterson Jefer</h4>
                    <p className="desc">Marketing</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="team-wrapper">
                  <div className="image-area">
                    <img src="/images/team/team-03.jpg" alt="" />
                  </div>
                  <div className="content">
                    <h4 className="title">Machiel Anderson</h4>
                    <p className="desc">Digital Markter</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}