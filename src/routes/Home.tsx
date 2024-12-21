import React from "react";
import { useSelector } from "react-redux";
import { booksSelector } from "../store/booksSlice";

const Home = () => {
  const books = useSelector(booksSelector);
  return (
    <div>
      <h1>Lista de livros</h1>
      {books.length ? (
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <img src={book.image_url} alt={book.title} />
              <p>{book.author}</p>
              <h6>{book.title}</h6>
            </div>
          ))}
        </div>
      ) : (
        <p>Não há livros</p>
      )}
    </div>
  );
};

export default Home;
