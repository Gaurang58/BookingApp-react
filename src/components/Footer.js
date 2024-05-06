import "../design/footer.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer-container">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/follow-us" className="footer-link">
                Follow Us
              </Nav.Link>
              <Nav.Link href="/testimonials" className="footer-link">
                Testimonials
              </Nav.Link>
              <Nav.Link href="/contact" className="footer-link">
                Contact Us
              </Nav.Link>
            </Nav>
            <Nav className="social-icons">
              <Nav.Link
                href="https://www.facebook.com"
                target="_blank"
                className="social-link"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </Nav.Link>
              <Nav.Link
                href="https://www.twitter.com"
                target="_blank"
                className="social-link"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link
                href="https://www.instagram.com"
                target="_blank"
                className="social-link"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand className="footer-brand">
            All Rights Reserved &copy; 2024
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
