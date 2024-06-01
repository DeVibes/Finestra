import React from "react";
import AppHeader from "./(components)/AppHeader";
import AppNavbar from "./(components)/AppNavbar";

const AppLayout = ({ children }) => {
  // Layout should have a infine scroll for the main content
  // and a fixed footer for the mobile navbar
  return (
    <div className="flex flex-col h-full">
      <AppHeader />
      <main className="flex grow p-6 overflow-y-auto lg:overflow-hidden">{children}</main>
      <footer className="md:hidden">
        <AppNavbar />
      </footer>
    </div>
  );
};

export default AppLayout;
