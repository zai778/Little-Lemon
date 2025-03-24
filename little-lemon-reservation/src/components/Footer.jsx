import React from "react";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Little Lemon 🍋. All rights reserved.</p>
        <p>Made with ❤️ by me</p>
      </div>
    </footer>
  );
}

export default Footer;