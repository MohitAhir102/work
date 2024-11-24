import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation for query params
import "./Leaderboard.css";

const Leaderboard = () => {
  // Demo data
  const demoData = {
    user: { rank: "400+", handle: "@twitterhandle", score: "10,000 CVV" },
    top200: [
      { rank: 1, handle: "@twitterhandle", score: "100k CVV" },
      { rank: 2, handle: "@twitterhandle", score: "70k CVV" },
      { rank: 3, handle: "@twitterhandle", score: "68k CVV" },
      { rank: 4, handle: "@twitterhandle", score: "67k CVV" },
      { rank: 5, handle: "@twitterhandle", score: "64k CVV" },
      { rank: 6, handle: "@twitterhandle", score: "60k CVV" },
    ],
  };

  // State for leaderboard data
  const [leaderboard, setLeaderboard] = useState(demoData);

  // State for Twitter token (optional, for future API calls)
  const [twitterToken, setTwitterToken] = useState(null);

  // Hook for navigation
  const navigate = useNavigate();

  // Hook for location to capture query params
  const location = useLocation();

  // Extract Twitter login response from query parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("access_token");
    if (token) {
      setTwitterToken(token);
      console.log("Twitter Access Token:", token);
    }
  }, [location]);

  return (
    <div className="leaderboard">
      <div className="leaderboard-header">
        <h2>CVV Earning Leaderboard</h2>
        <button className="close-button" onClick={() => navigate("/")}>
          Back
        </button>
      </div>

      {/* Display Twitter token if available */}
      {twitterToken && (
        <div className="twitter-token">
          <p>Logged in via Twitter!</p>
          <p>Access Token: {twitterToken}</p>
        </div>
      )}

      {/* "You" Section */}
      <div className="section-title">You</div>
      <div className="user-section">
        <div className="user-rank">{leaderboard.user.rank}</div>
        <div className="user-handle">{leaderboard.user.handle}</div>
        <div className="user-score">{leaderboard.user.score}</div>
      </div>

      {/* "Top 200" Section */}
      <div className="section-title">Top 200</div>
      <div className="top200">
        {leaderboard.top200.map((entry, index) => (
          <div key={index} className="entry">
            <div className="entry-rank">{entry.rank}</div>
            <div className="entry-handle">{entry.handle}</div>
            <div className="entry-score">{entry.score}</div>
          </div>
        ))}
      </div>

      <button className="Next-button" onClick={() => navigate("/Destop")}>
        Next
      </button>
    </div>
  );
};

export default Leaderboard;
