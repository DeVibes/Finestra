import { getOrCreateUserAccount } from "../db/prismaQueries";

const getAccountByUser = async (userEmail) => {
  return await getOrCreateUserAccount(userEmail);
};

export { getAccountByUser };
