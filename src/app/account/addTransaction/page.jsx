import React from "react";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";
import FinInput from "../../../components/UI/FinInput";
import { addTransaction } from "../../actions/transactions";
import {
  CategoryIcon,
  DateIcon,
  DescriptionIcon,
  PaymentIcon,
  PriceTagIcon,
} from "../../../utils/icons";
import FinSelect from "../../../components/UI/FinSelect";

const AddTransactionPage = ({ accountData }) => {
  const submitWithAccount = addTransaction.bind(null, accountData.id, accountData.currentUser);
  return (
    <section className="w-full">
      <span className="text-cat_text_primary text-xl">Add Transaction</span>
      <form action={submitWithAccount}>
        <FinInput
          icon={DescriptionIcon}
          label="Description"
          className="w-full"
          name="description"
        />
        <FinInput
          icon={PriceTagIcon}
          label="Price"
          type="number"
          name="price"
        />
        <FinInput
          icon={DateIcon}
          label="Billing Date"
          type="date"
          name="billingDate"
        />
        <FinInput icon={PaymentIcon} label="Payment Type" name="paymentType" />
        <FinSelect
          items={accountData.categories}
          icon={CategoryIcon}
          label="Category"
          name="category"
          className="w-full mb-2"
        />
        <button type="submit" className="p-2 bg-catgreen text-white rounded-lg">
          Add
        </button>
      </form>
    </section>
  );
};

export default withServerFetchAccountData(AddTransactionPage);
