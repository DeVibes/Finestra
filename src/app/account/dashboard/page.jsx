import ModulePlaceholder from "../../../components/placeholders/ModulePlaceholder";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";
import RecentTransactions from "./(components)/RecentTransactions";

const DashboardPage = ({ accountData }) => {
  return (
    <>
      <section className="w-full">
        <div className="lg:w-1/2">
          <ModulePlaceholder />
        </div>
      </section>
      <section className="w-full">
        <div className="lg:w-1/2">
          <RecentTransactions accountId={accountData?.id} />
        </div>
      </section>
    </>
  )
}

export default withServerFetchAccountData(DashboardPage);