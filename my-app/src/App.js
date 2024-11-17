import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUpPage from "./components/Login_page/SignUpPage";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import Desk from "./components/Destop 2/Desk";


function App() {
  return (
    <Router>
      <div className="App">
        {/* Define routes for navigation */}
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route
            path="/dashboard"
            element={
              <div>
                {/* <Header /> */}
                <div className="flex-container">
                  {/* <Stats />
                  <Leaderboard />
                  <Quests /> */}
                </div>
              </div>
            }
          />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/Destop" element={<Desk />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;