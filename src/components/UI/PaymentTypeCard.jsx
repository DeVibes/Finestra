const PaymentTypeCard = ({ name, ...props }) => (
    <div className="border border-catgreen rounded-lg p-5" {...props}>
        <span className="text-lg">{name}</span>
    </div>
)

export default PaymentTypeCard;