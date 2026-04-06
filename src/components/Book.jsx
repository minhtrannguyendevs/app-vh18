import { books } from './Data';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
import { useState } from 'react';
function Book() {
    const [selectedCategory, setSelectedCategory] = useState("All Categories");
    const [selectedAuthor, setSelectedAuthor] = useState("All Authors");
    const [search, setSearch] = useState("");

    const categories = ["All Categories", ...new Set(books.map((b) => b.category))];
    const authors = ["All Authors", ...new Set(books.map((b) => b.author))];

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };

    const handleAuthorChange = (e) => {
        setSelectedAuthor(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };


    return (
        <>
            <Row>
                <h1 style={{ textAlign: 'center' }}>List or books</h1>
            </Row>
            <Row >
                <Col md={3}>
                    <Form.Select
                    value={selectedCategory} onChange={handleCategoryChange}>
                        {categories?.map((c) => (
                            <option key={c}> {c}</option>
                        ))}
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select value={selectedAuthor} onChange={handleAuthorChange}>
                        {
                            authors?.map((author) => (
                                <option key={author}> {author}</option>
                            ))

                        }
                    </Form.Select>
                </Col>
                <Col md={6}>
                    <Form.Control
                        type='search'
                        name='search'
                        value={search}
                        onChange={handleSearchChange}
                        placeholder='enter title to search' />
                </Col>



            </Row>
            <Row className='d-flex justify-content-end'>

                <Button className="m-2" variant='success' style={{ width: '200px' }}>Borrow </Button>
            </Row>
            <Row>
                {
                    books?.map((b) => (
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