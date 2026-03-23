import {Navbar,NavLink,Nav,Form,Button,Row,Col}from 'react-bootstrap'

function Header() {
    return (
        <div>
        <Navbar bg = 'dark' variant='dark'>
        <Navbar.Brand style={{ marginLeft:25 }} href ='#home'> <img src='logo192.png' width={40} height={40}/> </Navbar.Brand>
        <Nav className='flex-row me-auto'>
        <NavLink href='#home'>HOME</NavLink>
        <NavLink href='#product'>PRODUCT</NavLink>
        <NavLink href='#about'>ABOUT</NavLink>
        
        </Nav>
        <Form className ="me-4">
            <Row >
                <Col>
        <Form.Control 
        type='Search' 
        placeholder='Search ten va gia'
        id="txtSearch"
        name="txtSearch"
        style ={{width:200}}
            />
                </Col>
        <Col>
          <Button variant='outline-info'>Search</Button>    
        </Col>
            </Row>
        </Form>
         </Navbar>
        </div>
    );
    }
export default Header;