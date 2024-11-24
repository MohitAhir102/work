import React from "react";
import "./Header.css";

import profileImage from "../../assets/icons/profile.png";

const AirdropDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-icon">
          <img src={profileImage} alt="Profile" />
        </div>
        <h2>Twitter Name</h2>
        <p className="twitter-name">@twitter_handle</p>
      </div>

      {/* Invite Section */}
      <div className="section">
        <h3>INVITE FRIENDS</h3>
        <p>
          Invite/Refer other users and earn 300 GVV and 8% of each referred
          user's airdrop earnings.
        </p>
        <div className="invite-buttons">
          <div
            className="buttons-position"
            style={{
              position: "relative",
              display: "inline-block",
              width: "100%",
              maxWidth: "170px",
            }}
          >
            <input type="text" defaultValue="SGF3A2..." value="SGF3A2..." />
            <button
              style={{
                position: "absolute",
                top: "50%",
                right: "5px",
                transform: "translateY(-50%)",
                padding: "5px 10px",
                fontSize: "12px",
                // backgroundColor: "#007BFF",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="#627bdf" d="M9.116 17q-.691 0-1.153-.462T7.5 15.385V4.615q0-.69.463-1.153T9.116 3h7.769q.69 0 1.153.462t.462 1.153v10.77q0 .69-.462 1.152T16.884 17zm-3 3q-.691 0-1.153-.462T4.5 18.385V7.115q0-.213.143-.356T5 6.616t.357.143t.143.357v11.269q0 .23.192.423t.423.192h8.27q.213 0 .356.143t.143.357t-.143.357t-.357.143z"/></svg>
            </button>
          </div>

          <button className="button" onClick={() => alert("Share link!")}>
            SHARE ON X
          </button>
          <button className="button">
            <span>👥</span> 20 Referrals
          </button>
        </div>
      </div>

      {/* Engage Section */}
      <div className="section">
        <h3>ENGAGE WITH GVV POSTS AND EARN</h3>
        <p>Engage with our posts on X and Earn $GVV Tokens</p>
        <div className="engage-buttons">
          <button className="button" onClick={() => alert("Like!")}>
            ❤️ 5
          </button>
          <button className="button" onClick={() => alert("Comment!")}>
            💬 1
          </button>
          <button className="button" onClick={() => alert("Share!")}>
            🔗 6
          </button>
          <button className="button" onClick={() => alert("Bookmark!")}>
            📌 3
          </button>
        </div>
        <div className="post-placeholder">
          <img
            src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I"
            alt="Post Placeholder"
          />
        </div>
      </div>

      {/* Wallet Section */}
      <div className="section">
        <h3>CONNECT WALLETS AND CLAIM</h3>
        <div className="wallet-buttons">
          <button className="button" onClick={() => alert("Connect Wallet")}>
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Airdrop Updates Section */}
      <div className="section">
        <h3>AIRDROP UPDATES</h3>
        <p>Stay tuned for the latest updates on your airdrop progress!</p>
      </div>
    </div>
  );
};

export default AirdropDashboard;
