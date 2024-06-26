import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Booking.com</Navbar.Brand>
          <Nav className="me-auto">
            {isLoggedIn && <Nav.Link href="/mybookings">My Bookings</Nav.Link>}
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          {isLoggedIn ? (
            <button
              style={{ margin: "10px", background: "red" }}
              className="btn btn-danger"
              onClick={logoutUser}
            >
              Logout
            </button>
          ) : (
            <>
              <button
                className="btn btn-primary"
                style={{ background: "green" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                style={{ margin: "10px", background: "green" }}
                className="btn btn-primary"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up
              </button>
            </>
          )}
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
