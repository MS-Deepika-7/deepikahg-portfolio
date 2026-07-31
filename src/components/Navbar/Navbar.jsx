import { useState } from "react";
import "./Navbar.css";

function Navbar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="site-header">
      <nav className="navbar">
        
        {/* Logo */}
        <div className="logo">
          DH
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* Right Side Buttons */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;