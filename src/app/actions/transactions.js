"use server";

import {
  getTransactionsByAccountId,
  addTransaction as addTransactionQuery,
} from "../../db/queries/transactions";

export const getTransactions = async (accountId) => {
  const transactions = await getTransactionsByAccountId(accountId);
  return transactions;
  // await new Promise((resolve) => setTimeout(resolve, 10000));
  // return [
  //   {
  //     price: 123,
  //     description: "Some groceries",
  //     store: "Megasport",
  //     category: "Groceries",
  //   },
  //   {
  //     price: 84,
  //     description: "Test",
  //     store: "Megasport",
  //   },
  //   {
  //     price: 123,
  //     description: "Some groceries",
  //     store: "Megasport",
  //   },
  // ];
};

export const addTransaction = async (accountId, userId, formData) => {
  const newTransaction = {
    description: formData.get("description"),
    price: formData.get("price"),
    category: formData.get("category"),
    paymentType: formData.get("paymentType"),
    billingDate: formData.get("billingDate"),
    accountId: accountId,
    userId: userId,
  };
  const createdTransaction = await addTransactionQuery(newTransaction);
  return createdTransaction;
};
