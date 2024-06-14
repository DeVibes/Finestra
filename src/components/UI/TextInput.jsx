import PropTypes from "prop-types";
import { DefaultCategoryIcon } from "../../utils/icons";

const TextInput = ({ config, className, ...props }) => {
  const {
    id,
    label,
    disabled,
    value = "",
    icon: Icon = DefaultCategoryIcon,
  } = config;
  return (
    <div className={`${className} flex items-center gap-2 w-full`}>
      <div className="w-1/2 flex items-center gap-2">
        <Icon size={20} className="text-catgreen" />
        <span className="text-md text-cat_text_primary">{label}</span>
      </div>
      <input
        type="text"
        name={id}
        id={id}
        className={`w-full text-md text-cat_text_primary bg-transparent px-2 focus:outline-none ${
          !disabled && "border-b-2 border-catgreen"
        }`}
        disabled={disabled || false}
        defaultValue={value}
        {...props}
      />
    </div>
  );
};

TextInput.propTypes = {
  config: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    icon: PropTypes.element,
  }),
};

export default TextInput;

const TextInput3 = ({ field, ...props }) => {
  return (
    <div {...props}>
      <label
        htmlFor={field.id}
        className="block text-md text-catgreen font-bold py-2"
      >
        {field.label}
      </label>
      <input
        type="text"
        name={field.id}
        id={field.id}
        className="w-full p-2 border border-cat_text_primary rounded-lg text-lg text-cat_text_primary bg-transparent focus:ring-blue-500 focus:border-blue-500"
        disabled={field.disabled || false}
        value={field.value}
      />
    </div>
  );
};

const TextInput2 = ({ field, className, ...props }) => {
  return (
    <div className={`relative ${className}`} {...props}>
      <input
        type="text"
        id={field.id}
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        value={field.value}
      />
      <label
        htmlFor={field.id}
        className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {field.label}
      </label>
    </div>
  );
};
