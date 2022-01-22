import { getBooks, getAuthors, addBook, getBookByID } from "./queries";
import { request } from "graphql-request";

const URL_API = process.env.REACT_APP_URL_API;

export const GetAll = async () => {
    const books = await GetBooks();
    const authors = await GetAuthors();
    return { books, authors };
};

export const GetBooks = async () => {
    const result = await request(URL_API, getBooks);
    return result.books;
};

export const GetBookByID = async ({ payload }) => {
    console.log(payload);
    const result = await request(URL_API, getBookByID, payload);
    console.log(result);
    return result;
};
export const GetAuthors = async () => {
    const result = await request(URL_API, getAuthors);
    return result.authors;
};
export const AddBook = async ({ payload }) => {
    console.log(payload);
    const result = await request(URL_API, addBook, payload);
    console.log(result);
    return result;
};
