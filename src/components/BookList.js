// @ts-nocheck
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BookDetail from "./BookDetail";
import { useSelector } from "react-redux";
function BookList() {
    const books = useSelector((state) => state.ManageBooks.books);
    const pending = useSelector((state) => state.ManageBooks.pending);

    return (
        <Row>
            <Col xs={8}>
                <Row xs={1} md={3}>
                    {pending ? (
                        <Card bg="warning">Waiting For Data...</Card>
                    ) : (
                        books.map((book, index) => (
                            <Col className="mb-3" key={book.id}>
                                <Card
                                    border="info"
                                    text="info"
                                    className="text-center shadow"
                                >
                                    <Card.Body>{book.name}</Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Col>
            <Col>
                <BookDetail />
            </Col>
        </Row>
    );
}

export default BookList;
// {data.map((book, index) => (
//     <Col className="mb-3" key={book.id}>
//         <Card
//             border="info"
//             text="info"
//             className="text-center shadow"
//         >
//             <Card.Body>{book.name}</Card.Body>
//         </Card>
//     </Col>
// ))}
