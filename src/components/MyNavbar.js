import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

function MyNavbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState();

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") ? 1 : 0);
  }, []);

  const logoutUser = () => {
    localStorage.removeItem("user");
    localStorage.clear();
    navigate("/login");
  };

  const renderMybookings = () => {
    if (isLoggedIn) {
      return <Nav.Link href="/mybookings">My Bookings</Nav.Link>;
    }
  };

  const renderLogout = () => {
    if (isLoggedIn) {
      return (
        <button
          style={{ margin: "10px", background: "red" }}
          className="btn btn-danger"
          onClick={logoutUser}
        >
          Logout
        </button>
      );
    } else {
      return (
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
      );
    }
  };

  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Booking.com</Navbar.Brand>
          <Nav className="me-auto">
            {renderMybookings()}
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          {renderLogout()}
        </Container>
      </Navbar>
    </div>
  );
}

export default MyNavbar;
