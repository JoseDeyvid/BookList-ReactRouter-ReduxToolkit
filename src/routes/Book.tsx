import styles from "./Book.module.scss";
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
    <div className={styles.container}>
      <button onClick={() => navigate("/")} className={styles.backBtn}>
        Voltar
      </button>
      {book ? (
        <div className={styles.book}>
          <img src={book.image_url} alt={book.title} />
          <div className={styles.infos}>
            <h3>{book.title}</h3>
            <h4>{book.author}</h4>
            <p>{book.synopsis}</p>
            <div className={styles.actions}>
              <div className={styles.inputControl}>
                <input
                  type="checkbox"
                  checked={book.read}
                  onChange={() => dispatch(toogleBook(book.id))}
                />
                <label htmlFor="">{book.read ? "Lido" : "Não lido"}</label>
              </div>
              <button onClick={handleDeleteBook}>Deletar</button>
            </div>
          </div>
        </div>
      ) : (
        <p>Livro não encontrado.</p>
      )}
    </div>
  );
};

export default Book;
