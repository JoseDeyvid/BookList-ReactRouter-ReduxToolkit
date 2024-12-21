import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const bookSlice = createSlice({
  name: "books",
  initialState: [1, 2, 3],
  reducers: {},
});

export const booksSelector = (state: RootState) => state.books;

export default bookSlice.reducer;
