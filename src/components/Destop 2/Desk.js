import React from "react";
import Header from "./Header";
import Quests from "./Quests";
import Stats from "./Stats";

const Desk = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Header Section */}
        <aside className="col-span-1 bg-white rounded-lg shadow p-4">
          <Header />
        </aside>

        {/* Quests and Stats Sections */}
        <main className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Quests Section */}
          <section className="bg-white rounded-lg shadow p-4">
            <Quests />
          </section>

          {/* Stats Section */}
          <section className="bg-white rounded-lg shadow p-4">
            <Stats />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Desk;
