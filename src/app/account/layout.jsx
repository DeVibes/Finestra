import React from "react";
import AppNavbar from "./AppNavbar";
import AppHeader from "./AppHeader";

const AppLayout = ({ children }) => {
  // Layout should have a infine scroll for the main content
  // and a fixed footer for the mobile navbar
  return (
    <div className="flex flex-col h-full">
      <AppHeader />
      <main className="flex grow p-4 overflow-y-auto md:overflow-hidden">{children}</main>
      <footer className="md:hidden">
        <AppNavbar />
      </footer>
    </div>
  );
};

export default AppLayout;
