import React from "react";
import "./Stats.css";

const App = () => {
  return (
    <div className="leaderboard-container">
      <div className="header">
        <p>@twitter_handle</p>
        <p>View Full Leaderboard</p>
        <div className="gvv-score">
          <p>40000 GVV</p>
          <div className="profile-icon"></div>
        </div>
      </div>
      <div className="coming-soon">
        <h2>COMING SOON</h2>
        <p>
          $20K USDT <br />
          Up for <br />
          Winning to 20 <br />
          airdrop earners <br />
          in our upcoming <br />
          airdrop game.
        </p>
        <button className="read-more-btn">READ MORE</button>
      </div>
      <div className="gvv-quests">
        <h3>GVV QUESTS</h3>
        <div className="quest-list">
          <div className="quest-item">400 $GVV - Download and Read Whitepaper</div>
          <div className="quest-item">400 $GVV - Follow GVV on X</div>
          <div className="quest-item">400 $GVV - Watch Pitch Video</div>
          <div className="quest-item">400 $GVV - Join Discord Server</div>
          <div className="quest-item">400 $GVV - Like @Influencer’s GVV Post</div>
          <div className="quest-item">400 $GVV - Comment on @Influencer’s GVV Posts</div>
          <div className="quest-item">400 $GVV - Follow @Influencer’s Account</div>
        </div>
      </div>
    </div>
  );
};

export default App;

