import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ContactIntro from "../components/Contact/ContactIntro";
import ContactForm from "../components/Contact/ContactForm";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <section style={{ padding: "80px 20px", textAlign: "center" }}>
        <h1>Contact Us</h1>
        <p style={{ maxWidth: "700px", margin: "20px auto", lineHeight: "1.6" }}>
          Have questions or want to join our platform?  
          Feel free to reach out to us anytime.
        </p>
        <div style={{ marginTop: "30px" }}>
          <a
            href="mailto:contact@docsservice.com"
            style={{
              background: "#007bff",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Send Email
          </a>
          <br />
          <a
            href="https://wa.me/9570197579"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "15px",
              background: "#25D366",
              color: "white",
              padding: "10px 20px",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "600",
            }}
          >
            Chat on WhatsApp
          </a>
        </div>

        <ContactIntro />
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
