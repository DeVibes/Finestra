import { Suspense } from "react";
import ModulePlaceholder from "../../../components/placeholders/ModulePlaceholder";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";
import RecentTransactionsModule from "./(components)/RecentTransactionsModule";
import ListPlaceholder from "../../../components/placeholders/ListPlaceholder";

const DashboardPage = ({ accountData }) => {
  return (
    <>
      <section className="w-full lg:w-2/3 h-1/2">
        <ModulePlaceholder />
      </section>
      <section className="w-full lg:w-2/3 h-1/2 flex-initial">
        <Suspense fallback={<ListPlaceholder />}>
          <RecentTransactionsModule accountId={accountData?.id} />
        </Suspense>
      </section>
    </>
  );
};

export default withServerFetchAccountData(DashboardPage);
