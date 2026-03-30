import { Row, Col, Card, Button } from 'react-bootstrap';
function Movie() {
  const movies = [
    {
      "id": 2,
      "title": "The Matrix",
      "duration": 136,
      "director": "Wachowski Sisters",
      "rating": 8.7
    },
    {
      "id": 3,
      "title": "Inception",
      "duration": 148,
      "director": "Christopher Nolan",
      "rating": 8.8,
    },
    {
      "id": 4,
      "title": "Tho Meo",
      "duration": 180,
      "director": "Loopy Meo",
      "rating": 10
    }
  ]
  return (
    <>
      <Row>
        <h1 className='mt-3' style={{ textAlign: 'center' }}> MOVIES  </h1>
      </Row>
      <Row>
        {/* <Col sm={3} md={4}> 
    <Card className='p-2'>
        <Card.Title> The Maxtrix </Card.Title>
        <p><b>Duration: </b>120</p>
        <p><b>Director: </b>Wachowski</p>
        <p><b>Rating: </b>7.0</p>
        <Button variant="primary">View Showtimes </Button>
    </Card>
    </Col> */}
        {
          movies?.map((m) => (
            <Col key={m.id} md={4}>
              <Card className="mb-3" style={{ backgroundColor: '#f0eff0' }}>
                <Card.Body>
                  <h4>{m.title}</h4>
                  <hr />
                  <p><b>Duration: </b>{m.duration} minutes</p>
                  <p><b>Director: </b>{m.director}</p>
                  <p><b>Rating: </b>{m.rating}</p>

                </Card.Body>
                <Button className="m-2" variant="info">View Showtimes</Button>
              </Card>
            </Col>

          ))
        }
      </Row>
    </>
  );
}
export default Movie;
