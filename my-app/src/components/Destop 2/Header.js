import React from 'react';
import './Header.css';


const AirdropDashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-icon">
          <img src="https://via.placeholder.com/100" alt="Profile" />
        </div>
        <h2>Twitter Name</h2>
        <p>@twitter_handle</p>
      </div>

      {/* Invite Section */}
      <div className="section">
        <h3>INVITE FRIENDS</h3>
        <p>
          Invite/Refer other users and earn 300 GVV and 8% of each referred user's airdrop earnings.
        </p>
        <div className="invite-buttons">
          <input type="text" value="SGF3A2..." readOnly />
          <button className="button" onClick={() => alert('Share link!')}>SHARE ON X</button>
        </div>
        <button className="referral-button">
          <span>👥</span> 20 Referrals
        </button>
      </div>

      {/* Engage Section */}
      <div className="section">
        <h3>ENGAGE WITH GVV POSTS AND EARN</h3>
        <p>Engage with our posts on X and Earn $GVV Tokens</p>
        <div className="engage-buttons">
          <button className="button" onClick={() => alert('Like!')}>❤️ 5</button>
          <button className="button" onClick={() => alert('Comment!')}>💬 1</button>
          <button className="button" onClick={() => alert('Share!')}>🔗 6</button>
          <button className="button" onClick={() => alert('Bookmark!')}>📌 3</button>
        </div>
        <div className="post-placeholder">
          <img src="https://fastly.picsum.photos/id/6/5000/3333.jpg?hmac=pq9FRpg2xkAQ7J9JTrBtyFcp9-qvlu8ycAi7bUHlL7I" alt="Post Placeholder" />
        </div>
      </div>

      {/* Wallet Section */}
      <div className="section">
        <h3>CONNECT WALLETS AND CLAIM</h3>
        <div className="wallet-buttons">
          <button className="button" onClick={() => alert('Connect Wallet')}>Connect Wallet</button>
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
