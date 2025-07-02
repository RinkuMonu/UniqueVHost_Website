"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e : any) => {
    e.preventDefault();
    // 👉 Replace this with your API call or logic
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <div className="rts-newsletter">
      <div className="container">
        <div className="row">
          <div className="rts-newsletter__box">
            <div className="rts-newsletter__box--content">
              <h3 className="title">Sign up for web hosting today!</h3>
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e : any) => setEmail(e.target.value)}
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
