import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav-bar-container">
        <img src="" alt="" />

        <ul className="nav-list-container">
          <li className="nav-lists">
            <Link to="about" className="nav-items">
              ABOUT
            </Link>
          </li>
          <li className="nav-lists">
            <Link to="services" className="nav-items">
              SERVICES
            </Link>
          </li>
          <li className="nav-lists">
            <Link to="contact" className="nav-items">
              CONTACT
            </Link>
          </li>
          <li className="nav-lists">
            <Link to="reservation" className="nav-items">
              RESERVATION
            </Link>
          </li>
          <li className="nav-lists">LIVE AGENTS ARE AVAILABLE 24/7</li>
          <li className="nav-lists phone-number">
            <a href="tel:+16109381411">+1 610 938 1411</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
