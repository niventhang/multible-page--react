import Container from "react-bootstrap/Container";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
function Navbars() {
  return (
    <Container>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio
          </NavLink>
          <NavLink to="/service" activeStyle>
            Service
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact 
          </NavLink>
        </NavMenu>
      </Nav>
    </Container>
  );
}

export default Navbars;
