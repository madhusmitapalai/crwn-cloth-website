import { initializeApp } from "firebase/app";

import "firebase/compat/auth";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_7zM7X5iGOMXQaqGYOInLGbRw1-MVsDE",
  authDomain: "crwn-clothing-db-98121.firebaseapp.com",
  projectId: "crwn-clothing-db-98121",
  storageBucket: "crwn-clothing-db-98121.appspot.com",
  messagingSenderId: "210244520014",
  appId: "1:210244520014:web:ff315348ca290906af5b1f",
  measurementId: "G-WNBTJHWDXJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const auth = getAuth();
// eslint-disable-next-line no-unused-vars
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocref = doc(db, "users", userAuth.uid);
  console.log(userDocref);
  const userSnapshot = await getDoc(userDocref);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocref, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creatin the user", error.message);
    }
  }
  return userDocref;
  //if user data exists
  //if user data does not exist
};
