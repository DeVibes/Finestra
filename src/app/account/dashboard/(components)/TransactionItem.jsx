'use client'
import React from "react";
import { GroceriesIcon } from "../../../../utils/icons";

const TransactionItem = ({ transaction }) => {
  return (
    <div className="flex gap-3" id="transaction_item">
      <div className="">
        <GroceriesIcon size={45} className="p-2 rounded-lg bg-cat_text_bg" />
      </div>
      <div className="grow">
        <span className="block text-cat_text_primary text-md">{transaction.store}</span>
        <span className="block text-cat_title_bg text-md">{transaction.description}</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-catgreen">{transaction.price} ₪</span>
        <span className="text-cat_title_bg text-sm">{transaction.paymentType}</span>
      </div>
    </div>
  );
};

export default TransactionItem;
