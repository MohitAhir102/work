import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  TWITTER_API_KEY,
  REDIRECT_URI,
  TWITTER_API_CLIENT_ID,
  TWITTER_API_SECRET,
  client_secret,
} from "../../components/config/config"; // Import API credentials
import axios from "axios";

import "./SignUpPage.css";

function SignUpPage() {
  const navigate = useNavigate();

  // Function to handle Twitter OAuth login
  /*
  const handleTwitterLogin = async () => {
    try {
      const CallbackUrl = "http://localhost:3000";

      const twitterAuthUrl =
        "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=" +
        TWITTER_API_CLIENT_ID +
        "&redirect_uri=" +
        encodeURIComponent(CallbackUrl) + // URL encode the callback URL
        "&state=state&scope=tweet.read%20users.read%20follows.read%20offline.access" +
        "&code_challenge=challenge&code_challenge_method=plain";

      // Redirect the user to the Twitter OAuth URL
      window.location.href = twitterAuthUrl;
    } catch (error) {
      console.error("Twitter login failed:", error);
    }
  };

  useEffect(() => {
    // Extract the authorization code from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      // Exchange the code for an access token
      fetchAccessToken(code);
    }
  }, []);

  const fetchAccessToken = async (code) => {
    const clientId = TWITTER_API_CLIENT_ID;
    const clientSecret = client_secret; // Store secret securely!
    const redirectUri = "http://localhost:3000"; // Your callback URL

    try {
      // Encode clientId and clientSecret into Base64
      const plainText = `${clientId}:${clientSecret}`;
      const base64EncodedCredentials = btoa(plainText);

      // Make a request to exchange the code for an access token
      const response = await axios.post(
        "https://cors-anywhere.herokuapp.com/https://api.twitter.com/2/oauth2/token",
        new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          code: code,
          code_verifier: "challenge", // Ensure the verifier matches your setup
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${base64EncodedCredentials}`,
          },
        }
      );

      const accessToken = response.data.access_token;
      if (accessToken) {
        // Fetch user details using the access token
        fetchUserDetails(accessToken);
      }
    } catch (error) {
      console.error("Failed to fetch access token:", error);
    }
  };

  const fetchUserDetails = async (accessToken) => {
    try {
      // Use the access token to get user details from Twitter API
      const response = await axios.get("https://api.twitter.com/2/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log("User Details:", response.data);
      navigate("/leaderboard");
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };
  */

  // Function to handle static login
  const handleStaticLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email === "GVV@gmail.com" && password === "GVV@9090") {

      navigate("/leaderboard");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#f4f4f9",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <img src="/Logo.png" alt="Logo" style={{ width: "150px" }} />
      </div>
      <h1
        style={{
          color: "#333",
          marginBottom: "30px",
          textAlign: "center",
          fontSize: "1.5rem",
        }}
      >
        CVV Token is a digital asset and equity share
      </h1>
      <form
        onSubmit={handleStaticLogin}
        style={{
          background: "#ffffff",
          padding: "20px 30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "1rem",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#007bff",
            color: "#fff",
            fontSize: "1rem",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.background = "#0056b3")}
          onMouseLeave={(e) => (e.target.style.background = "#007bff")}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default SignUpPage;
