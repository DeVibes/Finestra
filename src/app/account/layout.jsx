import React from "react";
import AppHeader from "./(components)/AppHeader";
import AppNavbar from "./(components)/AppNavbar";

const AppLayout = ({ children }) => {
  // Layout should have a infine scroll for the main content
  // and a fixed footer for the mobile navbar
  return (
    <div className="h-full overflow-x-hidden flex flex-col justify-between">
      <AppHeader className="flow-none" />
      <main className="flex-initial grow-0 flex flex-col gap-4 p-4">{children}</main>
      <footer className="flex-none md:hidden">
        <AppNavbar />
      </footer>
    </div>
  );
};

export default AppLayout;
