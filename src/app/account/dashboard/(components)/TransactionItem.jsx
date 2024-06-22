"use client";
import React from "react";
import getCategoryIcon from "../../../../utils/catIconMatcher";

const TransactionItem = ({
  transaction,
  isSelected,
  handleTransactionClick,
}) => {
  const Icon = getCategoryIcon(transaction.category);
  return (
    <>
      <div
        className={`flex gap-3 ${isSelected && "border border-catmauve rounded-lg"}`}
        id="transaction_item"
        onClick={() => handleTransactionClick(transaction.id)}
      >
        <div className="">
          <Icon size={45} className="p-2 rounded-lg bg-cat_text_bg" />
        </div>
        <div className="grow">
          <span className="block text-cat_text_primary text-md">
            {transaction.store}
          </span>
          <span className="block text-cat_title_bg text-md">
            {transaction.description}
          </span>
        </div>
        <div className="flex justify-center items-center">
          {transaction.verified && (
            <span className="text-catmauve border border-catmauve text-sm font-medium me-2 px-2.5 py-0.5 rounded">
              Verified
            </span>
          )}
        </div>
        <div className="flex flex-col items-end">
          {transaction.income ? (
            <span className="text-catgreen">{transaction.price} ₪</span>
          ) : (
            <span className="text-catred">{transaction.price} ₪</span>
          )}
          <span className="text-cat_title_bg text-sm">
            {transaction.paymentType}
          </span>
        </div>
      </div>
      {isSelected && (
        <div className="flex" id="transaction_buttons">
          <button className="btn bg-catyellow rounded-lg py-1 px-3">Edit</button>
          <button className="btn btn-catred">Delete</button>
        </div>
      )}
    </>
  );
};

export default TransactionItem;
