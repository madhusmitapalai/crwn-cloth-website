import React from "react";
import "./Directory.scss";
import CategoryItem from "../category-item/CategoryItem";
const Directory = ({ categories }) => {
  return (
    <>
      <div className="directory-container ">
        {categories &&
          categories.map((item) => (
            <CategoryItem key={item.id} category={item} />
          ))}
      </div>
    </>
  );
};

export default Directory;
