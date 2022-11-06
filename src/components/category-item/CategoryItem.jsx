import React from "react";
import "./category_item.scss";
const Category_tem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      <div className="category-container">
        {/* <img/> */}
        <div
          className="background-image"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div className="category-body-container">
          <h1>{title}</h1>
          <p>shop now</p>
        </div>
      </div>
    </>
  );
};

export default Category_tem;
