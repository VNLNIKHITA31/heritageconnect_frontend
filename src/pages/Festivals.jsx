import React, { useState } from "react";
import "../App.css";

import sankranti from "../assets/festivals/sankranti.jpg";
import pongal from "../assets/festivals/pongal.jpg";
import onam from "../assets/festivals/onam.jpg";
import durga from "../assets/festivals/durga.jpg";
import diwali from "../assets/festivals/diwali.jpg";
import bihu from "../assets/festivals/bihu.jpg";
import ganesh from "../assets/festivals/ganesh.jpg";
import navratri from "../assets/festivals/navratri.jpg";
import holi from "../assets/festivals/holi.jpg";
import ugadi from "../assets/festivals/ugadi.jpg";
import lohri from "../assets/festivals/lohri.jpg";

function Festivals() {

  const [selectedState, setSelectedState] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const festivals = [
    { name: "Sankranti", state: "Andhra Pradesh", image: sankranti },
    { name: "Pongal", state: "Tamil Nadu", image: pongal },
    { name: "Onam", state: "Kerala", image: onam },
    { name: "Durga Puja", state: "West Bengal", image: durga },
    { name: "Diwali", state: "All India", image: diwali },
    { name: "Bihu", state: "Assam", image: bihu },
    { name: "Ganesh Chaturthi", state: "Maharashtra", image: ganesh },
    { name: "Navratri", state: "Gujarat", image: navratri },
    { name: "Holi", state: "Uttar Pradesh", image: holi },
    { name: "Ugadi", state: "Karnataka", image: ugadi },
    { name: "Lohri", state: "Punjab", image: lohri }
  ];

  const filteredFestivals =
    selectedState === "All"
      ? festivals
      : festivals.filter((f) => f.state === selectedState);

  const states = ["All", ...new Set(festivals.map((f) => f.state))];

  const handleClick = (fest) => {
    setSelectedImage(fest.image);
    setSelectedName(fest.name);
  };

  return (
    <div className="page-container">

      <h1>Festivals of India</h1>
      <p>Click a festival to view its image</p>

      {/* FILTER */}
      <div style={{ marginBottom: "40px" }}>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          style={{
            padding: "12px 20px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          {states.map((state, i) => (
            <option key={i} value={state}>{state}</option>
          ))}
        </select>
      </div>

      {/* NAME ONLY CARDS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px"
      }}>
        {filteredFestivals.map((fest, index) => (
          <div
            key={index}
            className="card"
            onClick={() => handleClick(fest)}
            style={{
              cursor: "pointer",
              textAlign: "center",
              padding: "30px"
            }}
          >
            <h2>{fest.name}</h2>
            <p style={{ color: "#6b7280" }}>{fest.state}</p>
          </div>
        ))}
      </div>

      {/* IMAGE POPUP */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999
          }}
        >

          <h2 style={{ color: "white", marginBottom: "20px" }}>
            {selectedName}
          </h2>

          <img
            src={selectedImage}
            alt="festival"
            style={{
              maxWidth: "85%",
              maxHeight: "80%",
              borderRadius: "15px",
              boxShadow: "0 0 40px rgba(255,255,255,0.2)"
            }}
          />

        </div>
      )}

    </div>
  );
}

export default Festivals;