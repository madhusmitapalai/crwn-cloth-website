import React from "react";
import { useContext } from "react";
import "./Shop.scss";
import ProductCard from "../../components/product-card/ProductCard";
import { ProductsContext } from "../../contexts/Products";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products &&
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
    </div>
  );
};

export default Shop;
