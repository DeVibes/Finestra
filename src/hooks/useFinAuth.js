import { getSession } from "@auth0/nextjs-auth0";

const useFinAuth = async () => {
  const getUserSession = async () => {
    const session = await getSession();
    return session;
  };

  const userProfilePic = await getUserSession().then(
    (session) => session?.user?.picture
  );

  const userProfileName = await getUserSession().then(
    (session) => session?.user?.name
  );

  return { userProfilePic, userProfileName };
};

export default useFinAuth;
