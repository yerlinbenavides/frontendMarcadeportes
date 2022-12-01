import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from 'react-router-dom';
import {Principal} from './Presentacion.jsx'
export const NavBarComp = () => {

return (
<>
<Navbar collapseOnSelect  bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  as = {Link} to = {"/"}>Evento Deportivo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as ={Link} to ={"/shproyecto"} >Eventos</Nav.Link>
            <Nav.Link as ={Link} to ={"/regproyecto"} >Registrar Eventos</Nav.Link>
            <NavDropdown title="Usuarios" id="collasible-nav-dropdown">
              <NavDropdown.Item as ={Link} to ={"/create"}>Login Up</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Contactenos
              </NavDropdown.Item>
              <NavDropdown.Item as ={Link} to ={"/users"}>Mostrar Usuarios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as ={Link} to ={"/login"}>
                Login
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Mas Informacion</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <section>
            <Outlet>

            </Outlet>
    </section>
</>

)



}

export default NavBarComp