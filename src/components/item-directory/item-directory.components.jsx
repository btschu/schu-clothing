import CategoryItem from "../category-item/category-item.component";

import "./item-directory.styles.scss";

const ItemDirectory = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default ItemDirectory;
