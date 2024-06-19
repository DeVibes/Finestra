import React from "react";
import TransactionItem from "./TransactionItem";
import { getTransactions } from "../../../actions/transactions";
import AnimatedTransactionList from "./AnimatedTransactionsList";

const TransactionsViewer = async ({ accountId }) => {
  const transactions = await getTransactions(accountId);
  return (
    <div className="max-h-80 overflow-y-auto" id="transactions_viewer">
      {transactions?.length > 0 && (
        <AnimatedTransactionList items={transactions} />
      )}
    </div>
  );
};

export default TransactionsViewer;
