import AppLogo from "../../../components/AppLogo";
import useServerGetSessionData from "../../../hooks/useServerGetSessionData";
import AppHeaderProfile from "./AppHeaderProfile";
import AppNavbar from "./AppNavbar";

const AppHeader = async () => {
  const { userData } = await useServerGetSessionData()
  return (
    <header className="flex items-center gap-8 p-4 border-b-2 border-cat_title_bg">
      <AppLogo className="" size={40}/>
      <AppNavbar className="hidden md:inline"/>
      <AppHeaderProfile url={userData?.profilePic} className="grow flex justify-end"/>
    </header>
  );
};
export default AppHeader;