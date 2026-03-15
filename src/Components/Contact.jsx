import React, { useState } from "react";
import "./Contact.css";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzlJOc_rxLNBH7g6qJheC3wDX53o981f4Bnwh_kaVtKp2v11_CrIfS8gnfwW6tBph0/exec";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    place: "",
    email: "",
    phone: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Phone validation: only numbers & max 10 digits
    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.phone.length !== 10) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: JSON.stringify(form),
    });

    setLoading(false);
    setSuccess(true);

    setForm({
      name: "",
      place: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="contact-page">
      <div className="contact-box">

        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Mahimai Cabs & Tours</p>
          <ul>
            <li>+91 93617 02846</li>
            <li>mahimaicabs@gmail.com</li>
            <li>Madurai, Tamil Nadu</li>
            <li>24/7 Pickup & Drop</li>
            <li>Tour Packages</li>
          </ul>
        </div>

        <div className="contact-form">
          <h3>Send Message</h3>

          {success && (
            <p className="success-msg">
              Thank you, we will reach you shortly
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />

            <input
              name="place"
              value={form.place}
              onChange={handleChange}
              placeholder="Your Place"
              required
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email ID"
              required
            />

            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              maxLength="10"
              required
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
