import React from "react";
import StoreOwner from "./StoreOwner";
import Links from "./Links";
import Credits from "./Credits";

const Sidebar = () => {
  return (
    <aside className="w-56 h-screen bg-secondary_navbar px-2.5 py-4 flex flex-col justify-between">
      <div>
        <StoreOwner />
        <Links />
      </div>
      <Credits />
    </aside>
  );
};

export default Sidebar;
