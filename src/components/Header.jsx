import AppLogo from "./AppLogo";
import ProfilePic from "./ProfilePic";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <AppLogo className="" size={40}/>
      <ProfilePic />
    </header>
  );
};

export default Header;