import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css"; // Import styles for dark mode

// StreamList Component
function StreamList() {
  const [input, setInput] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("User input:", input);
  };

  return (
    <div>
      <h2>Stream List</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange} placeholder="Enter stream name..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Placeholder Components
function Movies() {
  return <h2>Movies Page (Coming Soon)</h2>;
}

function Cart() {
  return <h2>Cart Page (Coming Soon)</h2>;
}

function About() {
  return <h2>About Page (Coming Soon)</h2>;
}

// Navigation Menu
function Navigation({ toggleDarkMode, darkMode }: { toggleDarkMode: () => void; darkMode: boolean }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <div className="dark-mode-toggle">
        <span>Dark Mode</span>
        <label className="switch">
          <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
          <span className="slider round"></span>
        </label>
      </div>
    </nav>
  );
}

// Main App Component
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark-mode" : ""}`}>
        <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<StreamList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
