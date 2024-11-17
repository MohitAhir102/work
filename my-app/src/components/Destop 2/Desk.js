import React from 'react';
// import Leaderboard from '../Leaderboard/Leaderboard';
import Header from './Header';
import Quests from './Quests';
import Stats from './Stats';

const Desk = () => {
  return (
    <div>
    <div>

      <Header/ >
      {/* <Leaderboard /> */}
      <Quests />
      <Stats />
    </div>
    </div>
  );
}

export default Desk;
