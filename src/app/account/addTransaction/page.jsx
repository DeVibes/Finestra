import React from "react";
import withServerFetchAccountData from "../../../hoc/withServerFetchAccountData";
import FinInput from "../../../components/UI/FinInput";
import { addTransaction } from "../../actions/transactions";
import {
  CategoryIcon,
  DateIcon,
  DescriptionIcon,
  IncomeIcon,
  PaymentIcon,
  PriceTagIcon,
  StoreIcon,
} from "../../../utils/icons";
import FinSelect from "../../../components/UI/FinSelect";
import SubmitButton from "../../../components/SubmitButton";
import FinToggle from "../../../components/UI/FinToggle";
import ModulePlaceholders from "../../../components/placeholders/ModulePlaceholder";

const AddTransactionPage = ({ accountData }) => {
  const submitWithAccount = addTransaction.bind(null, accountData.id, accountData.currentUser);
  return (
    <section className="w-full h-full flex flex-col md:justify-center items-center">
      <span className="text-cat_text_primary text-xl">Add Transaction</span>
      <form action={submitWithAccount} className="w-full md:w-2/3 lg:w-1/2 mt-2 flex flex-col gap-2">
        <FinInput
          icon={DescriptionIcon}
          label="Description"
          name="description"
        />
        <FinInput
          icon={StoreIcon}
          label="Store"
          name="store"
        />
        <FinInput
          icon={PriceTagIcon}
          label="Price"
          type="number"
          name="price"
        />
        <FinInput
          icon={DateIcon}
          label="Issued At"
          type="datetime-local"
          name="issuedAt"
        />
        <FinInput
          icon={DateIcon}
          label="Billing Date"
          type="month"
          name="billingDate"
        />
        <FinSelect
          items={accountData.paymentTypes}
          icon={PaymentIcon}
          label="Payment Type"
          name="paymentType"
        />
        <FinSelect
          items={accountData.categories}
          icon={CategoryIcon}
          label="Category"
          name="category"
        />
        <FinToggle icon={IncomeIcon} label="Income" name="income" className="w-full mb-2" />
        <div className="w-full flex justify-end">
          <SubmitButton />
        </div>
      </form>
    </section>
  );
};

export default withServerFetchAccountData(AddTransactionPage);
