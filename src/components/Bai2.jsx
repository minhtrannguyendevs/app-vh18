import {Row,Col,Table,Nav,NavLink,Alert}from 'react-bootstrap';
function Bai2() {
    return (

    <div>
        <Row>
            <Col md='3'>
            <Alert variant='primary'>
                    <Nav className ='flex-column'>
                    <NavLink href = "#samsung">SAMSUNG</NavLink>
                    <NavLink href = "#iphone">IPHONE</NavLink>
                    <NavLink href = "#xiaomi">XIAOMI</NavLink>
                </Nav>
            </Alert>
            </Col>
            <Col md='9'>
                <Table variant="primary" bordered striped hover>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Ho Va Ten</th>
                            <th>Gioi Tinh</th>
                            <th>Diem</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Nguyen Van A</td>
                            <td>Nam</td>
                            <td>9.0</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Nguyen Van B</td>
                            <td>Nam</td>
                            <td>8.0</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Nguyen Van C</td>
                            <td>Nu</td>
                            <td>7.0</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </div>
    )
};
export default Bai2;