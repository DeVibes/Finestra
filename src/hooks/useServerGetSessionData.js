import { getSession } from "@auth0/nextjs-auth0";

// a hook that fetches the user and account data from the session
const useServerGetSessionData = async () => {
  const { user } = await getSession();
  const {
    picture: profilePic,
    given_name: firstName,
    family_name: lastName,
    name: fullName,
    email,
  } = user;
  return {
    profilePic,
    firstName,
    lastName,
    fullName,
    email,
  };
};

export default useServerGetSessionData;
