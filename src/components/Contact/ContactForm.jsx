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
      // Formspree URL yahan daal
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
        setFormData({ name: "", number: "", email: "", service: "", comment: "" });
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
          We understand that dealing with documentation and government processes can feel complicated —
          but that’s where we come in. <strong>DocuEase</strong> is here to make things simple, clear, and
          stress-free. Our mission is to empower you by taking care of every detail with honesty and
          precision. You can count on us to be responsive, supportive, and always just a message away
          when you need help.
        </p>
      </div>
    </div>
  );
};

export default ContactIntro;
