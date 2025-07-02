"use client";

import React from "react";
import Image from "next/image";

const DataCenterSection = () => {
  const locations = [
    { id: "one", country: "Canada", flag: "/images/flag-01.svg" },
    { id: "two", country: "Germany", flag: "/images/flag-02.svg" },
    { id: "three", country: "Russia", flag: "/images/flag-03.svg" },
    { id: "four", country: "USA", flag: "/images/flag-04.svg" },
    { id: "five", country: "Egypt", flag: "/images/flag-05.svg" },
    { id: "six", country: "India", flag: "/images/flag-06.svg" },
    { id: "seven", country: "China", flag: "/images/flag-07.svg" },
    { id: "eight", country: "Brazil", flag: "/images/flag-08.svg" },
    { id: "nine", country: "South Africa", flag: "/images/flag-09.svg" },
    { id: "ten", country: "Australia", flag: "/images/flag-10.svg" },
  ];

  return (
    <div className="rts-data-center fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="rts-section w-790 text-center">
            <h3 className="rts-section__title">
              Data Centers All Around the World
            </h3>
            <p className="rts-section__description">
              Our web hosting, WordPress hosting, and cloud hosting plans offer server
              locations in: USA, Germany, Egypt, India, China, Brazil, Canada, Russia,
              Australia and South Africa.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="rts-data-center__location">
              <Image
                src="/images/data__center.png"
                alt="Data Center Map"
                width={1200}
                height={700}
                className="img-fluid"
              />
              <ul className="round-shape">
                {locations.map((loc) => (
                  <li className={loc.id} key={loc.id}>
                    <span
                      className="tooltip"
                      title={loc.country}
                      data-bs-toggle="tooltip"
                      data-bs-placement="bottom"
                      data-bs-custom-class="color-elitehost"
                    ></span>
                    <Image
                      src={loc.flag}
                      alt={loc.country}
                      width={32}
                      height={32}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCenterSection;
