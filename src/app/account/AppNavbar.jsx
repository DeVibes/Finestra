import Link from "next/link";
import React from "react";
import { DashboardIcon, SettingsIcon, TransactionsIcon } from "../../utils/icons";

const AppNavbar = ({ className, ...props }) => {
  const linkObjects = [
    { href: "/account/dashboard", Icon: DashboardIcon, text: "Dashboard" },
    { href: "/account/transactions", Icon: TransactionsIcon, text: "Transactions" },
    { href: "/account/preferences", Icon: SettingsIcon, text: "Preferences" },
  ]
  return (
    <nav className={`py-2 ${className}`}>
      <ul className="flex h-full justify-around gap-8">
        {linkObjects?.length > 0 && linkObjects.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="flex flex-col items-center gap-3 md:flex-row">
              <link.Icon size={40} className="md:hidden"/>
              <link.Icon size={20} className="hidden md:inline"/>
              <span className="text-sm lg:text-md">{link.text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default AppNavbar;