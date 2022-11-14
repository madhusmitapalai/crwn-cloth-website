import React, { useContext } from "react";
import "./checkout.scss";
import { CartContext } from "../../contexts/CardContex";
import ChechoutItem from "../../components/chechout-Items/ChechoutItem";
const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  console.log(cartTotal);
  return (
    <>
      <div className="checkout-container">
        <div className="checkout-header">
          <div className="header-block">
            <span>description</span>
          </div>
          <div className="header-block">
            <span>quantity</span>
          </div>
          <div className="header-block">
            <span>price</span>
          </div>
          <div className="header-block">
            <span>remove</span>
          </div>
        </div>

        {cartItems &&
          cartItems.map((cartItem) => {
            return <ChechoutItem key={cartItem.id} cartItem={cartItem} />;
          })}
        <span className="total">total : ${cartTotal}</span>
      </div>
    </>
  );
};

export default Checkout;
