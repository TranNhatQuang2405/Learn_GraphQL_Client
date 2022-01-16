import { Container } from "react-bootstrap";
import BookList from "./components/BookList";
import Forms from "./components/Forms";
function App() {
    return (
        <Container
            className="py-3 mt-3"
            style={{ backgroundColor: "lightskyblue" }}
        >
            <h1 className="text-center text-warning mb-3">My Book</h1>
            <hr />
            <Forms />
            <hr />
            <BookList />
        </Container>
    );
}

export default App;
