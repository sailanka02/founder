import React from 'react';
import './hero.css';

const Footer = () => {
    return (
      <footer className="footer">
      <div className="footer-columns">
        <div>
          <h3>Use cases</h3>
          <ul>
            <li>UI design</li>
            <li>UX design</li>
            <li>Wireframing</li>
            <li>Diagramming</li>
            <li>Brainstorming</li>
          </ul>
        </div>
        <div>
          <h3>Explore</h3>
          <ul>
            <li>Design</li>
            <li>Prototyping</li>
            <li>Development features</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Support</li>
            <li>Developers</li>
          </ul>
        </div>
      </div>
    </footer>
    );
};

export default Footer;