import React from "react";
import "./Quests.css";
import Logo from "../../assets/icons/logo.png";

function App() {
  return (
    <div className="content-wrapper">
      <h1 className="heading">Your Earning Stats</h1>
      <div className="logoImage">
        <img src={Logo} alt="logo" />
      </div>

      <div className="card-wrap">
        <div>
          <h2 className="card">Total Earnings</h2>
          <p>10000 GVV</p>
        </div>

        <div>
          <h2 className="card">Available Balance</h2>
          <p>1350 GVV</p>
        </div>
      </div>

      <div className="card-wrap">
        <div>
          <h2 className="card">Referral Earnings</h2>
          <p>4000 GVV</p>
        </div>

        <div>
          <h2 className="card">Total Referrals</h2>
          <p>5</p>
        </div>
      </div>

      

      <div className="card-wrap">
        <div>
          <h2 className="card">Engagement Earnings</h2>
          <p>3000 GVV</p>
        </div>

        <div className="engagement-stats">
          <div>
            <h4 className="card-state">Likes</h4>
            <p>20</p>
          </div>
          <div>
            <h4 className="card-state">Comments</h4>
            <p>7</p>
          </div>
          <div>
            <h4 className="card-state">Quotes</h4>
            <p>6</p>
          </div>
          <div>
            <h4 className="card-state">Retweets</h4>
            <p>5</p>
          </div>
        </div>
      </div>

      <div className="card-wrap">
        <div>
          <h2 className="card">Quest Earnings</h2>
          <p>3000 GVV</p>
        </div>

        <div>
          <h2 className="card">Completed Quests</h2>
          <p>15</p>
        </div>
      </div>
    </div>
  );
}

export default App;
