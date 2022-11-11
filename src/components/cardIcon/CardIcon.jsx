import React, { useContext } from "react";
import { CartContext } from "../../contexts/CardContex";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./CardIcon.scss";
const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const togglecartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      <div className=" cart-icon-container" onClick={togglecartOpen}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count">0</span>
      </div>
    </>
  );
};

export default CardIcon;
