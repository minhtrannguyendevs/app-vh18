import {Navbar,NavLink,Nav,Form,Button,Row,Col}from 'react-bootstrap'
import{Link} from 'react-router-dom'
function Header() {
    return (
        <div>
        <Navbar bg = 'dark' variant='dark'>
        <Navbar.Brand style={{ marginLeft:25 }} href ='#home'> <img src='logo192.png' width={40} height={40} alt="Logo" /> </Navbar.Brand>
        <Nav className='flex-row me-auto'>
            <Link className='p-3' style ={{textDecoration:'none',color:'white',fontSize:18}}to='/vidu1'>Vidu1</Link>
            <Link className='p-3' style ={{textDecoration:'none',color:'white',fontSize:18}}to='/vidu2'>Vidu2</Link>
            <Link className='p-3' style ={{textDecoration:'none',color:'white',fontSize:18}}to='/vidu3'>Vidu3</Link>
            <Link className='p-3' style ={{textDecoration:'none',color:'white',fontSize:18}}to='/book'>Book</Link>
            <Link className='p-3' style ={{textDecoration:'none',color:'white',fontSize:18}}to='/movies'>Danh sach phim</Link>
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