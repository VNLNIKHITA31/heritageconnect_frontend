import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Admin() {

  const navigate = useNavigate();

  const [stats, setStats] = useState({
    users: 0,
    contents: 0,
    discussions: 0
  });

  // ✅ FETCH FROM BACKEND
  const fetchStats = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/admin/stats");
      const data = await res.json();

      setStats(data);
    } catch (err) {
      console.error("Error fetching stats:", err);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div className="page-container">

      <h1 style={{ textAlign: "center", marginBottom: "50px" }}>
        Admin Control Center
      </h1>

      {/* STATS */}
      <div style={premiumGrid}>

        <StatCard title="Total Users" value={stats.users} />
        <StatCard title="Cultural Content" value={stats.contents} />
        <StatCard title="Total Discussions" value={stats.discussions} />

      </div>

      {/* ACTIONS */}
      <div style={{ ...premiumGrid, marginTop: "60px" }}>

        <ActionCard
          title="Manage Users"
          desc="View, edit and remove registered users."
          onClick={() => navigate("/admin/users")}
        />

        <ActionCard
          title="Manage Cultural Content"
          desc="Update monuments, art, food and music content."
          onClick={() => navigate("/admin/content")}
        />

        <ActionCard
          title="Moderate Discussions"
          desc="Review and manage user discussions."
          onClick={() => navigate("/admin/discussions")}
        />

      </div>

    </div>
  );
}

/* COMPONENTS */

function StatCard({ title, value }) {
  return (
    <div className="card" style={premiumCard}>
      <h3>{title}</h3>
      <p style={{ fontSize: "40px", marginTop: "20px" }}>{value}</p>
    </div>
  );
}

function ActionCard({ title, desc, onClick }) {
  return (
    <div
      className="card"
      style={{ ...premiumCard, cursor: "pointer" }}
      onClick={onClick}
    >
      <h3>{title}</h3>
      <p style={{ marginTop: "15px" }}>{desc}</p>
    </div>
  );
}

/* STYLES */

const premiumGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "40px"
};

const premiumCard = {
  padding: "40px",
  borderRadius: "25px",
  textAlign: "center"
};

export default Admin;