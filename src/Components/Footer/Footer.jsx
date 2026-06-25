import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function Footer({ activehome, activeResearch, activeWater, activePH, activeAbout, activeContact }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      {/* Wave top edge */}
      <div className="footer-wave" aria-hidden="true">
        <svg viewBox="0 0 1440 64" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            fill="#f0faff"
            d="M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z"
          />
        </svg>
      </div>

      {/* Main grid */}
      <div className="footer-container">

        {/* Brand */}
        <div className="portal-info">
          <div className="footer-brand">
            <span className="brand-icon">💧</span>
            <h2>Water Research Portal</h2>
          </div>
          <p>
            Advancing knowledge in water resources, hydrology, groundwater
            management, climate resilience, and sustainable water solutions
            through research, innovation, and collaboration.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/ashishnodedeveloper/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Research Areas */}
        <div className="footer-column">
          <h3>Research Areas</h3>
          <ul>
            <li><a href="https://www.nature.com/subjects/hydrology" target="_blank" rel="noopener noreferrer">Hydrology</a></li>
            <li><a href="https://iwaponline.com/wqrj" target="_blank" rel="noopener noreferrer">Water Quality</a></li>
            <li><a href="https://un-igrac.org/our-work/what-we-do/groundwater-research" target="_blank" rel="noopener noreferrer">Groundwater</a></li>
            <li><a href="https://www.frontiersin.org/journals/climate/research-topics" target="_blank" rel="noopener noreferrer">Climate Impact</a></li>
            <li><a href="https://scispace.com/journals/journal-of-remote-sensing-gis-1s5vte2x/2021" target="_blank" rel="noopener noreferrer">GIS &amp; Remote Sensing</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home"     onClick={activehome}>Home</a></li>
            <li><a href="#research" onClick={activeResearch}>Research Areas</a></li>
            <li><a href="#Water"    onClick={activeWater}>Types of Water</a></li>
            <li><a href="#PH"       onClick={activePH}>PH Status</a></li>
            <li><a href="#About"    onClick={activeAbout}>About</a></li>
            <li><a href="#Contact"  onClick={activeContact}>Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact Us</h3>
          <ul className="contact-list">
            <li>
              <span className="contact-icon">📍</span>
              <span>Water Research Institute,<br />Sustainable Water Management Center</span>
            </li>
            <li>
              <span className="contact-icon">📧</span>
              <a href="mailto:ashish25122022gautam@gmail.com">
                ashish25122022gautam@gmail.com
              </a>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <a href="tel:+919627509661">+91 96275 09661</a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>© {year} <span>Water Research Portal</span>. All rights reserved.</p>
        <nav className="footer-bottom-links" aria-label="Footer legal links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Use</a>
        </nav>
      </div>

    </footer>
  );
}

export default Footer;
