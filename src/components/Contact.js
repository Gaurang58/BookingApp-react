import React from "react";
import Map from "./Map";
import "../design/contact.css";

function Contact() {
  // Define locations for three offices
  const locations = [
    {
      title: "London Office",
      address: "35 Baker Street London NW1 5LS",
      schedule:
        "DURING SEMESTER TIME\nMON - FRI: 8AM - 9PM\nSAT - SUN: 8AM - 6PM",
      telephone: "+44 (0) 20 7911 5000",
      coordinates: { lat: 51.52221237478603, lng: -0.1549376147066559 },
    },
    {
      title: "New York Office",
      address: "123 Broadway, New York, NY 10001",
      schedule: "MON - FRI: 9AM - 7PM\nSAT: 10AM - 5PM",
      telephone: "+1 212-555-1234",
      coordinates: { lat: 40.7128, lng: -74.006 },
    },
    {
      title: "Tokyo Office",
      address: "1 Chome-1 Marunouchi, Chiyoda City, Tokyo 100-0005",
      schedule: "MON - FRI: 9AM - 6PM\nSAT - SUN: Closed",
      telephone: "+81 3-1234-5678",
      coordinates: { lat: 35.682839, lng: 139.759455 },
    },
  ];

  return (
    <>
      {locations.map((office, index) => (
        <div key={index}>
          <div
            className="banner"
            style={{
              background: "linear-gradient(to right, #1e3c72, #2a5298)",
              color: "white",
              textAlign: "center",
              padding: "20px 0",
            }}
          >
            <h4>{office.title}</h4>
            <p>{office.address}</p>
          </div>
          <div className="map-wrapper">
            <div className="map-card">
              <div className="map-card-body">
                <div>
                  <h5 className="map-card-title">{office.title}</h5>
                  <p className="map-card-text">
                    {office.schedule}
                    <br />
                    TELEPHONE: {office.telephone}
                  </p>
                </div>
                <Map className="map-style" location={office.coordinates} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Contact;
