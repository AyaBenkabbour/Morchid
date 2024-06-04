import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Circle,
  useMap,
  useMapEvent,
} from "react-leaflet";
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

const MapClickHandler = ({ onClick }) => {
  useMapEvent("click", (event) => {
    onClick(event.latlng);
  });
  return null;
};

const MapComponent = () => {
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [clickedLocation, setClickedLocation] = useState(null);

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
    //to let us know if we're 100 m closer to on of the landmarks
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
  const distance = getDistanceFromLatLonInMeters(31.625865, -7.989152,31.625851753188144,-7.989104390144349);
console.log(distance)
    function deg2rad(deg) {
      return deg * (Math.PI / 180);
    }

    function is_within_100m(distance) {
      let status =
        "You are more than 100 meters away from the target position.";
      if (distance <= 100) {
        status = "You are within 100 meters of the target position.";
      } else {
        status = "You are more than 100 meters away from the target position.";
      }
      return status;
    }

    navigator.geolocation.watchPosition(success, error);
  }, []);

  const handleMapClick = (latlng) => {
    setClickedLocation([latlng.lat, latlng.lng]);
  };
  const positionj = [31.625865, -7.989152];
  const markerLocations = [
    { position: [31.625865, -7.989152], popup: "Marker 1" },
    { position: [31.619619, -7.976001], popup: "Marker 2" },
    { position: [31.623885, -7.993851], popup: "Marker 3" },
    { position: [31.6319956, -7.9859984], popup: "Marker 4" },
  ];
  return (
    <div className="map_container ">
      <div id="coordinates">
        {position
          ? `Latitude: ${position[0]}, Longitude: ${position[1]}`
          : "Getting location..."}
      </div>
      <div id="clicked-coordinates">
        {clickedLocation
          ? `Clicked Latitude: ${clickedLocation[0]}, Clicked Longitude: ${clickedLocation[1]}`
          : "Click on the map to get coordinates"}
      </div>
      <MapContainer
        center={[34.2531004, -7.5800369]}
        zoom={20}
        style={{ height: "80vh", width: "100%" }}
      >
        <TileLayer url="https://marocmap.ikiker.com/maroc/{z}/{x}/{y}.png" />
        <MyLocationMarker position={position} accuracy={accuracy} />
        <MapClickHandler onClick={handleMapClick} />
        <Marker position={positionj}></Marker>
        {markerLocations.map((marker, index) => (
        <Marker key={index} position={marker.position}>
        </Marker>
      ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
