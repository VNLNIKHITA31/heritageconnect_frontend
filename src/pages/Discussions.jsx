import React, { useState, useEffect } from "react";
import "../App.css";

function Discussions() {

  const [category, setCategory] = useState("Monuments");
  const [site, setSite] = useState("Taj Mahal");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState([]);

  /* Category Data */
  const categoryOptions = {
    Monuments: [
      "Taj Mahal",
      "Qutub Minar",
      "Hampi",
      "Konark Sun Temple",
      "India Gate"
    ],
    "Dance Forms": [
      "Bharatanatyam",
      "Kathak",
      "Kathakali",
      "Kuchipudi",
      "Odissi"
    ],
    Music: [
      "Carnatic Music",
      "Hindustani Classical",
      "Bhangra Music",
      "Ghazal",
      "Sufi Music"
    ],
    Paintings: [
      "Madhubani",
      "Warli",
      "Tanjore",
      "Pattachitra",
      "Gond"
    ],
    "Food Culture": [
      "Punjab Cuisine",
      "Tamil Nadu Cuisine",
      "Rajasthan Cuisine",
      "Kerala Cuisine",
      "Bengal Cuisine"
    ]
  };

  /* Load saved discussions */
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("discussions")) || [];
    setPosts(stored);
  }, []);

  /* Scroll Reveal */
  useEffect(() => {
    const cards = document.querySelectorAll(".card");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
        }
      });
    });
    cards.forEach(card => observer.observe(card));
  }, [posts]);

  /* Update site when category changes */
  useEffect(() => {
    setSite(categoryOptions[category][0]);
  }, [category]);

  const addPost = () => {
    if (!title || !message) return;

    const newPost = {
      id: Date.now(),
      category,
      site,
      title,
      message
    };

    const updated = [newPost, ...posts];

    setPosts(updated);
    localStorage.setItem("discussions", JSON.stringify(updated));

    setTitle("");
    setMessage("");
  };

  return (
    <div className="page-container">

      <h1 style={{ marginBottom: "15px" }}>
        Cultural Discussions
      </h1>

      {/* Discussion Form */}
      <div
        className="card"
        style={{
          maxWidth: "750px",
          margin: "30px auto",
          padding: "30px",
          borderRadius: "20px"
        }}
      >

        {/* Category Dropdown */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg,#c29b87,#a97954)",
            color: "#1e423f",
            fontWeight: "600"
          }}
        >
          {Object.keys(categoryOptions).map((cat, index) => (
            <option key={index} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Dynamic Related Field Dropdown */}
        <select
          value={site}
          onChange={(e) => setSite(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "none",
            background: "#f6f2ea"
          }}
        >
          {categoryOptions[category].map((item, index) => (
            <option key={index}>{item}</option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Discussion Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid #c29b87"
          }}
        />

        <textarea
          placeholder="Write your discussion..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "12px",
            border: "1px solid #c29b87"
          }}
        />

        <button className="btn-primary" onClick={addPost}>
          Post Discussion
        </button>
      </div>

      {/* Display Posts */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "30px",
          marginTop: "40px"
        }}
      >

        {posts.length === 0 && (
          <p style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No discussions yet.
          </p>
        )}

        {posts.map(post => (
          <div key={post.id} className="card">
            <h3>{post.title}</h3>
            <p><strong>Category:</strong> {post.category}</p>
            <p><strong>Related To:</strong> {post.site}</p>
            <p>{post.message}</p>
          </div>
        ))}

      </div>

    </div>
  );
}

export default Discussions;