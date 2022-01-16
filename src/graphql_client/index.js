import { getBooks } from "./queries";
import { request } from "graphql-request";

export const GetBooks = async () => {
    const result = await request("http://localhost:4000/graphql", getBooks);
    return result.books;
};
