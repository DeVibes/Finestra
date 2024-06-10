import PropTypes from "prop-types";
import CategorySlider from "./(sections)/CategorySlider";
import BasicInfo from "./(sections)/BasicInfo";
import PaymentTypeSlider from "./(sections)/PaymentTypeSlider";
import useServerGetSessionData from "../../../hooks/useServerGetSessionData";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";

const PreferencesPage = async ({ accountData }) => {
  const { fullName, email, profilePic } = await useServerGetSessionData();
  const basicInfoData = {
    email,
    accountName: accountData?.name,
    accountOwner: accountData?.admin,
    profilePic,
    fullName
  };

  return (
    <div className="w-full flex flex-col lg:items-center">
      <BasicInfo data={basicInfoData} className="mb-4 lg:w-2/3"/>
      <CategorySlider categories={accountData?.categories} className="mb-4 lg:w-2/3"/>
      <PaymentTypeSlider paymentTypes={accountData?.paymentTypes} className="mb-4 lg:w-2/3" />
      <section className="flex justify-end">
        <button className="p-2 bg-catgreen text-white rounded-lg">
          <a href="/api/auth/logout">logout</a>
        </button>
      </section>
    </div>
  );
};

PreferencesPage.propTypes = {
  accountData: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    admin: PropTypes.string,
    monthCycle: PropTypes.number,
    users: PropTypes.arrayOf(PropTypes.string),
    paymentTypes: PropTypes.arrayOf(PropTypes.string),
    categories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      displayName: PropTypes.string,
    }))
  }),
}

export default withServerFetchAccountData(PreferencesPage);
