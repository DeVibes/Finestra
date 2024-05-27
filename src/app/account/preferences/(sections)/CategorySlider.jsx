import CategoryCard from "../../../../components/UI/CategoryCard";

const CategorySlider = ({ categories, className }) => {
  return (
    <section className={`${className} flex gap-3 p-2 overflow-auto`}>
      {categories.map(({ name, displayName }) => (
        <CategoryCard key={name} displayName={displayName} name={name} />
      ))}
    </section>
  );
};

export default CategorySlider;
