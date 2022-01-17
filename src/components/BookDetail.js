import React from "react";
import { Card } from "react-bootstrap";

function BookDetail() {
    return (
        <Card bg="info" text="white" className="shadow">
            <Card.Body>
                <Card.Title>Vợ Nhặt</Card.Title>
                <Card.Subtitle>Truyện</Card.Subtitle>
                <Card.Text>Nam Cao</Card.Text>
                <Card.Text>Age: 98</Card.Text>
                <Card.Text>All Book by this Author</Card.Text>
                <ul>
                    <li>Chí Phèo</li>
                    <li>Lão Hạc</li>
                </ul>
            </Card.Body>
        </Card>
    );
}

export default BookDetail;
