import { books } from './Data';
import { Card, Col, Row, Button, Form } from 'react-bootstrap';
function book() {


    return (
        <>
            <Row>
                <h1 style={{ textAlign: 'center' }}>List or books</h1>
            </Row>
            <Row >
                <Col md={3}>
                    <Form.Select>
                        <option>All Categories</option>
                    </Form.Select>
                </Col>
                <Col md={3}>
                    <Form.Select>
                        <option>Authors</option>
                    </Form.Select>
                </Col>
                <Col md={6}>
                    <Form.Control
                        type='search'
                        name='search'
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
                                <Card.Img src={b.image} height={150} />
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

export default book;