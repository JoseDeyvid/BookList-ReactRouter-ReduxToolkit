import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../utils/types";
import { RootState } from "./store";


const initialState: User | null = null;

const userSlice = createSlice({
    initialState: initialState as User | null,
    name: "user",
    reducers: {
        getUser: (state) => {
            return state
        },
        setUser: (_state, action: PayloadAction<User | null>) => {
            return action.payload
        }
    }
})

export const userSelector = (state: RootState) => state.user
export const { getUser, setUser } = userSlice.actions;

export default userSlice.reducer;