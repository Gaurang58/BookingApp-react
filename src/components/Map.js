// Map.js
import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { Marker } from "@react-google-maps/api";
const SECRET_API_KEY = process.env.SECRET_API_KEY;

const Map = ({ location }) => {
  const mapStyles = {
    width: "400px",
    height: "200px",
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCMyj49Zb-85xGT-EbuldJvugCuclo3Opo">
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={location}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
