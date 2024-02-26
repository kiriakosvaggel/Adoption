import { Link } from "react-router-dom";
import { TiArrowBack, TiArrowForward } from "react-icons/ti";
import { IoHome } from "react-icons/io5";
const NavigationButtons = () => {
  return (
    <>
      <div className="navigation-buttons">
        <Link to="/previous" className="nav-link">
          <TiArrowBack />
        </Link>
        <Link to="/" className="nav-link">
          <IoHome />
        </Link>
        <Link to="/next" className="nav-link">
          <TiArrowForward />
        </Link>
      </div>
    </>
  );
};

export default NavigationButtons;
