import { getBooks, getAuthors } from "./queries";
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

export const GetAuthors = async () => {
    const result = await request(URL_API, getAuthors);
    return result.authors;
};
