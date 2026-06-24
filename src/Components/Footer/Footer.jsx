import './Footer.css';
import { FaLinkedin } from "react-icons/fa";
function Footer({activehome, activeResearch, activeWater, activePH, activeAbout, activeContact}){  
    
    return(
        <>
            <footer className="footer">
                <div className="footer-container">
                <div className="portal-info">
                    <h2>Water Research Portal</h2>
                    <p>
                        Advancing knowledge in water resources, hydrology,
                        groundwater management, climate resilience, and sustainable
                        water solutions through research, innovation, and collaboration.
                    </p>
                </div>
                <div className="footer-column">
                    <h3>Research Areas</h3>
                    <ul>
                        <li><a href="https://www.nature.com/subjects/hydrology">Hydrology</a></li>
                        <li><a href="https://iwaponline.com/wqrj">Water Quality</a></li>
                        <li><a href="https://un-igrac.org/our-work/what-we-do/groundwater-research">Groundwater</a></li>
                        <li><a href="https://www.frontiersin.org/journals/climate/research-topics">Climate Impact</a></li>
                        <li><a href="https://scispace.com/journals/journal-of-remote-sensing-gis-1s5vte2x/2021">GIS & Remote Sensing</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Quick Links</h3>
                    <ul>
                       <li><a href="#home" onClick={activehome}>Home</a></li>
                        <li><a href="#research" onClick={activeResearch}>Research Areas</a></li>
                        <li><a href="#Water" onClick={activeWater}>Types of Water</a></li>
                        <li><a href="#PH" onClick={activePH}>PH Status</a></li>
                        <li><a href="#About" onClick={activeAbout}>About</a></li>
                        <li><a href="#Contact" onClick={activeContact}>Contact</a></li>
                    </ul>
                </div>
                <div className="footer-column contact">
                    <h3>Contact Us</h3>
                    <p>📍 Water Research Institute</p>
                    <p>🌍 Sustainable Water Management Center</p>
                    <p>📧 ashish25122022gautam@gmail.com</p>
                    <p>📞 +91 96275 09661</p>

                    <div className="social-links">
                        <a href="https://www.facebook.com/">f</a>
                        <a href="https://www.instagram.com/">in</a>
                        <a href="https://www.linkedin.com/in/ashishnodedeveloper/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>   
                </footer>
        </>
    );
}
export default Footer;