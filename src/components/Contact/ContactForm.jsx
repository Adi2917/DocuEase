import React, { useState } from "react";
import "./ContactForm.css";

const ContactIntro = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    email: "",
    service: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "number") {
      const onlyDigits = value.replace(/\D/g, "");
      if (onlyDigits.length <= 10) {
        setFormData({ ...formData, [name]: onlyDigits });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.number.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/xzzkwlkw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Form submitted successfully! ✅");
        // Form reset
        setFormData({ name: "", number: "", email: "", service: "", comment: "" });
        // Page reload after OK
        window.location.reload();
      } else {
        alert("Oops! Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting the form. Try again later.");
    }
  };

  return (
    <div className="contact-container">
      {/* Left Side: Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="number"
            placeholder="Your Mobile Number"
            value={formData.number}
            onChange={handleChange}
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit number"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Gmail"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="service"
            placeholder="What Service You Want?"
            value={formData.service}
            onChange={handleChange}
            required
          />
          <textarea
            name="comment"
            placeholder="Your Comment"
            value={formData.comment}
            onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Right Side: Paragraph */}
      <div className="contact-info">
        <h2>We are here to help you</h2>
        <p>
          At <strong>Creators</strong>, we simplify all your document-related and business service needs.
          From Ads Creation to Loan Assistance, our goal is to make every process fast, clear, and stress-free. 
          Our team ensures professional guidance, trusted support, and timely solutions so you can focus on your goals.
          Reach out to us anytime — we are just a message away to assist you efficiently and reliably.
        </p>
      </div>
    </div>
  );
};

export default ContactIntro;
