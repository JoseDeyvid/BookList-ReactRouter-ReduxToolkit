import React from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addBook, booksSelector } from "../store/booksSlice";
import { Book } from "../utils/types";

const AddBook = () => {
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();
  const handleAddBook = () => {
    const newBook: Book = {
      author: "author2",
      id: books.length ? Math.max(...books.map((book) => book.id)) + 1 : 0,
      image_url:
        "https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg",
      read: false,
      title: "title2",
    };

    dispatch(addBook(newBook));
  };
  return (
    <div>
      <Header />
      <button onClick={handleAddBook}>Adicionar livro</button>
    </div>
  );
};

export default AddBook;
