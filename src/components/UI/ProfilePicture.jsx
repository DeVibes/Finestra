"use client";
import { useSpring, animated } from "@react-spring/web";

const ProfilePicture = ({ config }) => {
  const { isShown, size, isLoading, url } = config;

  const springStyle = useSpring({
    from: { opacity: 1 },
    to: { opacity: isShown ? 1 : 0 },
  });

  return (
    <div className="flex justify-center">
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
    </div>
  );
};
export default ProfilePicture;
