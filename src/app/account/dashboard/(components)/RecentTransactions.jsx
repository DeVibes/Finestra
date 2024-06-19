import React, { Suspense } from "react";
import RecentTransactionsHeader from "./RecentTransactionsHeader";
import TransactionsViewer from "./TransactionsViewer";
import ListPlaceholder from "../../../../components/placeholders/ListPlaceholder";

const RecentTransactions = async ({ accountId }) => {
  return (
    <>
      <RecentTransactionsHeader />
      <Suspense fallback={<ListPlaceholder />}>
        <TransactionsViewer accountId={accountId} />
      </Suspense>
      {/* <ListPlaceholder /> */}
    </>
  );
};

export default RecentTransactions;
