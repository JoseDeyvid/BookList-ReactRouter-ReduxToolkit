import { useSelector } from "react-redux";
import { booksSelector } from "../store/booksSlice";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.scss";
import { CiRead, CiUnread } from "react-icons/ci";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

const Home = () => {
  const books = useSelector(booksSelector);
  const navigate = useNavigate();
  useEffect(() => {
    const loadBooks = async () => {
      const q = query(collection(db, "books"), where("user_id", "==", "3"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      }, []);
    }

    loadBooks();

  })
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
