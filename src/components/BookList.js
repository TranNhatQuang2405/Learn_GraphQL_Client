import React from "react";
import { Row, Col } from "react-bootstrap";
import BookDetail from "./BookDetail";

function BookList() {
    return (
        <Row>
            <Col xs={8}>
                <Row xs={1} md={3}></Row>
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
