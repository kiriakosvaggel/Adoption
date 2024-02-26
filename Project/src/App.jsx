import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MainPage from "./components/MainPage/MainPage";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import Registration from "./components/Registration/Registration";
import Adoption from "./components/Adoption/Adoption";
import Contact from "./components/Contact/Contact";
import FrontPage from "./components/Frontpage/FrontPage";

import { IoHome } from "react-icons/io5";
// import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  const [registrationCompleted, setRegistrationCompleted] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      {registrationCompleted && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        {registrationCompleted ? null : (
          <Route
            path="/"
            element={
              <button onClick={() => navigate.push("/registration")}>
                Register
              </button>
            }
          />
        )}

        <Route path="frontPage" element={<FrontPage />} />

        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="adoption" element={<Adoption />} />
        <Route path="contact" element={<Contact />} />
        <Route
          path="registration"
          element={
            <Registration onComplete={() => setRegistrationCompleted(true)} />
          }
        />
      </Routes>
      {/* Navigation buttons */}
      <div className="navigation-buttons">
        <Link to="/FrontPage" className="nav-link">
          <IoHome />
        </Link>
      </div>
    </>
  );
}

export default App;
