import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>

        <Navbar.Brand href="#">Omah</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0 p-4" style={{ maxHeight: '100px' }} navbarScroll>

            <Link to="/">
              <Nav.Item>Home</Nav.Item>
            </Link>
            
            <Link to="/about">
              <Nav.Item>About</Nav.Item>
            </Link>

            <Link to="##">
              <Nav.Item>Propertis</Nav.Item>
            </Link>

            <Link to="##">
              <Nav.Item>Contact</Nav.Item>
            </Link>

          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    </>
  )
}
export default NavBar