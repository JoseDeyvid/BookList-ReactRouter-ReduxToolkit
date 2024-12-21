// import styles from "./App.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AddBook from "./routes/AddBook";
import Book from "./routes/Book";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="add-book" element={<AddBook />} />
          <Route path="book/:id" element={<Book />} />
          <Route path="*" element={<h1>Page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
