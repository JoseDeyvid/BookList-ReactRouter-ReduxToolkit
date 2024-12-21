import React, { useState } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { addBook, booksSelector } from "../store/booksSlice";
import { Book } from "../utils/types";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const books = useSelector(booksSelector);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [cover, setCover] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");

  const handleAddBook = () => {
    const newBook: Book = {
      author,
      id: books.length ? Math.max(...books.map((book) => book.id)) + 1 : 0,
      image_url: cover,
      read: false,
      title,
      synopsis,
    };

    dispatch(addBook(newBook));
    navigate("/");
  };
  return (
    <div>
      <Header />
      <h1>Adicionando novo livro</h1>
      <div>
        <label htmlFor="title">Título: *</label>
        <input
          type="text"
          placeholder="Digite o título do livro..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cover">Capa: *</label>
        <input
          type="text"
          placeholder="Digite a url da capa do livro..."
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Autor: *</label>
        <input
          type="text"
          placeholder="Digite o autor do livro..."
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="synopsis">Título:</label>
        <textarea
          placeholder="Digite a sinopse do livro..."
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
      </div>
      <button onClick={handleAddBook}>Salvar livro</button>
    </div>
  );
};

export default AddBook;
