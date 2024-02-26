import GetStarted from "../GetStarted/GetStarted";
import "../MainPage/mainPage.css";
// import { NavLink } from "react-router-dom";
// import { TiArrowBack } from "react-icons/ti";
// import { TiArrowForward } from "react-icons/ti";
// import { IoHome } from "react-icons/io5";

const MainPage = () => {
  return (
    <>
      <div className="background-container">
        <h1 className="Title">
          <GetStarted />
        </h1>
      </div>
      {/* <div className="nav-buttons">
        <NavLink to="/adoption" className="nav-link">
          <TiArrowBack />
        </NavLink>
        <NavLink to="/" className="nav-link">
          <IoHome />
        </NavLink>
        <NavLink to="/aboutUs" className="nav-link">
          <TiArrowForward />
        </NavLink>
      </div> */}
    </>
  );
};

export default MainPage;
