import { useDispatch, useSelector } from "react-redux";
import { booksSelector, listBooksByUser } from "../store/booksSlice";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { CiRead, CiUnread } from "react-icons/ci";
import { useEffect, useState } from "react";
import { userSelector } from "../store/userSlice";
import { AppDispatch } from "../store/store";

const Home = () => {
  const books = useSelector(booksSelector);
  const user = useSelector(userSelector);
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate();
  useEffect(() => {
    // const loadBooks = async () => {
    if (user) {
      dispatch(listBooksByUser(user.id))
    }

    // }
    // loadBooks();

  }, [])
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
