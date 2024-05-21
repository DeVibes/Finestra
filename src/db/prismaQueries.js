import myDbInstance, { accountDefaultCategories } from ".";

const getOrCreateUserAccount = async (userEmail) => {
  // TODO - Prisma cannot find by array field, so we need to get all accounts and filter
  try {
    const accounts = await myDbInstance.finestraAccount.findMany();
    const account = accounts.find((acc) => acc.users.includes(userEmail));
    if (account) {
      console.debug("Account found!", account);
      return account;
    }
    const newAccount = await myDbInstance.finestraAccount.create({
      data: {
        name: `${userEmail.split("@")[0]}'s account`,
        admin: userEmail,
        users: [userEmail],
        // TODO - This is a temporary solution, we should have a way to create default categories
        categories: {
          set: accountDefaultCategories,
        },
        paymentTypes: [],
        monthCycle: 11,
      },
    });
    console.debug("New account created!", newAccount);
    return newAccount;
  } catch (error) {
    console.error("Failed to get accounts", error);
    return null;
  }
};

const getTransactionsByAccountId = async (accountId) => {
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

const createTransaction = async (transaction) => {
  try {
    const newTransaction = await myDbInstance.finestraTransaction.create({
      data: transaction,
    });
    return newTransaction;
  } catch (error) {
    console.error("Failed to create transaction", error);
    return null;
  }
};

export {
  getOrCreateUserAccount,
  getTransactionsByAccountId,
  createTransaction,
};
