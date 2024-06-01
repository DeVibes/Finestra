import CategoryCard from "../../../../components/UI/CategoryCard";

const CategorySlider = ({ categories, className }) => {
  return (
    <section className={`${className}`}>
      <div className="flex justify-between">
        <h1 className="text-catmauve text-xl mb-1">Account Categories</h1>
        {/* <AddCategoryButton /> */}
      </div>
      <div className="flex gap-3 py-2 overflow-auto">
        {categories && categories.map(({ name, displayName }) => (
          <CategoryCard key={name} displayName={displayName} name={name} />
        ))}
      </div>
    </section>
  );
};

export default CategorySlider;
