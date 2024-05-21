"use client";
import { useSpring, animated } from "@react-spring/web";

const ProfilePicture = ({ config }) => {
  const { isShown, size, isLoading, url } = config;
  console.log("url", url)

  const springStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: isShown ? 1 : 0 },
  });

  return (
    <>
      {/* {!isLoading && ( */}
      <animated.img
        src={url}
        alt="Profile"
        className="rounded-full border-2 border-catgreen"
        style={springStyle}
        width={size}
        height={size}
      />
      {/* )} */}
    </>
  );
};
export default ProfilePicture;
