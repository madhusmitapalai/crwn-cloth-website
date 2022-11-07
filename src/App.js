import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigaion/Navigation";
import Home from "./components/Routes/Home/Home";
import SignIn from "./components/Routes/signin/SignIn";

const Shop = () => {
  return <h1>Hello Shop component .</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
