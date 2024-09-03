import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Searchbox from "./Searchbox";
import Logo from "../assets/images/Logo.png";
import Images from "./Images";

function Navbars() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar">
            <Container>
                <Navbar.Brand href="/">
                    <Images style="w-100" link={Logo} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav 
                        className="me-auto my-2 my-lg-0 fw-6"
                        navbarScroll>
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/service" >Service</Nav.Link>
                        <Nav.Link href="/portfolio" >Portfolio</Nav.Link>
                        <Nav.Link href="/contact" >Contacts</Nav.Link>
                    </Nav>
                    <Searchbox  />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars