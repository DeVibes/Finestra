"use server";

import { revalidatePath } from "next/cache";
import {
  getTransactionsByAccountId,
  addTransaction as addTransactionQuery,
} from "../../db/queries/transactions";
import { redirect } from "next/navigation";
import { editVerifyTransaction } from "../../db/prismaQueries";

export const getTransactions = async (accountId) => {
  const transactions = await getTransactionsByAccountId(accountId);
  const sortedTransactions = sortTransactionsByIssuedAtDESC(transactions)
  const transactionsWithDateFlag = addDateTitleFlag(sortedTransactions)
  return transactionsWithDateFlag;
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
  //!TODO toggle payload is not working properly
  // income toggle off -> null, income toggle on -> ""
  // const issuedAtUtc = new Date(formData.get("issuedAt")).toISOString().slice(0, 16)
  const newTransaction = {
    income: formData.get("income") === "" ? true : false,
    description: formData.get("description"),
    price: parseFloat(formData.get("price")),
    store: formData.get("store"),
    category: formData.get("category"),
    paymentType: formData.get("paymentType"),
    billingDate: formData.get("billingDate"),
    issuedAt: formData.get("issuedAt"),
    accountId: accountId,
    userId: userId,
  };
  const createdTransaction = await addTransactionQuery(newTransaction);
  //!TODO Error handling
  revalidatePath("/account/dashboard");
  redirect("/account/dashboard");
  return createdTransaction;
};

export const editVerifyStatus = async (transactionId, verified) => {
  //!TODO Error handling
  const updatedTransaction = await editVerifyTransaction(transactionId, verified);
  revalidatePath("/account/dashboard");
  redirect("/account/dashboard");
}

const sortTransactionsByIssuedAtDESC = (transactions) => {
  return transactions.sort((a, b) => {
    return (
      new Date(b.issuedAt.slice(0, 16)) - new Date(a.issuedAt.slice(0, 16))
    );
  });
};

const addDateTitleFlag = (transactions) => {
  if (transactions.length === 0) {
    return transactions;
  }
  let dateFlag = null;
  transactions.forEach(transaction => {
    const shouldTransactionBeFlagged = transaction.issuedAt.slice(0, 10) !== dateFlag;
    if (shouldTransactionBeFlagged) {
      transaction.isFirstTransaction = true;
      dateFlag = transaction.issuedAt.slice(0, 10);
    }
    else
      transaction.isFirstTransaction = false;
  });
  return transactions;
}
