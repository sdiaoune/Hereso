import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../assets/HeresoLogo.PNG'

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='App'>
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
            {/* <Nav.Link href="/">Home</Nav.Link> */}
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            {/* <NavDropdown title="Location" id="collasible-nav-dropdown"> */}
              {/* <NavDropdown.Item href="/amenities">Amenities</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/apartments">Apartments</NavDropdown.Item>
              <NavDropdown.Item href="/grounds">Grounds</NavDropdown.Item> */}
              {/* <NavDropdown.Item href="/services">Services</NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            {/* </NavDropdown> */}
            <Nav.Link href="/amenities">Amenities</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/applynow">Apply Now</Nav.Link>
            {/* <Nav.Link href="/events">News & Events</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link> */}
            {/* <Nav.Link href="#pricing">Privacy Policy</Nav.Link> */}
          </Nav>
          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;