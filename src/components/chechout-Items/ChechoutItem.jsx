import React, { useContext } from "react";
import "./checkoutitem.scss";
import { CartContext } from "../../contexts/CardContex";
const ChechoutItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  const { cartItemToClear, addItemToCart, rempoveItemFromCart } =
    useContext(CartContext);
  const clearItemHandler = () => cartItemToClear(cartItem);
  const addItemTocartHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => rempoveItemFromCart(cartItem);
  return (
    <>
      <div className="checkout-item-container">
        <div className="image-container">
          <img src={imageUrl} alt={`${name}`} />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="errow" onClick={removeItemHandler}>
            {" "}
            &#10094;
          </div>

          <span className="value">{quantity} </span>
          <div className="errow" onClick={addItemTocartHandler}>
            &#10095;
          </div>
        </span>
        <span className="price">{price}</span>
        <div className="remove-button" onClick={clearItemHandler}>
          &#10005;
        </div>
      </div>
    </>
  );
};

export default ChechoutItem;
