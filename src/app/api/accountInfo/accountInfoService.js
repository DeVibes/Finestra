import { getOrCreateUserAccount } from "../../../db/prismaQueries";

const getUserData = async (userEmail) => {
  return await getOrCreateUserAccount(userEmail);
};

export { getUserData };
