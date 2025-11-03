import React, { useEffect, useState } from "react";
import "./TrustSection.css";

const TrustSection = () => {
  const [users, setUsers] = useState(0);
  const [documents, setDocuments] = useState(0);
  const [accuracy, setAccuracy] = useState(0);

  // Simple number counter animation
  useEffect(() => {
    let userCount = 0, docCount = 0, accCount = 0;
    const interval = setInterval(() => {
      if (userCount < 5000) {
        userCount += 50;
        setUsers(userCount);
      }
      if (docCount < 12000) {
        docCount += 100;
        setDocuments(docCount);
      }
      if (accCount < 99) {
        accCount += 1;
        setAccuracy(accCount);
      }
      if (userCount >= 5000 && docCount >= 12000 && accCount >= 99) {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trust-section">
      <h2 className="trust-heading">Why People Trust <span>DocuEase</span></h2>
      <p className="trust-subtext">
        We’ve earned the trust of thousands by making documentation simple, secure, and stress-free.
      </p>

      <div className="trust-stats">
        <div className="trust-card">
          <h3>{users.toLocaleString()}+</h3>
          <p>Happy Users</p>
        </div>

        <div className="trust-card">
          <h3>{documents.toLocaleString()}+</h3>
          <p>Documents Processed</p>
        </div>

        <div className="trust-card">
          <h3>{accuracy}%</h3>
          <p>Service Accuracy</p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
