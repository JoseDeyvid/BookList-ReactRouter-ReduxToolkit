import React from "react";
import { useSelector } from "react-redux";
import { booksSelector } from "../store/booksSlice";

const Home = () => {
  const books = useSelector(booksSelector);
  console.log(books);
  return <div>Home</div>;
};

export default Home;
