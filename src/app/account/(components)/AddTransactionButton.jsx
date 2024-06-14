import React from "react";
import { addTransaction } from "../../actions/transactions";
import { AddIcon } from "../../../utils/icons";
import Link from "next/link";

const AddTransactionButton = () => {
  return (
    <Link href="/account/addTransaction">
      <AddIcon
        className="bg-catmauve p-2 rounded-full cursor-pointer"
        size={45}
      />
    </Link>
  );
};

export default AddTransactionButton;
