import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import notesReducer from "./notesSlice"

const store = configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
