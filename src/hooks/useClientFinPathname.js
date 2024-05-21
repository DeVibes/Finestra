"use client";
import { usePathname } from "next/navigation";

const useClientFinPathname = () => {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const lastPart = parts[parts.length - 1];
  const capitalizedLastPart =
    lastPart.charAt(0).toUpperCase() + lastPart.slice(1);

  return capitalizedLastPart;
};

export default useClientFinPathname;
