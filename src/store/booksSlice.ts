import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Book } from "../utils/types";

const initialState: Book[] = [];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      const newBook = action.payload;
      newBook.id = state.length
        ? Math.max(...state.map((book) => book.id)) + 1
        : 0;

      newBook.read = false;
      state.push(newBook);
    },
  },
});

export const booksSelector = (state: RootState) => state.books;
export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
