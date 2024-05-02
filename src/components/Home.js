import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [user, setUser] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));

    axios
      .get("http://localhost:8000/hotels")
      .then((res) => {
        console.log(res);
        setHotels(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleBook = (hotelid) => {
    if (user.bookings.some((c) => c.hotelid === hotelid)) {
      alert("already booked......");
      return;
    }

    const newBooking = hotels.filter((c) => c.hotelid === hotelid);

    console.log(hotelid);
    console.log(newBooking);
    console.log(user.bookings);

    const updatedUser = {
      ...user,
      bookings: [...user.bookings, ...newBooking],
    };

    console.log(updatedUser);
    localStorage.setItem("user", JSON.stringify({ ...updatedUser }));

    axios
      .put(`http://localhost:8000/users/` + user.id, { ...updatedUser })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    navigate("/mybookings");
  };

  return (
    <>
      <div
        className="banner"
        style={{
          background: "linear-gradient(to right, #1e3c72, #2a5298)",
          color: "white",
          textAlign: "center",
          padding: "50px 0",
        }}
      >
        <h1>Welcome to our Hotel Booking App</h1>
        <p>Find your perfect stay and book now!</p>
        <br></br>
        <Link
          to="/contact"
          style={{
            background: "transparent",
            border: "2px solid white",
            color: "white",
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            marginTop: "20px", // Adjusted marginTop value
            textDecoration: "none",
            marginBottom: "20px",
          }}
        >
          Visit Our Office
        </Link>
      </div>

      <div className="hotel-container">
        {hotels.map((hotel) => {
          return (
            <Card key={hotel.hotelid} className="hotel-card">
              <Card.Img
                variant="top"
                className="hotel-image"
                src={hotel.image}
              />
              <Card.Body>
                <Card.Title>{hotel.hotelname}</Card.Title>
                <Card.Text>{hotel.location}</Card.Text>
                <Card.Text>{hotel.price}</Card.Text>
                <Button
                  onClick={() => {
                    handleBook(hotel.hotelid);
                  }}
                  variant="primary"
                >
                  Book Now
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default Home;
