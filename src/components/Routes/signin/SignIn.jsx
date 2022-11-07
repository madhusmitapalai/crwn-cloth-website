import React from "react";
import { signInWithGooglePopup } from "../../../utils/firebase/Firebase";
import {
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../../utils/firebase/Firebase";
const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocref = createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUsers = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };

  return (
    <>
      <h1>sign in</h1>
      <button onClick={logGoogleuser}>button signin with google</button>
      <button onClick={logGoogleRedirectUsers}>
        button signin with google redirect
      </button>
    </>
  );
};

export default SignIn;
