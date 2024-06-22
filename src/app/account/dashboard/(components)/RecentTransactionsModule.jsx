import React from "react";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import TransactionsViewer from "./TransactionsViewer";
import { getTransactions } from "../../../actions/transactions";

const RecentTransactionsModule = async ({ accountId }) => {
  const transactions = await getTransactions(accountId);
  return (
    <>
      <RecentTransactionsHeader />
      <TransactionsViewer transactions={transactions} />
    </>
  );
};

export default RecentTransactionsModule;
