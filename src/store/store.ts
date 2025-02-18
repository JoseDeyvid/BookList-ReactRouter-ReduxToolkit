import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import notesReducer from "./notesSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    books: booksReducer,
    notes: notesReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
