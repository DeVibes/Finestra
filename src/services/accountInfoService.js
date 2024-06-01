import { addPaymentTypeToAccount, getOrCreateUserAccount } from "../db/prismaQueries";

const getAccountByUser = async (userEmail) => {
  const accountData = await getOrCreateUserAccount(userEmail);
  return accountData;
};

const addPaymentType = async (paymentType, accountId) => {
  const result = await addPaymentTypeToAccount(paymentType, accountId);
  return result;
}

export { getAccountByUser, addPaymentType };
