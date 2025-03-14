import styles from "./App.module.scss";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import AddBook from "./routes/AddBook";
import { useSelector } from "react-redux";
import WithoutUser from "./routes/WithoutUser.tsx";
import { userSelector } from "./store/userSlice.ts";
import SingleBook from "./routes/SingleBook.tsx";

function App() {
  const user = useSelector(userSelector)
  return (
    <div className={styles.container}>
      {user ?
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="add-book" element={<AddBook />} />
            <Route path="book/:id" element={<SingleBook />} />
            <Route path="*" element={<h1>Page not found</h1>} />
          </Routes>
        </BrowserRouter>
        :
        <WithoutUser />
      }
    </div>
  );
}

export default App;
