const FinInput = ({
  className,
  icon: Icon,
  label,
  value,
  disabled,
  ...props
}) => (
  <div className={`${className} flex items-center gap-2`}>
    <div className="w-1/2 flex items-center gap-2">
      {Icon && <Icon size={20} className="text-catgreen" />}
      <span className="text-md text-cat_text_primary">{label}</span>
    </div>
    <input
      className={`w-full text-md bg-transparent px-2 focus:outline-none ${
        !disabled && "border-b-2 border-catgreen"
      }`}
      {...props}
    />
  </div>
);
export default FinInput;
