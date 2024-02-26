import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({ registrationCompleted }) => {
  return (
    <>
      {registrationCompleted && <nav className="navbar-top"></nav>}
      <nav className="navbar-bottom">
        <ul>
          <NavLink to="/aboutUs">
            <li>About us</li>
          </NavLink>
          <NavLink to="/adoption">
            <li>Adoption & foster care</li>
          </NavLink>
          <NavLink to="/contact">
            <li>CONTACT US</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
