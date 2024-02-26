import { NavLink } from "react-router-dom";
import "../GetStarted/getStarted.css";

const GetStarted = () => {
  return (
    <div className="get-started">
      <h3>Get Started</h3>
      <p>Ready to find your new furry friend?</p>
      <div className="buttons">
        <NavLink to="/registration" className="btn">
          Get Started
        </NavLink>
      </div>
    </div>
  );
};

export default GetStarted;
