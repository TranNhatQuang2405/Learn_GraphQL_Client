import { createSlice } from "@reduxjs/toolkit";
// import { GetBooks } from "../graphql_client";

const initialState = {
    // books: GetBooks,
};

export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        add: (state) => {},
        load: (state) => {},
    },
});

// Action creators are generated for each case reducer function
export const { add, load } = bookSlice.actions;

export default bookSlice.reducer;
