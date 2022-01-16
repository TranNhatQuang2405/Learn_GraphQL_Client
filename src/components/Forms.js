import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function Forms() {
    return (
        <Row>
            <Col>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Book name..."
                            name="bookname"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Book genre..."
                            name="genre"
                        ></Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control
                            as="select"
                            className="form-select"
                            name="selectAuthor"
                        >
                            <option disabled>Select author</option>
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

export default Forms;
// {data.authors.map((author) => (
//     <option key={author.id} value={author.id}>
//         {author.name}
//     </option>
// ))}
