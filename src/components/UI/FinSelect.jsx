import React from "react";

const FinSelect = ({ className, items, label, icon: Icon, ...props }) => (
  <div className={`${className} flex items-center gap-2`}>
    <div className="w-1/2 flex items-center gap-2">
      {Icon && <Icon size={20} className="text-catgreen" />}
      <span className="text-md text-cat_text_primary">{label}</span>
    </div>
    <select
      name="category"
      id="category"
      className="w-full text-md text-cat_text_primary bg-transparent px-2 focus:outline-none border-b-2 border-catgreen"
      {...props}
    >
      {items.map((item) => (
        <option key={item.name} value={item.name}>
          {item.displayName}
        </option>
      ))}
    </select>
  </div>
);

export default FinSelect;
