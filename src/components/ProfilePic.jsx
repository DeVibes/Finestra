import React from "react";
import Image from "next/image";
import useFinAuth from "../hooks/useFinAuth";

const ProfilePic = async () => {
  const { userProfilePic } = await useFinAuth();
  return (
    <>
      {userProfilePic && (
        <Image
          src={userProfilePic}
          alt="Profile"
          className="rounded-full border-4 border-catgreen"
          width={42}
          height={42} />
      )}
    </>
  );
};

export default ProfilePic;