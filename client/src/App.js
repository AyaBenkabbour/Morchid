// src/MapComponent.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// const map = useMap();
// useEffect(() => {
//     if (position) {
//       map.setView(position, map.getZoom());
//     }
//   }, [position, map]);

const MyLocationMarker = ({ position, accuracy }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 13); // Adjust the zoom level if needed
    }
    let status ="You are more than 100 meters away from the target position.";
    if (distance <= 100) {
      status=
        "You are within 100 meters of the target position.";
    } else {
      status=
        "You are more than 100 meters away from the target position.";
    }

  }, [position, map]);
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);

  useEffect(() => {
    const success = (pos) => {
      const { latitude, longitude, accuracy } = pos.coords;
      setPosition([latitude, longitude]);
      setAccuracy(accuracy);
    };

    const error = (err) => {
      if (err.code === 1) {
        alert("Please allow geolocation access");
      } else {
        alert("Cannot get current location");
      }
    };

    navigator.geolocation.watchPosition(success, error);
  }, []);

  function getDistanceFromLatLonInMeters(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radius of the Earth in meters
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in meters
    return distance;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  

  return (
    <div>
      <div id="coordinates">
        {position
          ? `Latitude: ${position[0]}, Longitude: ${position[1]}`
          : "Getting location..."}
      </div>
      <MapContainer
        center={[32.2087638, -7.9477194]}
        zoom={13}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        {position && (
          <>
            <Marker position={position} />
            <Circle center={position} radius={accuracy/8} />
          </>
        )}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
