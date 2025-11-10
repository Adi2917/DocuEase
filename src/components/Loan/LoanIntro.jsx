import React from "react";
import "./LoanIntro.css";
import loanImg from "../../assets/loan.jpg

"; // apni image lagao

const LoanIntro = () => {
  return (
    <section className="loan-intro">

      {/* LEFT CONTENT */}
      <div className="loan-left">
        <h1 className="loan-title">
          Empower Your Dreams <span>With Our Loans</span>
        </h1>

        <p className="loan-desc">
          Get easy, reliable, and flexible loan solutions tailored to your needs. Whether
          it's for personal goals, business expansion, or emergencies, our loans are
          designed to provide support with transparency and speed. Let us help you
          achieve your financial aspirations effortlessly.
        </p>

        <button className="loan-btn">Apply Now</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="loan-right">
        <div className="loan-shape shape1"></div>
        <div className="loan-shape shape2"></div>
        <img src={loanImg} alt="Loan" className="loan-main-img" />
      </div>

    </section>
  );
};

export default LoanIntro;
