import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import styled from "styled-components";

//** a styled library in a giant string from es6**/

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: #white;

    &:hover {
      color: white;
    }
  }
`;

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));

//**following a presentational component = navbar and wrapping inside the Styles to re-declare classes or/and <div's> and the Links*/

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="navbarHeader">
      <Navbar.Brand href="/">ITF</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link >
              <Link className="navlink" to="/">Etusivu</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                  <Link className="navlink" to="/club">Seura</Link>
                </Dropdown.Toggle>
                <Dropdown.Menu >
                  <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                  <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                  <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navlink" to="/schedule">Harjoitukset</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navlink" to="/about">Taekwon-do</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navlink" to="/instructors">Ohjaajat</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navlink" to="/contact">Yhteystiedot</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <Link className="navlink" to="/store">Varustekauppa</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
