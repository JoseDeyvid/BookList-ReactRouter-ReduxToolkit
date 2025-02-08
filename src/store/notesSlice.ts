import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../utils/types";
import { RootState } from "./store";


const initialState: Note[] = [];

const notesSlice = createSlice({
    initialState,
    name: "notes",
    reducers: {
        addNote: (state, action: PayloadAction<Omit<Note, "id">>) => {
            const id = state.length
                ? Math.max(...state.map((note) => Number(note.id))) + 1
                : 0;
            state.push({ ...action.payload, id });
        },

    }
})

export const notesSelector = (state: RootState) => state.notes;
export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;