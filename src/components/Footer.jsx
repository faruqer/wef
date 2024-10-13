// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <div style={footerContainerStyles}>
        {/* Footer Column 1 */}
        <div style={footerColumnStyles}>
          <h4>Company Info</h4>
          <ul style={listStyles}>
            <li><a href="/about-us" style={linkStyles}>About Us</a></li>
            <li><a href="/contact" style={linkStyles}>Contact Us</a></li>
            <li><a href="/careers" style={linkStyles}>Careers</a></li>
          </ul>
        </div>

        {/* Footer Column 2 */}
        <div style={footerColumnStyles}>
          <h4>Support</h4>
          <ul style={listStyles}>
            <li><a href="/faq" style={linkStyles}>FAQ</a></li>
            <li><a href="/customer-service" style={linkStyles}>Customer Service</a></li>
            <li><a href="/return-policy" style={linkStyles}>Return Policy</a></li>
          </ul>
        </div>

        {/* Footer Column 3 */}
        <div style={footerColumnStyles}>
          <h4>Legal</h4>
          <ul style={listStyles}>
            <li><a href="/privacy-policy" style={linkStyles}>Privacy Policy</a></li>
            <li><a href="/terms-of-service" style={linkStyles}>Terms of Service</a></li>
            <li><a href="/cookies-policy" style={linkStyles}>Cookies Policy</a></li>
          </ul>
        </div>

        {/* Footer Column 4 */}
        <div style={footerColumnStyles}>
          <h4>Follow Us</h4>
          <ul style={listStyles}>
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyles}>Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Copyright and Misc Links */}
      <div style={copyrightStyles}>
        <p>&copy; 2024 YourCompany. All rights reserved.</p>
        <p>
          <a href="/privacy-policy" style={linkStyles}>Privacy Policy</a> | 
          <a href="/terms-of-service" style={linkStyles}> Terms of Service</a> | 
          <a href="/sitemap" style={linkStyles}> Sitemap</a>
        </p>
      </div>
    </footer>
  );
};

// Styling
const footerStyles = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "20px 0",
  textAlign: "center",
};

const footerContainerStyles = {
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  maxWidth: "1200px",
  margin: "0 auto",
};

const footerColumnStyles = {
  marginBottom: "20px",
};

const listStyles = {
  listStyle: "none",
  padding: 0,
};

const linkStyles = {
  color: "#fff",
  textDecoration: "none",
};

const copyrightStyles = {
  borderTop: "1px solid #555",
  paddingTop: "10px",
  marginTop: "20px",
};

export default Footer;
