import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetAll } from "../graphql_client";

//Thunk
export const fecthAllAPI = createAsyncThunk("all/load", async () => {
    //Giả lập đường truyền mạng
    const data = await new Promise((resolve) =>
        setTimeout(() => resolve(GetAll()), 2000)
    );
    return data;
});

const initialState = { books: [], authors: [], pending: false };
export const AllSlice = createSlice({
    name: "all",
    initialState,
    reducers: {
        add: (state) => {
            state.pending = false;
        },
        load: (state) => {
            state.pending = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fecthAllAPI.pending, (state, action) => {
            state.pending = true;
        });
        builder.addCase(fecthAllAPI.fulfilled, (state, action) => {
            state.books = [...action.payload.books];
            state.authors = [...action.payload.authors];
            state.pending = false;
        });
    },
});

// Action creators are generated for each case reducer function
export const { add, load } = AllSlice.actions;

export default AllSlice.reducer;
