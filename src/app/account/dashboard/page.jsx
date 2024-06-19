import ModulePlaceholder from "../../../components/placeholders/ModulePlaceholder";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";
import RecentTransactions from "./(components)/RecentTransactions";

const DashboardPage = ({ accountData }) => {
  return (
    <>
      <section className="w-full lg:w-2/3 h-1/2">
        <ModulePlaceholder />
      </section>
      <section className="w-full lg:w-2/3 h-1/2 flex-initial">
        <RecentTransactions accountId={accountData?.id} />
      </section>
    </>
  )
}

export default withServerFetchAccountData(DashboardPage);