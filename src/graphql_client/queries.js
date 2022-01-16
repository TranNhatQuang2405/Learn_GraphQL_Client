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

export { getBooks, getAuthors };
