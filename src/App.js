import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation";
import Authentication from "./Routes/Authentication/Authentication";
import Home from "./Routes/Home/Home";

const Shop = () => {
  return <h1>Hello Shop component .</h1>;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
