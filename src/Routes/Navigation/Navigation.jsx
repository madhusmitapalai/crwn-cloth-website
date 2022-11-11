import React, { useContext } from "react";
import { UserContext } from "../../contexts/Context";
import { CartContext } from "../../contexts/CardContex";

import { signOutUsers } from "../../utils/firebase/Firebase";

import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown_logo.svg";

import CardIcon from "../../components/cardIcon/CardIcon";
import CardDropDown from "../../components/cardDropDown/CardDropDown";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navigation">
        <Link to="/">
          <CrwnLogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            shop
          </Link>
          <Link className="nav-link" to="/contact">
            contact
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUsers}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              signin
            </Link>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CardDropDown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
