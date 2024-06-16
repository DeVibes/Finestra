import ModulePlaceholder from "../../../components/placeholders/ModulePlaceholder";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";
import RecentTransactions from "./(components)/RecentTransactions";

const DashboardPage = ({ accountData }) => {
  return (
    <>
      <section className="w-full">
        <ModulePlaceholder />
      </section>
      <section className="w-full">
        <RecentTransactions accountId={accountData?.id} />
      </section>
    </>
  )
}

export default withServerFetchAccountData(DashboardPage);