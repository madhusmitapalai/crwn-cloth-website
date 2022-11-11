import React from "react";
import "./CardDropDown.scss";
import Button from "../../components/button/Button";
const CardDropDown = () => {
  return (
    <>
      <div className="cart-dropdown-container">
        <div className="cart-items">
          <Button>go to checkout</Button>
        </div>
      </div>
    </>
  );
};

export default CardDropDown;
