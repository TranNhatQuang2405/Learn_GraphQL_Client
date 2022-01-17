import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetBooks } from "../graphql_client";

//Thunk
export const fecthBookAPI = createAsyncThunk("book/fill", async () => {
    //Giả lập đường truyền mạng
    const data = await new Promise((resolve) =>
        setTimeout(() => resolve(GetBooks()), 2000)
    );
    return data;
});

const initialState = { books: [], pending: false };
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        add: (state) => {},
        load: (state) => {},
    },
    extraReducers: (builder) => {
        builder.addCase(fecthBookAPI.pending, (state, action) => {
            state.pending = true;
        });
        builder.addCase(fecthBookAPI.fulfilled, (state, action) => {
            state.books = [...action.payload];
            state.pending = false;
        });
    },
});

// Action creators are generated for each case reducer function
export const { add, load } = bookSlice.actions;

export default bookSlice.reducer;
