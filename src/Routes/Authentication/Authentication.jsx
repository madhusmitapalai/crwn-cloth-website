import React from "react";
import "./Authentication.scss";
import SignUpForm from "../../components/signUp/SignUpForm";
import SignInForm from "../../components/signIn/SignInForm";
const Authentication = () => {
  return (
    <>
      <div className="authentication-container">
        <SignInForm />
        <SignUpForm />
      </div>
    </>
  );
};

export default Authentication;
