import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../utils/types";
import { RootState } from "./store";


const initialState: Note[] = [];

const notesSlice = createSlice({
    initialState,
    name: "notes",
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            const newNote = action.payload;
            console.log(newNote)
            newNote.id = state.length
                ? Math.max(...state.map((note) => Number(note.id))) + 1
                : 0;
            state.push(newNote);
        },

    }
})

export const notesSelector = (state: RootState) => state.notes;
export const {addNote } = notesSlice.actions;

export default notesSlice.reducer;