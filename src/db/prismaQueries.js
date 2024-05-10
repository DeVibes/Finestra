import myDbInstance from ".";

const getOrCreateUserAccount = async (userEmail) => {
  // TODO - Prisma cannot find by array field, so we need to get all accounts and filter
  try {
    const accounts = await myDbInstance.finestraAccount.findMany();
    const account = accounts.find((acc) => acc.users.includes(userEmail));
    if (account) {
      return account;
    }
    const newAccount = await myDbInstance.finestraAccount.create({
      data: {
        name: userEmail,
        users: [userEmail],
      },
    });
    return newAccount;
  } catch (error) {
    console.error("Failed to get accounts", error);
    return null;
  }
};

export { getOrCreateUserAccount };
