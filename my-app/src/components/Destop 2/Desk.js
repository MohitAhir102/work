import React from "react";

import Header from "./Header";
import Quests from "./Quests";
import Stats from "./Stats";

const Desk = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Header Section */}
        <div className="col-span-1 md:col-span-1">
          <Header />
        </div>
        {/* Quests Section */}
        <div className="col-span-1 md:col-span-1">
          <Quests />
        </div>
        {/* Stats Section */}
        <div className="col-span-1 md:col-span-1">
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Desk;
