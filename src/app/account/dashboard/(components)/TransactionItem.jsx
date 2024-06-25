"use client";
import React, { useState } from "react";
import getCategoryIcon from "../../../../utils/catIconMatcher";
import { editVerifyStatus } from "../../../actions/transactions";
import { DateTime } from 'luxon';

const TransactionItem = ({
  transaction,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  // const [result, action, pending] = useActionState(editVerifyStatus)
  const verifyTransaction = async () => {
    setIsLoading(true);
    await editVerifyStatus(transaction.id, !transaction.verified);
  }
  const Icon = getCategoryIcon(transaction.category);
  return (
    <>
      {transaction.isFirstTransaction && (<div className="text-cat_text_primary mb-1 text-sm font-medium mt-2">{DateTime.fromISO(transaction.issuedAt).toLocaleString(DateTime.DATE_HUGE)}</div>)}
      <div
        className="flex gap-2"
        id="transaction_item"
      >
        <div className="">
          <Icon size={45} className="p-2 rounded-lg bg-cat_text_bg" />
        </div>
        <div className="w-1/2">
          <span className="block text-cat_text_primary text-md">
            {transaction.store}
          </span>
          <span className="block text-cat_title_bg text-sm">
            {transaction.description}
          </span>
        </div>
        <div className="w-1/5 flex-none flex justify-center items-center">
          {isLoading ? (
            <span className="text-center border w-full cursor-wait text-sm font-medium me-2 px-2.5 py-0.5 rounded">
              Loading
            </span>
          ) : (
            <span className={`text-center border w-full cursor-pointer text-sm font-medium me-2 px-2.5 py-0.5 rounded ${transaction.verified ? "text-catmauve border-catmauve" : "text-catyellow border-catyellow"}`} onClick={verifyTransaction}>
              {transaction.verified ? "Verified" : "Unverified"}
            </span>
          )}
        </div>
        <div className="grow flex flex-col items-end">
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
    </>
  );
};

export default TransactionItem;
