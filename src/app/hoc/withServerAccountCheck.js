import useServerGetSessionData from "../../hooks/useServerGetSessionData";
import { getAccountByUser } from "../../services/accountInfoService";

const withServerFetchAccountData = WrappedComponent => {
  return async (props) => {
    const { email } = await useServerGetSessionData();
    const userAccountData = await getAccountByUser(email);
    return <WrappedComponent {...props} accountData={userAccountData}/>;
  };
};

export default withServerFetchAccountData;