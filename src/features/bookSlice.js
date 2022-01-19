import { createSlice } from "@reduxjs/toolkit";
import { GetBookByID, AddBook } from "../graphql_client";

const initialState = {
    name: "",
    genre: "",
    authorID: "",
};
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        add: (state, payload) => {
            AddBook(payload);
        },
        get: (state, payload) => {
            GetBookByID(payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, get } = bookSlice.actions;

export default bookSlice.reducer;
