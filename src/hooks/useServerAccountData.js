import { getSession } from "@auth0/nextjs-auth0";

const useServerAccountData = async () => {
  const userSessionData = await getSession();
  const userData = {
    profilePic: userSessionData?.user?.picture,
    firstName: userSessionData?.user?.given_name,
    lastName: userSessionData?.user?.family_name,
    email: userSessionData?.user?.email,
  };
  const accountData = {
    name: userSessionData?.user?.account?.name,
    categories: userSessionData?.user?.account?.categories,
    paymentTypes: userSessionData?.user?.account?.paymentTypes,
    assignedUsers: userSessionData?.user?.account?.users,
    owner: userSessionData?.user?.account?.admin,
    id: userSessionData?.user?.account?.id,
    users: userSessionData?.user?.account?.users,
    monthCycle: userSessionData?.user?.account?.monthCycle,
  };

  return {
    userData,
    accountData,
  };
};

export default useServerAccountData;
