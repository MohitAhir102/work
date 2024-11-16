import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/SignUpPage";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for navigation */}
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

