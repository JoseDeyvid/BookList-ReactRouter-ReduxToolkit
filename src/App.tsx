import styles from "./App.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AddBook from "./routes/AddBook";
import Book from "./routes/Book";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import WithoutUser from "./routes/WithoutUser.tsx";

function App() {
  return (
    <div className={styles.container}>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="book/:id" element={<Book />} />
            <Route path="login" element={<WithoutUser/>} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
