import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addBook, booksSelector } from "../store/booksSlice";
import { Book } from "../utils/types";
import { useNavigate } from "react-router-dom";
import styles from "./AddBook.module.scss";

const AddBook = () => {
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleAddBook = () => {
    const newBook = {
      author,
      image_url: cover,
      read: false,
      title,
      synopsis,
    };

    dispatch(addBook(newBook));
    navigate("/");
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
