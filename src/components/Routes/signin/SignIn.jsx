import React from "react";
import { signInWithGooglePopup } from "../../../utils/firebase/Firebase";
import {
  createUserDocumentFromAuth,
  userDocref,
} from "../../../utils/firebase/Firebase";
const SignIn = () => {
  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userDocref = createUserDocumentFromAuth(user);
  };
  return (
    <>
      <h1>sign in</h1>
      <button onClick={logGoogleuser}>button signin with google</button>
    </>
  );
};

export default SignIn;
