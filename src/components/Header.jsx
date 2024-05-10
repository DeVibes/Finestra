import AppLogo from "./AppLogo";
import ProfilePic from "./ProfilePic";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <AppLogo className="" size={40}/>
      <button className="p-2 bg-catgreen text-white rounded-lg">
        <a href="/api/auth/logout">logout</a>
      </button>
      <ProfilePic />
    </header>
  );
};

export default Header;