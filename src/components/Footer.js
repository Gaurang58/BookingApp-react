import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Footer() {
  return (
    <div className="footer-container">
      <Navbar bg="primary" data-bs-theme="primary">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/mybookings">Follow Us</Nav.Link>
            <Nav.Link href="/mybookings">Testimonials</Nav.Link>
            <Nav.Link href="/contsct">All Rights Reserved 2024.</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
