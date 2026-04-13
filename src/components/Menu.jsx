import { NavLink } from "react-router-dom";
import { Nav } from "react-bootstrap";

function Menu() {
    return (
        <Nav className='d-flex flex-row' style={{ backgroundColor: '#6FCF97', padding: 10 }}>
            <NavLink to='/vidu1' className='p-2' style={({ isActive }) => ({
                color: isActive ? 'yellow' : 'white',
                textDecoration: 'none',
                fontSize: 18
            })}>Vi du 1</NavLink>

            <NavLink to='/vidu2' className='p-2' style={({ isActive }) => ({
                color: isActive ? 'yellow' : 'white',
                textDecoration: 'none',
                fontSize: 18
            })}>Vi du 2</NavLink>

            <NavLink to='/vidu3' className='p-2' style={({ isActive }) => ({
                color: isActive ? 'yellow' : 'white',
                textDecoration: 'none',
                fontSize: 18
            })}>Vi du 3</NavLink>

            <NavLink to='/book' className='p-2' style={({ isActive }) => ({
                color: isActive ? 'yellow' : 'white',
                textDecoration: 'none',
                fontSize: 18
            })}>Danh sach sach</NavLink>

            <NavLink to='/movies' className='p-2' style={({ isActive }) => ({
                color: isActive ? 'yellow' : 'white',
                textDecoration: 'none',
                fontSize: 18
            })}>Danh sach phim</NavLink>
        </Nav>
    );
}

export default Menu;