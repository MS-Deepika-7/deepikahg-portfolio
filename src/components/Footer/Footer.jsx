import { useState } from 'react'
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <h3 className="footer-logo">DH</h3>

        <p className="footer-text">
          © {year} Deepika H G. All Rights Reserved.
        </p>

        <p className="footer-tagline">
          Built with React ❤️
        </p>

        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="mailto:yourmail@gmail.com"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;