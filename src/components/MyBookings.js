import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const userBookings = JSON.parse(localStorage.getItem("user")).bookings;
    setBookings(userBookings);
  }, []);

  const handleUpdateBooking = (hotelId) => {
    const updatedBookings = bookings.map((booking) => {
      if (booking.hotelid === hotelId) {
        const newNumberOfPeople = parseInt(
          prompt("Enter new number of people:")
        );
        if (!isNaN(newNumberOfPeople)) {
          return { ...booking, numberOfPeople: newNumberOfPeople };
        }
      }
      return booking;
    });
    setBookings(updatedBookings);
    updateLocalStorage(updatedBookings);
  };

  const handleDeleteBooking = (hotelId) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.hotelid !== hotelId
    );
    setBookings(updatedBookings);
    updateLocalStorage(updatedBookings);
  };

  const updateLocalStorage = (updatedBookings) => {
    const user = JSON.parse(localStorage.getItem("user"));
    user.bookings = updatedBookings;
    localStorage.setItem("user", JSON.stringify(user));
  };

  return (
    <>
      <div className="hotel-container">
        {bookings.map((booking) => (
          <Card key={booking.hotelid} className="hotel-card">
            <Card.Img
              variant="top"
              className="hotel-image"
              src={booking.image}
            />
            <Card.Body>
              <Card.Title>{booking.hotelname}</Card.Title>
              <Card.Text>{booking.location}</Card.Text>
              <Card.Text>{booking.price}</Card.Text>
              <Card.Text>Number of People: {booking.numberOfPeople}</Card.Text>
              <Button
                variant="info"
                onClick={() => handleUpdateBooking(booking.hotelid)}
              >
                Update
              </Button>{" "}
              <Button
                variant="danger"
                onClick={() => handleDeleteBooking(booking.hotelid)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}

export default MyBookings;
