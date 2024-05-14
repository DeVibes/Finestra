const getAccountTransactions = async (accountId) => {
  return [];
};

// get mock transactions array from a json file
const getMockTransactions = async () => {
  const transactions = await require("../../mockData/transactions.json");
  return transactions;
};
