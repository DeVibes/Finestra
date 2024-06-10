import { redirect } from "next/navigation";
import useServerGetSessionData from "../hooks/useServerGetSessionData";
import { getAccountByUser } from "../services/accountInfoService";

export default function withServerFetchAccountData(WrappedComponent) {
  return async function (props) {
    const { email } = await useServerGetSessionData();
    const userAccountData = await getAccountByUser(email);
    if (!userAccountData) {
      console.error('No account data found for user: ', email)
      redirect('/')
    }
    return <WrappedComponent {...props} accountData={userAccountData} />;
  };
}