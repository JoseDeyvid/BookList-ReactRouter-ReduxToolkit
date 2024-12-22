import { useSelector } from "react-redux";
import { booksSelector } from "../store/booksSlice";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { CiRead, CiUnread } from "react-icons/ci";
import { useState } from "react";

const Home = () => {
  const books = useSelector(booksSelector);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Lista de livros</h1>
      {books.length ? (
        <div className={styles.books}>
          {books.map((book) => (
            <div
              key={book.id}
              className={styles.book}
              onClick={() => navigate(`/book/${book.id}`)}
            >
              {book.read ? (
                <CiRead className={styles.read} />
              ) : (
                <CiUnread className={styles.unread} />
              )}

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
