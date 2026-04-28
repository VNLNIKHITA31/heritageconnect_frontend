import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

/* IMAGES */
import taj from "../assets/images/taj.jpg";
import qutub from "../assets/images/qutub.jpg";
import hampi from "../assets/images/hampi.jpg";
import konark from "../assets/images/konark.jpg";
import indiagate from "../assets/images/indiagate.jpg";
import nationalwar from "../assets/images/nationalwar.jpg";
import meenakshi from "../assets/images/meenakshi.jpg";
import brihadeeswara from "../assets/images/brihadeeswara.jpg";
import victoria from "../assets/images/victoria.jpg";
import gateway from "../assets/images/gateway.jpg";
import ajanta from "../assets/images/ajanta.jpg";
import redfort from "../assets/images/redfort.jpg";
import mysore from "../assets/images/mysore1.jpg";
import jagannath from "../assets/images/jagannath.jpg";
import dakshineswar from "../assets/images/dakshineswar.jpg";
import kamakhya from "../assets/images/kamakhya.jpg";
import vaishnodevi from "../assets/images/vaishnodevi.jpg";
import hidimba from "../assets/images/hidimba.jpg";
import tawang from "../assets/images/tawang.jpg";
import amaravtistupa from "../assets/images/amaravatistupa.jpg";
import charminar from "../assets/images/charminar.jpg";

function Explore() {

  const navigate = useNavigate();

  const [state, setState] = useState("All");
  const [type, setType] = useState("All");

  const monuments = [
    { id: "taj", name: "Taj Mahal", state: "Uttar Pradesh", type: "Mausoleum", img: taj },
    { id: "qutub", name: "Qutub Minar", state: "Delhi", type: "Minaret", img: qutub },
    { id: "indiagate", name: "India Gate", state: "Delhi", type: "War Memorial", img: indiagate },
    { id: "nationalwar", name: "National War Memorial", state: "Delhi", type: "War Memorial", img: nationalwar },
    { id: "redfort", name: "Red Fort", state: "Delhi", type: "Fort", img: redfort },
    { id: "hampi", name: "Hampi", state: "Karnataka", type: "Heritage Site", img: hampi },
    { id: "mysore", name: "Mysore Palace", state: "Karnataka", type: "Palace", img: mysore },
    { id: "konark", name: "Konark Sun Temple", state: "Odisha", type: "Temple", img: konark },
    { id: "jagannath", name: "Jagannath Temple", state: "Odisha", type: "Temple", img: jagannath },
    { id: "meenakshi", name: "Meenakshi Temple", state: "Tamil Nadu", type: "Temple", img: meenakshi },
    { id: "brihadeeswara", name: "Brihadeeswara Temple", state: "Tamil Nadu", type: "Temple", img: brihadeeswara },
    { id: "victoria", name: "Victoria Memorial", state: "West Bengal", type: "Heritage Site", img: victoria },
    { id: "dakshineswar", name: "Dakshineswar Temple", state: "West Bengal", type: "Temple", img: dakshineswar },
    { id: "gateway", name: "Gateway of India", state: "Maharashtra", type: "Heritage Site", img: gateway },
    { id: "ajanta", name: "Ajanta Caves", state: "Maharashtra", type: "Heritage Site", img: ajanta },
    { id: "vaishnodevi", name: "Vaishno Devi", state: "Jammu & Kashmir", type: "Temple", img: vaishnodevi },
    { id: "hidimba", name: "Hidimba Temple", state: "Himachal Pradesh", type: "Temple", img: hidimba },
    { id: "kamakhya", name: "Kamakhya Temple", state: "Assam", type: "Temple", img: kamakhya },
    { id: "tawang", name: "Tawang Monastery", state: "Arunachal Pradesh", type: "Monastery", img: tawang },
    { id: "amaravati", name: "Amaravati Stupa", state: "Andhra Pradesh", type: "Buddhist Site", img: amaravtistupa },
    { id: "charminar", name: "Charminar", state: "Telangana", type: "Monument", img: charminar }
  ];

  const filtered = monuments.filter(
    (m) =>
      (state === "All" || m.state === state) &&
      (type === "All" || m.type === type)
  );

  return (
    <div className="explore-layout">

      {/* LEFT FILTER PANEL (NEW DESIGN) */}
      <div className="side-panel">

        <h2>Explore</h2>

        <label>State</label>
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="All">All</option>
          {[...new Set(monuments.map(m => m.state))].map((s, i) => (
            <option key={i}>{s}</option>
          ))}
        </select>

        <label>Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="All">All</option>
          {[...new Set(monuments.map(m => m.type))].map((t, i) => (
            <option key={i}>{t}</option>
          ))}
        </select>

      </div>

      {/* RIGHT IMAGE WALL */}
      <div className="image-wall">

        {filtered.map((m) => (
          <div
            key={m.id}
            className="tile"
            onClick={() => navigate(`/monument/${m.id}`)}
          >

            <img src={m.img} alt={m.name} />

            <div className="overlay">
              <h3>{m.name}</h3>
              <p>{m.state}</p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Explore;