import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Close, ArrowForward, Favorite } from "@mui/icons-material";
import logoImage from "../../assets/images/logo.jpg"; // or .png/.jpg
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden";
  };

  const navItems = [
    { name: "Products", path: "/products" },
    { name: "Process", path: "/process" },
    { name: "Impact", path: "/impact" },
    { name: "Team", path: "/team" },
    { name: "News", path: "/news" },
    { name: "Contact Us", path: "/contact", type: "contact" },
    { name: "Donate", path: "/donate", type: "donate" },
  ];

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logoImage} alt="EcoNutri Logo" className="logo" />
          <span className="logo-text">Eco Plant Protein</span>
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <Close className="menu-icon" /> : <Menu className="menu-icon" />}
        </button>

        <nav className={`nav ${isMenuOpen ? "mobile-open" : ""}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.name} className="nav-item">
                <Link
                  to={item.path}
                  className={`nav-link ${
                    item.type === "contact"
                      ? "contact-btn"
                      : item.type === "donate"
                      ? "donate-btn"
                      : ""
                  }`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    document.body.style.overflow = "auto";
                  }}
                >
                  {item.name}
                  {item.type === "contact" && <ArrowForward className="icon" />}
                  {item.type === "donate" && <Favorite className="icon" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
