import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { addBook, addBookByUser, booksSelector } from "../store/booksSlice";
import { Book } from "../utils/types";
import { useNavigate } from "react-router-dom";
import styles from "./AddBook.module.scss";
import { getAuth } from "firebase/auth";

const AddBook = () => {
  const books = useSelector(booksSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const auth = getAuth();
  const user = auth.currentUser

  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleAddBook = () => {
    if (user) {
      const newBook: Omit<Book, "id"> = {
        author,
        image_url: cover,
        read: false,
        title,
        synopsis,
        user_id: user.uid,
      };

      // dispatch(addBooks(newBook));
      dispatch(addBookByUser(newBook))
      navigate("/");
    }

  };
  return (
    <div className={styles.container}>
      <Header />
      <h1>Adicionando novo livro</h1>
      <div className={styles.formControl}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          placeholder="Digite o título do livro..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
          id="title"
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="cover">Capa:</label>
        <input
          type="text"
          placeholder="Digite a url da capa do livro..."
          value={cover}
          onChange={(e) => setCover(e.target.value)}
          name="cover"
          id="cover"
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          placeholder="Digite o autor do livro..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          name="author"
          id="author"
        />
      </div>
      <div className={styles.formControl}>
        <label htmlFor="synopsis">Sinopse:</label>
        <textarea
          placeholder="Digite a sinopse do livro..."
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
          name="synopsis"
          id="synopsis"
        />
      </div>
      <button onClick={handleAddBook}>Salvar livro</button>
    </div>
  );
};

export default AddBook;
