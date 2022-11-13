import React, { useContext } from "react";
import "./CardDropDown.scss";
import { CartContext } from "../../contexts/CardContex";

import Button from "../../components/button/Button";
import CardtItemComponent from "../cartItemComponent/CardtItemComponent";
const CardDropDown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          {cartItems.length ? (
            cartItems.map((cartItem, id) => (
              <CardtItemComponent cartItem={cartItem} key={id} />
            ))
          ) : (
            <span className="empty-message">Your cart is empty</span>
          )}
        </div>
        <Button>go to checkout</Button>
      </div>
    </>
  );
};

export default CardDropDown;
