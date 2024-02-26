/* eslint-disable react/no-unescaped-entities */
import "../AboutUs/aboutUs.css";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="main-div">
      <h1>About Our Furry Friends</h1>
      <section className="about-us">
        <h3 className="title">WHO WE ARE</h3>
        <p>
          Welcome to our pet adoption website! We are dedicated to helping pets
          find loving homes and connecting animal lovers with their perfect
          companions.
        </p>
        <p>
          Our mission is to provide a platform where shelters, rescues, and pet
          owners can connect with individuals and families looking to adopt. We
          believe that every pet deserves a chance at a happy life, and our goal
          is to make the adoption process as seamless and rewarding as possible.
        </p>

        <h4 className="title">WE'RE DIFFERENT THAT THE REST</h4>
        <p>
          Whether you are looking to adopt a furry friend or simply want to
          learn more about pet adoption, we are here to help. Browse through our
          listings of adoptable pets, read heartwarming adoption stories, and
          explore resources to help you provide the best care for your new
          family member.
        </p>
        <p>
          Thank you for considering adoption and joining us in our mission to
          make a difference in the lives of pets in need!
        </p>
        <div className="button-ab">
          <NavLink to="/Adoption">
            <button>Take a look</button>
          </NavLink>

          <button>Donate</button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
