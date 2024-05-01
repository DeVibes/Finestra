import Link from "next/link";
import React from "react";
import { DashboardIcon, SettingsIcon } from "../../utils/icons";
import Header from "../../components/Header";

const AppLayout = async ({ children }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="md:flex flex-grow">
        <side className="hidden md:flex md:items-center lg:items-start lg:mt-9">
          <Navbar />
        </side>
        <main className="flex grow p-4">{children}</main>
      </div>
      <footer className="md:hidden">
        <Navbar />
      </footer>
    </div>
  );
};

export default AppLayout;

const Navbar = ({ className }) => {
  return (
    <nav className={`py-2 md:flex md:items-center md:p-2 md:border-2 md:border-catgreen md:border-l-0 md:h-1/2 lg:border-0`}>
      <ul className="flex h-full md:flex-col justify-around lg:justify-start lg:gap-7">
        <li>
          <Link href="/account/dashboard" className="flex flex-col items-center gap-1 lg:flex-row">
            <DashboardIcon size={40} />
            <span className="text-sm md:hidden lg:inline lg:text-xl">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/account/settings" className="flex flex-col items-center gap-1 lg:flex-row">
            <SettingsIcon size={40} />
            <span className="text-sm md:hidden lg:inline lg:text-xl">Settings</span>
          </Link>
        </li>
        <li>
          <Link href="/account/dashboard" className="flex flex-col items-center gap-1 lg:flex-row">
            <DashboardIcon size={40} />
            <span className="text-sm md:hidden lg:inline lg:text-xl">Dashboard</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
