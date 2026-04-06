import { books } from './Data';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
import { useState } from 'react';

function Book() {
    const [choncategories,setchoncategories] = useState("All Categories");
    const [chonauthors,setchonauthors] = useState("All Authors");
    const [search,setsearch] = useState("");

    const categories = ["All Categories", ...new Set(books.map((b) => b.category))];
    const authors = ["All Authors", ...new Set(books.map((b) => b.author))];

// const chonBook = choncategories === "All Categories" ? books : books.filter((b) => b.category === choncategories);
const chonBooks = books.filter((b) => {
    const matchCategory = choncategories === "All Categories" || b.category === choncategories;
    const matchTitle = b.title.toLocaleLowerCase().includes(search.toLocaleLowerCase());
    const matchAuthor = chonauthors === "All Authors" || b.author === chonauthors;
    return matchCategory && matchTitle && matchAuthor;
});

function handleCategories(e) {
    setchoncategories(e.target.value);
}

function handleAuthors(e) {
    setchonauthors(e.target.value);
}

function handleSearch(e) {
    setsearch(e.target.value);
}


    return (
        <>
            <Row>
                <h1 style={{ textAlign: 'center' }}>List or books</h1>
            </Row>
            <Row >
                <Col md={3}>
                    <Form.Select
                    value={choncategories} onChange={handleCategories}>
                        {categories?.map((c) => (
                            <option> {c}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select value={chonauthors} onChange={handleAuthors}>
                        {
                            authors?.map((author) => (
                                <option> {author}</option>
                            ))

                        }
                    </Form.Select>
                </Col>
                <Col md={6}>
                    <Form.Control
                        type='search'
                        name='search'
                        placeholder='enter title to search'
                        value={search}
                        onChange={handleSearch} />
                </Col>



            </Row>
            <Row className='d-flex justify-content-end'>

                <Button className="m-2" variant='success' style={{ width: '200px' }}>Borrow </Button>
            </Row>
            <Row>
                {
                    chonBooks?.map((b) => (
                        <Col key={b.id} md={3}>
                            <Card>
                                <Card.Img src={b.image} height={180} />
                                <Card.Body>
                                    <h4>{b.title}</h4>
                                    <hr />
                                    <p><b>Author:</b> {b.author}</p>
                                    <p><b>Category:</b> {b.category}</p>
                                    <p><b>Available Copies:</b> {b.availableCopies}</p>
                                    <p><b>Total Copies:</b> {b.totalCopies}</p>
                                    <p><b>Rating:</b> {b.rating}</p>

                                </Card.Body>
                            </Card>


                        </Col>
                    ))
                }
            </Row>
        </>
    );
}

export default Book;