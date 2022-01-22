import React, { memo } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
function BookDetail() {
    // @ts-ignore
    const bookSelect = useSelector((state) => state.Book.bookSelect);
    return (
        <Card bg="info" text="white" className="shadow">
            {bookSelect.pending ? (
                <Card.Body>
                    <Card.Title>{"Select Some Book"}</Card.Title>
                </Card.Body>
            ) : (
                <Card.Body>
                    <Card.Title>{bookSelect.name}</Card.Title>
                    <Card.Subtitle>Genre: {bookSelect.genre}</Card.Subtitle>
                    <Card.Subtitle>
                        Author: {bookSelect.author.name}
                    </Card.Subtitle>
                    <Card.Subtitle>Age: {bookSelect.author.age}</Card.Subtitle>
                    <Card.Text>All Book by this Author</Card.Text>
                    <ul>
                        {bookSelect.author.books.map((value, index) => (
                            <li key={index}>{value.name}</li>
                        ))}
                    </ul>
                </Card.Body>
            )}
        </Card>
    );
}

export default memo(BookDetail);
