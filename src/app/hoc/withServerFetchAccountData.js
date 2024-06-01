import useServerGetSessionData from "../../hooks/useServerGetSessionData";
import { getAccountByUser } from "../../services/accountInfoService";

export default function withServerFetchAccountData(WrappedComponent) {
  return async function (props) {
    const { email } = await useServerGetSessionData();
    const userAccountData = await getAccountByUser(email);
    return <WrappedComponent {...props} accountData={userAccountData}/>;
  };
}