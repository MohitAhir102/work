import React from "react";
import "./Stats.css";
import profileImage from "../../assets/icons/profile.png";

const App = () => {
  return (
    <div className="leaderboard-container">
      <div className="header">
        <div className="gvv-title">
          <h4 className="m-0">GVV Leaderboard Rank</h4>
          <p className="m-0">@twitter_handle</p>
          <p className="m-0">View Full Leaderboard</p>
        </div>
        <div className="gvv-score">
          <p>40000 GVV</p>
          <div className="profile-icon">
            <img src={profileImage} alt="profile" />
          </div>
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
          {/* Updated Link for Download and Read Whitepaper */}
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <a 
              href="https://gvvtoken.com/assets/files/GVV%20Whitepaper%20-%20Draft.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="desc">Download and Read Whitepaper</div>
            </a>
          </div>

          {/* Other Quest Items */}
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <div className="desc">Follow GVV on X</div>
          </div>
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <div className="desc">Watch Pitch Video</div>
          </div>
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <div className="desc">Join Discord Server</div>
          </div>
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <div className="desc">Like @Influencer’s GVV Post</div>
          </div>
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <div className="desc">Comment on @Influencer’s GVV Posts</div>
          </div>
          <div className="quest-item">
            <div className="price">400 $GVV</div>
            <div className="desc">Follow @Influencer’s Account</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
