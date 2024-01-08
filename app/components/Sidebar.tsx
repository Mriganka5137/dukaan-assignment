import React from "react";
import StoreOwner from "./StoreOwner";

const Sidebar = () => {
  return (
    <aside className="w-56 min-h-screen bg-secondary_navbar px-2.5 py-4 flex flex-col">
      <StoreOwner />
    </aside>
  );
};

export default Sidebar;
