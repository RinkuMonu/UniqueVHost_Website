"use client";
import React from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Newsletter from "@/components/newsletter";
import Swal from "sweetalert2";
import axiosInstance from "../AxiosInstance/axiosInstance";

function Page() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    description: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type } = target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token"); // or replace with actual method to get token

      const response = await axiosInstance.post(
        "/tickets",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          description: formData.description,
          consent: formData.consent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status == 201) {
        Swal.fire(
          "Success",
          "Your message has been sent successfully!",
          "success"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          country: "",
          description: "",
          consent: false,
        });
      }
    } catch (error) {
      const errMsg =
        error instanceof Error ? error.message : "Something went wrong";
      Swal.fire("Error", errMsg, "error");
    }
  };

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
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-[#313149] max-w-xl mb-8">
              Experience unparalleled speed and reliability with our dedicated
              servers, designed for demanding workloads and global reach. Deploy
              in minutes with full root access.
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

      <section className="rts-contact-form no-bg pt-24">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 pb-24 justify-content-sm-center">
            {/* Address */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-contact-method">
                <div className="method">
                  <div className="icon">
                    <MapPin className="text-2xl" />
                  </div>
                  <div className="content w-220">
                    <h5 className="info mb-0">
                      123 Main Street, New York, AV 10013
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-contact-method">
                <div className="method">
                  <div className="icon">
                    <Mail className="text-2xl" />
                  </div>
                  <div className="content w-220">
                    <h5 className="info mb-0">
                      <a href="mailto:info@elitehost.com">info@elitehost.com</a>{" "}
                      <br />
                      <a href="mailto:support@elitehost.com">
                        support@elitehost.com
                      </a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-contact-method">
                <div className="method">
                  <div className="icon">
                    <Phone className="text-2xl" />
                  </div>
                  <div className="content w-220">
                    <h5 className="info mb-0">
                      <a href="tel:5551234567">(555) 123-4567</a> <br />
                      <a href="tel:11112542174">(111) 125-42174</a>
                    </h5>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3">
              <div className="single-contact-method">
                <div className="method">
                  <div className="icon">
                    <Clock className="text-2xl" />
                  </div>
                  <div className="content w-220">
                    <h5 className="info mb-0">
                      Mon-Fri: 9 AM – 6 PM
                      <br />
                      Saturday: 9 AM – 4 PM
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6  justify-content-center pb-24">
            {/* Map */}
            <div className="col-span-12 md:col-span-6">
              <div className="rts-contact-map-area">
                <div className="contact-map-area-fluid mx-auto">
                  <h5>Office Map</h5>
                  <div className="contact-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14602.288851207937!2d90.47855065!3d23.798243149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1663151706353!5m2!1sen!2sbd"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-12 md:col-span-6">
              <div className="form">
                <h5>Send a message</h5>
                <form className="form__content" onSubmit={handleSubmit}>
                  <div className="form__control">
                    <input
                      type="text"
                      className="input-form"
                      name="name"
                      placeholder="what is your name?"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <input
                      type="email"
                      className="input-form"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form__control">
                    <input
                      type="text"
                      className="input-form"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    <select
                      name="country"
                      className="input-form"
                      value={formData.country}
                      onChange={handleChange}
                    >
                      <option value="1">Select a Country</option>
                      <option value="USA">USA</option>
                      <option value="Canada">Canada</option>
                      <option value="UK">UK</option>
                      <option value="Russia">Russia</option>
                      <option value="France">France</option>
                    </select>
                  </div>

                  <textarea
                    name="description"
                    cols={30}
                    rows={10}
                    placeholder="A brief description about your consultation"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="flex items-start gap-2 mt-4">
                    <input
                      type="checkbox"
                      name="consent"
                      className="mt-1"
                      checked={formData.consent}
                      onChange={handleChange}
                    />
                    <label htmlFor="checkbox" className="text-sm">
                      By submitting your information you provide written consent
                      to elitehost and its family of brands contacting you.
                    </label>
                  </div>
                  <button type="submit" className="submit__btn mt-6">
                    Submit Now
                  </button>
                </form>
                <div id="form-messages"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}

export default Page;
