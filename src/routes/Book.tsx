import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { booksSelector, deleteBook, toogleBook } from "../store/booksSlice";

const Book = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(booksSelector).filter(
    (book) => book.id === Number(id)
  )[0];

  const handleDeleteBook = () => {
    dispatch(deleteBook(book.id));
    navigate("/");
  };

  return (
    <div>
      <button onClick={() => navigate("/")}>Voltar</button>
      {book ? (
        <div>
          <img src={book.image_url} alt={book.title} />
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
          <p>{book.synopsis}</p>
          <input
            type="checkbox"
            checked={book.read}
            onChange={() => dispatch(toogleBook(book.id))}
          />
          <button onClick={handleDeleteBook}>Deletar</button>
        </div>
      ) : (
        <p>Livro não encontrado.</p>
      )}
    </div>
  );
};

export default Book;
