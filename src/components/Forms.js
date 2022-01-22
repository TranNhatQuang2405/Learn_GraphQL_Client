// @ts-nocheck
import React, { memo } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addBook } from "../features/bookSlice";
import { fecthAllAPI } from "../features/AllSlice";

function Forms() {
    const inputBook = useSelector((state) => state.Book.input);
    const authors = useSelector((state) => state.All.authors);
    const [book, setBook] = useState(inputBook);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(addBook(book));
        setBook(inputBook);
        await dispatch(fecthAllAPI());
    };
    return (
        <Row>
            <Col>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Book name..."
                            name="name"
                            value={book.name}
                            onChange={handleChange}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Book genre..."
                            name="genre"
                            value={book.genre}
                            onChange={handleChange}
                            required
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            as="select"
                            className="form-select"
                            name="authorID"
                            value={book.authorID || ""}
                            onChange={handleChange}
                            required={book.authorID ? false : true}
                        >
                            <option disabled value="">
                                Select author
                            </option>
                            {authors.map((author) => (
                                <option key={author.id} value={author.id}>
                                    {author.name}
                                </option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Button className="float-end" variant="info" type="submit">
                        Add Book
                    </Button>
                </Form>
            </Col>
            <Col>
                <Form>
                    <Form.Group className="mb-3 invisible">
                        <Form.Control />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Author Name..."
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="number"
                            min={18}
                            placeholder="Age..."
                        ></Form.Control>
                    </Form.Group>
                    <Button className="float-end" variant="info" type="submit">
                        Add Author
                    </Button>
                </Form>
            </Col>
        </Row>
    );
}

export default memo(Forms);
