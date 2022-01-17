import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";
import allReducer from "./features/AllSlice";
export const store = configureStore({
    reducer: {
        Book: bookReducer,
        All: allReducer,
    },
});
