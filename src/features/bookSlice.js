import { createSlice } from "@reduxjs/toolkit";
import { GetBooks } from "../graphql_client";

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
            console.log(payload);
        },
        set: (state, payload) => {},
    },
});

// Action creators are generated for each case reducer function
export const { add, set } = bookSlice.actions;

export default bookSlice.reducer;
