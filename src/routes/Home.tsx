import React from "react";
import { useSelector } from "react-redux";
import { booksSelector } from "../store/booksSlice";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const books = useSelector(booksSelector);
  const navigate = useNavigate();
  console.log(books);
  return (
    <div>
      <Header />
      <h1>Lista de livros</h1>
      {books.length ? (
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <img
                src={book.image_url}
                alt={book.title}
                onClick={() => navigate(`/book/${book.id}`)}
              />
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
