"use client";
import React, { useState } from "react";
import AnimatedTransactionList from "./AnimatedTransactionsList";

const TransactionsViewer = ({ transactions }) => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const onTransactionClick = (transactionId) => {
    if (selectedTransaction === transactionId) {
      setSelectedTransaction(null);
      return;
    }
    setSelectedTransaction(transactionId);
  };
  return (
    <div className="max-h-80 overflow-y-auto" id="transactions_viewer">
      {transactions?.length > 0 && (
        <AnimatedTransactionList
          transactions={transactions}
          selectedTransactionId={selectedTransaction}
          handleTransactionClick={onTransactionClick}
        />
      )}
    </div>
  );
};

export default TransactionsViewer;
