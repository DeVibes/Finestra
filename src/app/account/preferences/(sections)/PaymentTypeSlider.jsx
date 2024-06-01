// import { useState } from "react";
import PaymentTypeCard from "../../../../components/UI/PaymentTypeCard";
import SliderAddButton from "../../../../components/UI/SliderAddButton";
// import AddPaymentForm from "./AddPaymentForm";

const PaymentTypeSlider = ({ paymentTypes, className }) => {
  // const [showAddPaymentType, setShowAddPaymentType] = useState(false);
  const handleAddClick = () => {
    setShowAddPaymentType(!showAddPaymentType);
  }
  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <h1 className="text-catmauve text-xl mb-1">Account Payment Types</h1>
        {/* <SliderAddButton onClick={handleAddClick} /> */}
      </div>
      {/* <AddPaymentForm isShown={showAddPaymentType} /> */}
      <div className="flex gap-3 py-2 overflow-auto">
        {paymentTypes && paymentTypes.map((pt) => (
          <PaymentTypeCard key={pt} name={pt} />
        ))}
      </div>
    </section>
  );
};

export default PaymentTypeSlider