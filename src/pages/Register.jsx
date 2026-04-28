import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

// ✅ API import
import { API } from "../api/api";

function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Cultural Enthusiast");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal-on-scroll");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("reveal");
      });
    });

    elements.forEach(el => observer.observe(el));
  }, []);

  // ✅ UPDATED REGISTER USING API.JS
  const handleRegister = async () => {

    console.log("BUTTON CLICKED");

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      console.log("Sending request...");

      const data = await API.post("/api/register", {
        name,
        email,
        password,
        role
      });

      console.log("Response Data:", data);

      if (!data || !data.email) {
        alert("Registration failed");
        return;
      }

      alert("Account created successfully!");
      navigate("/login");

    } catch (err) {
      console.log("ERROR:", err);
      alert("ERROR: " + err.message);
    }
  };

  return (
    <div className="page-container">
      <div
        className="card reveal-on-scroll"
        style={{
          maxWidth: "600px",
          margin: "80px auto",
          padding: "50px",
          borderRadius: "30px"
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
          Create Account
        </h1>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={premiumInput}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={premiumInput}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={premiumInput}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={premiumInput}
        >
          <option>Cultural Enthusiast</option>
          <option>Admin</option>
          <option>Content Creator</option>
          <option>Tour Guide</option>
        </select>

        <button
          className="btn-primary"
          onClick={handleRegister}
          style={{ width: "100%" }}
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

const premiumInput = {
  width: "100%",
  padding: "16px",
  marginBottom: "25px",
  borderRadius: "18px",
  border: "1px solid #c29b87",
  fontSize: "16px",
  background: "rgba(255,255,255,0.7)"
};

export default Register;