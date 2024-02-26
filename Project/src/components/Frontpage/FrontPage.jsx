import "./frontPage.css";
import { NavLink } from "react-router-dom";
import frontPage from "../../Images/frontPage.jpg";
const FrontPage = () => {
  return (
    <>
      <section className="container-page">
        <img src={frontPage} alt="" className="frontPage-img" />
        <div className="box">
          <h1>Welcome Page</h1>
          <p>Welcome lets take a quick look</p>
          <NavLink to={"/AboutUs"}>
            <button>Start Now</button>
          </NavLink>
          <button className="second-box">Skip</button>
        </div>
      </section>
    </>
  );
};

export default FrontPage;
