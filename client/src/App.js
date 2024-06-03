// src/MapComponent.jsx
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Circle, useMap } from "react-leaflet";
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

const MyLocationMarker = ({ position, accuracy }) => {
  const map = useMap();

  useEffect(() => {
    if (position) {
      map.setView(position, 18); // Adjust the zoom level if needed
    }
  }, [position, map]);

  return (
    <>
      {position && (
        <>
          <Marker position={position} />
          <Circle center={position} radius={accuracy} />
        </>
      )}
    </>
  );
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
        setPosition([34.2531004, -6.5800369]);
      }
    };

    navigator.geolocation.watchPosition(success, error);
  }, []);

  console.log(position);
  return (
    <div>
      <div id="coordinates">
        {position
          ? `Latitude: ${position[0]}, Longitude: ${position[1]}`
          : "Getting location..."}
      </div>
      <MapContainer
        center={[34.2531004, -7.5800369]}
        zoom={20}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MyLocationMarker position={position} accuracy={accuracy} />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
