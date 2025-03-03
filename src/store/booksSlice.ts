import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Book } from "../utils/types";

import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { data } from "react-router-dom";

const initialState: Book[] = [];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action: PayloadAction<string>) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toogleBook: (state, action: PayloadAction<string>) => {
      state.map((book) => {
        if (book.id === action.payload) book.read = !book.read;
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBookByUser.fulfilled, (state, action) => {
      console.log("Payload: ", action.payload)
      console.log("Criado com sucesso.")
    }).addCase(addBookByUser.rejected, (state, action) => {
      console.log("algo deu errado!")
      console.log(action.error)
    }).addCase(listBooksByUser.fulfilled, (state, action) => {
      return action.payload
    })
  }
});


export const booksSelector = (state: RootState) => state.books;
export const { deleteBook, toogleBook } = bookSlice.actions;

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

export const listBooksByUser = createAsyncThunk(
  'books/listBooksByUser',
  async (user_id: string) => {
    const books: Book[] = []
    const q = query(collection(db, "books"), where("user_id", "==", user_id));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      books.push({id: doc.id, ...doc.data() as Omit<Book, "id">})
    }, []);
    return books;
  },
)