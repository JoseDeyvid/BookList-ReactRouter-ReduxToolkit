import styles from "./Book.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { booksSelector, deleteBook, toogleBook } from "../store/booksSlice";
import { IoMdArrowDropright, IoMdArrowDropdown, IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";


const Book = () => {
  const [showPopup, setShowPopup] = useState(false);
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
        <IoIosArrowRoundBack />
      </button>
      {book ? (
        <>
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
          <div className={styles.notes}>
            <h3>Reader's Notes</h3>
            <div className={styles.note}>
              <h4>title</h4>
              <p>Note description</p>
            </div>
            <div className={styles.note}>
              <h4>title</h4>
              <p>Note description</p>
            </div>
            <div className={styles.note}>
              <h4>title</h4>
              <p>Note description</p>
            </div>
            <button className={styles.addNote} onClick={() => setShowPopup(!showPopup)}>
              {showPopup ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              Add a Note
            </button>
            {showPopup && <div className={styles.addNoteContainer}>
              <div className={styles.formControl}>
                <label htmlFor="title">Title *</label>
                <input type="text" placeholder="Type note title" />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="note">Nota *</label>
                <textarea placeholder="Type a comment..." />
              </div>
              <button>Add Note</button>
            </div>}

          </div>
        </>
      ) : (
        <p>Livro não encontrado.</p>
      )}
    </div>
  );
};

export default Book;
