import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  TWITTER_API_CLIENT_ID,
  TWITTER_API_SECRET,
} from "../../components/config/config"; // Import API credentials
// import { useOAuth } from "react-oauth"; // Import OAuth library

import "./SignUpPage.css";
import axios from "axios";

function SignUpPage() {
  const navigate = useNavigate();

  // const twitterLogin = useOAuth({
  //   provider: "twitter",
  //   clientId: TWITTER_API_KEY,
  //   redirectUri: REDIRECT_URI,
  // });

  const handleTwitterLogin = async () => {
    try {
      const CallbackUrl = "https://venerable-chebakia-81454a.netlify.app";
      // On success, navigate to the leaderboard

      const twitterAuthUrl =
        "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=" +
        TWITTER_API_CLIENT_ID +
        "&redirect_uri=" +
        CallbackUrl + // URL encode the callback URL
        "&state=state&scope=tweet.read%20users.read%20follows.read%20offline.access" +
        "&code_challenge=challenge&code_challenge_method=plain";

      // Redirect the user to the Twitter OAuth URL
      window.location.href = twitterAuthUrl;
      // navigate(
      //   "https://twitter.com/i/oauth2/authorize?response_type=code&client_id=" +
      //     process.env.TWITTER_API_CLIENT_ID +
      //     "&redirect_uri=" +
      //     CallbackUrl +
      //     "&state=state&scope=tweet.read%20users.read$20follows.read%20offLine.access&code_challenge=challenge&code_challenge_method=plain"
      // );
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
    const clientSecret = TWITTER_API_SECRET; // Store secret securely!
    const redirectUri = "https://venerable-chebakia-81454a.netlify.app"; // Your callback URL

    try {
      // Make a request to exchange the code for an access token
      const response = await axios.post(
        "https://api.twitter.com/2/oauth2/token",
        new URLSearchParams({
          client_id: clientId,
          client_secret: clientSecret,
          code,
          redirect_uri: redirectUri,
          grant_type: "authorization_code",
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Access-Control-Allow-Origin": "*",
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
      navigate("/leaderboard");
      console.log("User Details:", response.data);
    } catch (error) {
      console.error("Failed to fetch user details:", error);
    }
  };
  return (
    <div className="signup-page">
      <div className="logo">
        <img src="/Logo.png" alt="Logo" />
      </div>
      <h1>CVV Token is a digital asset and equity share</h1>
      <button className="signup-button" onClick={handleTwitterLogin}>
        Sign up with X Account
      </button>
    </div>
  );
}

export default SignUpPage;
