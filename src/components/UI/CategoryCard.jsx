"use client";
import React from "react";
import getCategoryIcon from "../../utils/catIconMatcher";

const CategoryCard = ({ className, displayName, name, ...props }) => {
  const Icon = getCategoryIcon(name);
  return (
    <div className="flex flex-col items-center border border-catgreen rounded-lg p-1" {...props}>
      <Icon className="text-catgreen m-2" size={65}/>
      <span className="text-sm">{displayName}</span>
    </div>
  );
};

export default CategoryCard;
