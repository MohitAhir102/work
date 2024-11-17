import React from "react";
import "./Quests.css";

function App() {
  return (
    <div className="content-wrapper">
      <h1 className="heading">Your Earning Stats</h1>

      <div className="card">
        <h2>Total Earnings</h2>
        <p>10000 GVV</p>
      </div>

      <div className="card">
        <h2>Available Balance</h2>
        <p>1350 GVV</p>
      </div>

      <div className="card">
        <h2>Referral Earnings</h2>
        <p>4000 GVV</p>
        <h3>Total Referrals</h3>
        <p>5</p>
      </div>

      <div className="card">
        <h2>Engagement Earnings</h2>
        <p>3000 GVV</p>
        <div className="engagement-stats">
          <div>
            <h4>Likes</h4>
            <p>20</p>
          </div>
          <div>
            <h4>Comments</h4>
            <p>7</p>
          </div>
          <div>
            <h4>Quotes</h4>
            <p>6</p>
          </div>
          <div>
            <h4>Retweets</h4>
            <p>5</p>
          </div>
        </div>
      </div>

      <div className="card">
        <h2>Quest Earnings</h2>
        <p>3000 GVV</p>
        <h3>Completed Quests</h3>
        <p>15</p>
      </div>
    </div>
  );
}

export default App;
