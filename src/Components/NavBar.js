import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/HeresoLogo.PNG'

function NavBar() {
  return (
    <div>
    {/* English */}
    {/* <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <Nav.Link href="/amenities">Amenities</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/applynow">Apply Now</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
    {/* French */}
    <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">
        <img
              alt=""
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/aboutus">À propos</Nav.Link>
            <Nav.Link href="/amenities">Agréments</Nav.Link>
            <Nav.Link href="/gallery">Galerie</Nav.Link>
            <Nav.Link href="/contactus">Contactez-nous</Nav.Link>
            <Nav.Link href="/applynow">Appliquer maintenant</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;