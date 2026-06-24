import './Header.css';
const Header =({activehome, activeResearch, activeWater, activePH, activeAbout, activeContact}) => {
    return(
        <>
            <nav className="navbar">
                <a href="#" className="logo">
                    <div className="logo-icon">💧</div>
                    <div className="logo-text">
                        <h2>Water Research Portal</h2>
                        <span>Knowledge • Innovation • Sustainability</span>
                    </div>
                </a>
                <ul className="nav-links">
                    <li><a href="#home" onClick={activehome}>Home</a></li>
                    <li><a href="#research" onClick={activeResearch}>Research Areas</a></li>
                    <li><a href="#Water" onClick={activeWater}>Types of Water</a></li>
                    <li><a href="#PH" onClick={activePH}>PH Status</a></li>
                    <li><a href="#About" onClick={activeAbout}>About</a></li>
                    <li><a href="#Contact" onClick={activeContact}>Contact</a></li>
                 </ul>
                <div className="menu-toggle">
                    ☰
                </div>
            </nav>
        </>
    );
}
export default Header;