import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignUpPage.css";

function SignUpPage() {
  const navigate = useNavigate(); // Initialize the navigate hook

  // Button click handler
  const handleSignUpClick = () => {
    // Navigate to the Leaderboard page
    navigate("/leaderboard");
  };

  return (
    <div className="signup-page">
      <div className="logo">
        <img src="/Logo.png" alt="Logo" />
      </div>
      <h1>CVV Token is a digital asset and equity share</h1>
      <button className="signup-button" onClick={handleSignUpClick}>
        Sign up with X Account
      </button>
    </div>
  );
}

export default SignUpPage;

