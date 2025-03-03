import styles from "./Book.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { booksSelector, deleteBook, toogleBook } from "../store/booksSlice";
import { IoMdArrowDropright, IoMdArrowDropdown, IoIosArrowRoundBack } from "react-icons/io";
import { useState } from "react";
import { addNote, notesSelector } from "../store/notesSlice";


const Book = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const book = useSelector(booksSelector).filter(
    (book) => book.id === id
  )[0];
  const notes = useSelector(notesSelector).filter(
    (note) => note.book_id === Number(id)
  );

  const handleDeleteBook = () => {
    dispatch(deleteBook(book.id));
    navigate("/");
  };

  const handleAddNote = () => {
    if (noteTitle.trim() && noteBody.trim()) {
      const newNote = {
        book_id: Number(id),
        title: noteTitle,
        body: noteBody,
      }
      dispatch(addNote(newNote));
    }

  }
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
                  <label>{book.read ? "Lido" : "Não lido"}</label>
                </div>
                <button onClick={handleDeleteBook}>Deletar</button>
              </div>
            </div>
          </div>
          <div className={styles.notes}>
            <h3>Reader's Notes</h3>
            {notes.length ? notes.map((note) => (
              <div className={styles.note} key={note.id}>
                <h4>{note.title}</h4>
                <p>{note.body}</p>
              </div>
            )) : <p>Não há notas para esse livro.</p>}
            <button className={styles.addNote} onClick={() => setShowPopup(!showPopup)}>
              {showPopup ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
              Add a Note
            </button>
            {showPopup && <div className={styles.addNoteContainer}>
              <div className={styles.formControl}>
                <label htmlFor="title">Title *</label>
                <input required name="title" type="text" placeholder="Type note title" value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
              </div>
              <div className={styles.formControl}>
                <label htmlFor="note">Nota *</label>
                <textarea required name="note" placeholder="Type a comment..." value={noteBody} onChange={(e) => setNoteBody(e.target.value)} />
              </div>
              <button onClick={handleAddNote}>Add Note</button>
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
