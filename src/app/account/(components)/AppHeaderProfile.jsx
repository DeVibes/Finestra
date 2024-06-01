"use client";
import React, { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { useUser } from "@auth0/nextjs-auth0/client";
import useClientFinPathname from "../../../hooks/useClientFinPathname";
import ProfilePicture from "../../../components/UI/ProfilePicture";

const AppHeaderProfile = ({ url, className }) => {
  const [isShown, setIsShown] = useState(true);
  const page = useClientFinPathname();
  const picSize = 42;

  useEffect(() => {
    const isPrefPage = page === "Preferences";
    setIsShown(!isPrefPage);
  }, [page]);

  return (
    <div className={className}>
      <ProfilePicture
        config={{ isShown, size: picSize, isLoading: !url, url }}
      />
    </div>
  );
};

export default AppHeaderProfile;
