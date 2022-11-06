import React from "react";
import "./app.scss";
import Directory from "./components/Directory/Directory";
const App = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl: "images/hats.png",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl: "images/jackets.png",
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "images/sneakers.png",
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "images/womens.png",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "images/men.png",
    },
  ];
  return (
    <>
      <Directory categories={categories} />
    </>
  );
};

export default App;
