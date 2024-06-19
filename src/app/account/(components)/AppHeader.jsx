import AppLogo from "../../../components/AppLogo";
import useServerGetSessionData from "../../../hooks/useServerGetSessionData";
import { AddIcon } from "../../../utils/icons";
import AddTransactionButton from "./AddTransactionButton";
import AppHeaderProfile from "./AppHeaderProfile";
import AppNavbar from "./AppNavbar";

const AppHeader = async ({ className }) => {
  const userData = await useServerGetSessionData();
  return (
    <header className={`${className } flex items-center gap-8 p-3 border-b-2 border-cat_title_bg`}>
      <AppLogo className="" size={40} />
      <AppNavbar className="hidden md:inline" />
      <div className="grow flex justify-end gap-4">
        <AddTransactionButton />
        <AppHeaderProfile url={userData?.profilePic} />
      </div>
    </header>
  );
};
export default AppHeader;
