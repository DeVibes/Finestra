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
    <>
      <section className="w-full">
        <span className="text-cat_text_primary text-xl">Add Transaction</span>
        <form action={submitWithAccount} className="mt-2 flex flex-col gap-2">
          <FinInput
            icon={DescriptionIcon}
            label="Description"
            // className="w-full"
            name="description"
          />
          <FinInput
            icon={StoreIcon}
            label="Store"
            // className="w-full"
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
            label="Billing Date"
            type="date"
            name="billingDate"
          />
          <FinSelect
            items={accountData.paymentTypes}
            icon={PaymentIcon}
            label="Payment Type"
            name="paymentType"
          // className="w-full mb-2"
          />
          <FinSelect
            items={accountData.categories}
            icon={CategoryIcon}
            label="Category"
            name="category"
          // className="w-full mb-2"
          />
          <FinToggle icon={IncomeIcon} label="Income" name="income" className="w-full mb-2" />
          <div className="w-full flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </section>
    </>
  );
};

export default withServerFetchAccountData(AddTransactionPage);
