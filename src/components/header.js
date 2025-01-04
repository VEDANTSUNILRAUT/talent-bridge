import React from 'react';
import './header.css';

const HEADER_NAV_LINKS = [
  { text: 'Home', url: '#' },
  { text: 'About', url: '#' },
  { text: 'Services', url: '#' },
  { text: 'Contact', url: '#' },
];

const BUTTON_CLASSES = 'btn-login';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            aria-hidden="true"
            alt="Logo"
            src="./TB.png"
          />
        </div>
        <nav className="nav-links">
          {HEADER_NAV_LINKS.map((link, index) => (
            <a key={index} href={link.url} className="nav-link">
              {link.text}
            </a>
          ))}
          <a href="#" className={BUTTON_CLASSES}>
            Login
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
