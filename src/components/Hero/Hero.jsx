import "../Hero/Hero.scss";
import Appstore from "../../assets/appstore.png";
import Playstore from "../../assets/playstore.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-cnt">
        <h1>
          Global Trading Solutions <br /> for Africa&apos;s Crypto and Forex
          Professionals
        </h1>

        <p>
          Effortlessly set up crypto wallets in{" "}
          <span style={{ fontWeight: "bold" }}>NGN</span>,{" "}
          <span style={{ fontWeight: "bold" }}>USD</span>, and{" "}
          <span style={{ fontWeight: "bold" }}>GBP </span>
          equivalents to seamlessly receive payments from around the globe.
          Plus, enjoy the convenience of a USD virtual crypto debit card for
          managing your international transactions.
        </p>

        <div className="app-dwn-section">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="appstore"
          >
            <img src={Appstore} alt="png of appstore" />
          </a>

          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="appstore"
          >
            <img src={Playstore} alt="png of appstore" />
          </a>
        </div>

        <div className="pseudo-boxes">
          <div className="div"></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
