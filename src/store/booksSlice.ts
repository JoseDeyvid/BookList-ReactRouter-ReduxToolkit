import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Book } from "../utils/types";

const initialState: Book[] = [];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Omit<Book, "id">>) => {
      const id = state.length
        ? Math.max(...state.map((book) => book.id)) + 1
        : 0;
      state.push({ ...action.payload, id });
    },
    deleteBook: (state, action: PayloadAction<number>) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toogleBook: (state, action: PayloadAction<number>) => {
      state.map((book) => {
        if (book.id === action.payload) book.read = !book.read;
      });
    },
  },
});

export const booksSelector = (state: RootState) => state.books;
export const { addBook, deleteBook, toogleBook } = bookSlice.actions;

export default bookSlice.reducer;
