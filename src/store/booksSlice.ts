import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Book } from "../utils/types";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";

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
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addBookByUser.fulfilled, (state, action) => {
      // Add user to the state array
      console.log("Payload: ", action.payload)
      console.log("Criado com sucesso.")
    }).addCase(addBookByUser.rejected, (state, action) => {
      console.log("algo deu errado!")
      console.log(action.error)
    })
  }
});


export const booksSelector = (state: RootState) => state.books;
export const { addBook, deleteBook, toogleBook } = bookSlice.actions;

export default bookSlice.reducer;

export const addBookByUser = createAsyncThunk(
  'books/addBook',
  async (book: Omit<Book, "id">) => {
    const { author, image_url, read, synopsis, title, user_id } = book
    const docRef = await addDoc(collection(db, "books"), {
      author,
      image_url,
      read,
      synopsis,
      title,
      user_id
    });
    console.log("Document written with ID: ", docRef.id);
    return { ...book, id: docRef.id };
  },
)