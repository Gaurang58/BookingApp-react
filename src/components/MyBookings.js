import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MyBookings() {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    setHotels(JSON.parse(localStorage.getItem("user")).bookings);
  }, []);

  return (
    <>
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
                <Button variant="primary" disabled>
                  Booked
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
}

export default MyBookings;
