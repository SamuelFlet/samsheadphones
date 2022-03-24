import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/headphones">Headphone List</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
