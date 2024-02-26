import "../Adoption/adoption.css";

import firstCard from "../../Images/firstCard.jpg";
import secondCard from "../../Images/secondCard.jpg";
import thirdCard from "../../Images/thirdCard.jpg";
import fourthCard from "../../Images/fourthCard.jpg";
import fifthCard from "../../Images/fifthCard.jpg";
import sixthCard from "../../Images/sixthCard.jpg";

const Adoption = () => {
  return (
    <section className="card-main">
      <div className="card-container">
        <img src={firstCard} alt="Cat image" className="card-img" />

        <h1 className="card-title">Hope</h1>
        <ul className="card-ul">
          <li className="card-li">Domestic Short Hair</li>
          <li className="card-li">Female</li>
          <li className="card-li">3 months</li>
        </ul>
        <a href="contact" className="card-btn">
          Adoption
        </a>
        <a href="contact" className="card-btn">
          Foster Home
        </a>
      </div>
      <div className="card-container">
        <img src={secondCard} alt="Cat image" className="card-img" />

        <h1 className="card-title">Jess</h1>
        <ul className="card-ul">
          <li className="card-li">Domestic Short Hair</li>
          <li className="card-li">Male</li>
          <li className="card-li">2years 2months</li>
        </ul>
        <a href="contact" className="card-btn">
          Adoption
        </a>
        <a href="contact" className="card-btn">
          Foster Home
        </a>
      </div>
      <div className="card-container">
        <img src={thirdCard} alt="Cat image" className="card-img" />

        <h1 className="card-title">Jolene</h1>
        <ul className="card-ul">
          <li className="card-li">Domestic Short Hair</li>
          <li className="card-li">Female</li>
          <li className="card-li">1 year</li>
        </ul>
        <a href="contact" className="card-btn">
          Adoption
        </a>
        <a href="contact" className="card-btn">
          Foster Home
        </a>
      </div>
      <div className="card-container">
        <img src={fourthCard} alt="Cat image" className="card-img" />

        <h1 className="card-title">Muffin</h1>
        <ul className="card-ul">
          <li className="card-li">Domestic Short Hair</li>
          <li className="card-li">Female</li>
          <li className="card-li">1 year 2months</li>
        </ul>
        <a href="contact" className="card-btn">
          Adoption
        </a>
        <a href="contact" className="card-btn">
          Foster Home
        </a>
      </div>
      <div className="card-container">
        <img src={fifthCard} alt="Cat image" className="card-img" />

        <h1 className="card-title">Jessica</h1>
        <ul className="card-ul">
          <li className="card-li">Domestic Short Hair</li>
          <li className="card-li">Female</li>
          <li className="card-li">9 months</li>
        </ul>
        <a href="contact" className="card-btn">
          Adoption
        </a>
        <a href="contact" className="card-btn">
          Foster Home
        </a>
      </div>
      <div className="card-container">
        <img src={sixthCard} alt="Cat image" className="card-img" />

        <h1 className="card-title">Leo</h1>
        <ul className="card-ul">
          <li className="card-li">Domestic Short Hair</li>
          <li className="card-li">Female</li>
          <li className="card-li">3 months</li>
        </ul>
        <a href="contact" className="card-btn">
          Adoption
        </a>
        <a href="contact" className="card-btn">
          Foster Home
        </a>
      </div>
    </section>
  );
};

export default Adoption;
