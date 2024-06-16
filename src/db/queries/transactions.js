import myDbInstance from "..";

export const getTransactionsByAccountId = async (accountId) => {
  try {
    const transactions = await myDbInstance.finestraTransaction.findMany({
      where: {
        accountId,
      },
    });
    return transactions;
  } catch (error) {
    console.error("Failed to get transactions", error);
    return null;
  }
};

export const addTransaction = async (transaction) => {
  try {
    const newTransaction = await myDbInstance.finestraTransaction.create({
      data: transaction,
    });
    return newTransaction;
  } catch (error) {
    console.error("Failed to add transaction", error);
    // console.log(JSON.stringify(error.name))
    return null;
  }
};
