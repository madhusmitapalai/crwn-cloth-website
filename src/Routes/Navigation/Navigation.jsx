import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown_logo.svg";
const Navigation = () => {
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
          <Link className="nav-link" to="/auth">
            shignIn
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
