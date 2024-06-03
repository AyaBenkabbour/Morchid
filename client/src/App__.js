import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Custom hook to set the map view
const SetViewOnClick = ({ coords}) => {
  const map = useMap();

  useEffect(() => {
    if (coords) {
      map.setView(coords, 13); // Set view to user's current position with a zoom level of 13
    }
  }, [map, coords]);

  return null;
};

const MyMapComponent = () => {
  const [coords, setCoords] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
        setAccuracy(accuracy);
      },
      (error) => {
        console.error("Error getting the current position: ", error);
        // Fallback coordinates, e.g., center of the map at a default location
        setCoords([51.505, -0.09]); // London coordinates as fallback
      }
    );
  }, []);

  return (
    <MapContainer
      center={coords || [51.505, -0.09]} // Initial center position
      zoom={20}
      style={{ height: "80vh", width: "80%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {coords && <SetViewOnClick coords={coords} />}
      
    </MapContainer>
  );
};

export default MyMapComponent;
