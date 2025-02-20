// src/pages/ThankYouPage.js
import React from "react";
import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="thank-you">
      <h1>Thank You!</h1>
      <p>Your purchase has been completed successfully.</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default ThankYouPage;
