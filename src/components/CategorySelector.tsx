import { Dispatch } from "react";
import { NewsCategory } from "../types";

const CategoryButton = ({
  category,
  setter,
  activeCategory,
}: {
  category: NewsCategory;
  activeCategory: NewsCategory;
  setter: Dispatch<NewsCategory>;
}) => (
  <button
    className={`${
      activeCategory === category ? "bg-black text-white hover:bg-gray-800" : ""
    } px-3 py-1 mx-2 hover:bg-gray-200 rounded uppercase`}
    onClick={() => setter(category)}
  >
    {category}
  </button>
);

const CategorySelector = ({
  category,
  setCategory,
}: {
  category: NewsCategory;
  setCategory: Dispatch<NewsCategory>;
}) => {
  return (
    <div className="p-2 flex lg:justify-center overflow-auto border-y-2 border-double mb-6">
      <CategoryButton
        activeCategory={category}
        category="general"
        setter={setCategory}
      />
      <CategoryButton
        activeCategory={category}
        category="business"
        setter={setCategory}
      />
      <CategoryButton
        activeCategory={category}
        category="entertainment"
        setter={setCategory}
      />
      <CategoryButton
        activeCategory={category}
        category="health"
        setter={setCategory}
      />
      <CategoryButton
        activeCategory={category}
        category="science"
        setter={setCategory}
      />
      <CategoryButton
        activeCategory={category}
        category="sports"
        setter={setCategory}
      />
      <CategoryButton
        activeCategory={category}
        category="technology"
        setter={setCategory}
      />
    </div>
  );
};

export default CategorySelector;
