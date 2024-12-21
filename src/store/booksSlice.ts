import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Book } from "../utils/types";

const initialState: Book[] = [];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
});

export const booksSelector = (state: RootState) => state.books;

export default bookSlice.reducer;
