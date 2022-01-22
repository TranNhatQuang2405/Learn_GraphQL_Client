import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetBookByID, AddBook } from "../graphql_client";

export const getBookByID = createAsyncThunk("book/get", async (payload) => {
    // @ts-ignore
    const data = await GetBookByID(payload);
    return data;
});

export const addBook = createAsyncThunk("book/add", async (payload) => {
    const data = await AddBook(payload);
    return data;
});

const initialState = {
    input: {
        name: "",
        genre: "",
        authorID: "",
    },
    bookSelect: {
        name: "",
        genre: "",
        author: {
            id: "",
            name: "",
            age: "",
            books: [],
        },
        pending: true,
    },
};
export const bookSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        add: (state, payload) => {},
    },
    extraReducers: (builder) => {
        builder.addCase(getBookByID.pending, (state, action) => {
            state.bookSelect.pending = true;
        });
        builder.addCase(getBookByID.fulfilled, (state, action) => {
            state.bookSelect.name = action.payload.book.name;
            state.bookSelect.genre = action.payload.book.genre;
            state.bookSelect.author = action.payload.book.author;
            state.bookSelect.pending = false;
        });
        builder.addCase(addBook.fulfilled, (state, action) => {
            state.input.name = "";
            state.input.genre = "";
            state.input.authorID = "";
        });
    },
});

// Action creators are generated for each case reducer function
export const { add } = bookSlice.actions;

export default bookSlice.reducer;
