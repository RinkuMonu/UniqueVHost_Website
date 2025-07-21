"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import "@/app/styles/style.css";
import "@/app/styles/plug.css";
import "@/app/styles/bootstrap.css";
import "@/app/styles/animation.css";
import "@/app/styles/header.css";
import "@/app/styles/nav.css";
import "@/app/styles/forms.css";
import "@/app/styles/mobile.css"; 
import "@/app/styles/site-elements.css";
import "@/app/styles/reset.css";
import "@/app/styles/typography.css";

export default function Newsletter() {
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="rts-newsletter mt-10">
      <div className="container">
        <div className="row">
          <div className="rts-newsletter__box">
            <div className="rts-newsletter__box--content">
              <h3 className="text-5xl font-medium mb-10">Sign up for web hosting today!</h3>
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={handleChange}
                  className="w-full"
                />
                <button type="submit" className="btn__two secondary__bg secondary__color">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
