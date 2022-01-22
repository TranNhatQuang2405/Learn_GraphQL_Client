// @ts-nocheck
import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import BookDetail from "./BookDetail";
import { useSelector, useDispatch } from "react-redux";
import { get } from "../features/bookSlice";
function BookList() {
    const books = useSelector((state) => state.All.books);
    const pending = useSelector((state) => state.All.pending);
    const dispatch = useDispatch();

    const handleClick = (e) => {
        const id = e.currentTarget.dataset.id;
        dispatch(get({ authorId: id }));
    };
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
                                    data-id={book.id}
                                    onClick={handleClick}
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
