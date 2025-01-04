import React from 'react';
import './footer.css';

const FOOTER_QUICK_LINKS = [
  { text: 'Home', url: '#' },
  { text: 'About', url: '#' },
  { text: 'Services', url: '#' },
  { text: 'Contact', url: '#' },
];

const SOCIAL_MEDIA_BUTTONS = [
  { text: 'FB', bgColor: 'bg-zinc-600', textColor: 'text-white' },
  { text: 'IG', bgColor: 'bg-zinc-600', textColor: 'text-white' },
  { text: 'TW', bgColor: 'bg-zinc-600', textColor: 'text-white' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="quick-links">
          <h2 className="footer-heading">Quick Links</h2>
          <ul className="links-list">
            {FOOTER_QUICK_LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="link">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social-media">
          <h2 className="footer-heading">Follow Us</h2>
          <div className="social-buttons">
            {SOCIAL_MEDIA_BUTTONS.map((button, index) => (
              <button
                key={index}
                className={`social-button ${button.bgColor} ${button.textColor}`}
              >
                {button.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
