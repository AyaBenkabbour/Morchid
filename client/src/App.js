// src/MapComponent.jsx
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles.css";
import Onboarding1 from "./pages/Onboarding1";
import MapComponent from "./MapComponent";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapComponent />} />
        <Route path="/onboarding1" element={<Onboarding1 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
