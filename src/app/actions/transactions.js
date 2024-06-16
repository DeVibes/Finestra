"use server";

import { revalidatePath } from "next/cache";
import {
  getTransactionsByAccountId,
  addTransaction as addTransactionQuery,
} from "../../db/queries/transactions";
import { redirect } from "next/navigation";

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
  //!TODO toggle payload is not working properly
  // income toggle off -> null, income toggle on -> ""
  const newTransaction = {
    income: formData.get("income") === "" ? true : false,
    description: formData.get("description"),
    price: parseFloat(formData.get("price")),
    store: formData.get("store"),
    category: formData.get("category"),
    paymentType: formData.get("paymentType"),
    billingDate: formData.get("billingDate"),
    accountId: accountId,
    userId: userId,
  };
  const createdTransaction = await addTransactionQuery(newTransaction);
  //!TODO Error handling
  revalidatePath("/account/dashboard")
  redirect("/account/dashboard");
  return createdTransaction;
};
