import { gql } from "graphql-request";

const getBooks = gql`
    query getBooksQuery {
        books {
            name
            id
        }
    }
`;

const getAuthors = gql`
    query getAuthorsQuery {
        authors {
            name
            id
            books {
                name
                id
            }
        }
    }
`;

const addBook = gql`
    mutation CreateBook($name: String, $genre: String, $authorID: ID!) {
        createBook(authorID: $authorID, name: $name, genre: $genre) {
            name
            genre
        }
    }
`;
const getBookByID = gql`
    query getBookByID($authorId: ID!) {
        book(id: $authorId) {
            name
            genre
        }
    }
`;

export { getBooks, getAuthors, addBook, getBookByID };
