const FinButton = ({ children, className, ...props }) => {
  const { disabled } = props;
  return (
    <button
      className={`rounded-lg p-2 border border-[#181926] ${disabled ? "bg-catsub1" : "bg-catmauve"} text-cattext1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FinButton;
