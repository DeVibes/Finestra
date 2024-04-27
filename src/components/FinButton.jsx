const FinButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded-lg border border-[#181926] bg-catmauve text-cattext1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default FinButton;
