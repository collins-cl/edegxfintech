import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import "../Home/Home.scss";
import Itunes from "../../assets/apple.svg";
import Nord from "../../assets/nordstorm.svg";
import Ebay from "../../assets/ebay.svg";
import Steam from "../../assets/steam.svg";
import Walmart from "../../assets/walmart.svg";
import Card from "../../assets/itunescard.svg";
import WalmartCard from "../../assets/walmartcard.svg";
import Whyus from "../../components/WhyUs/Whyus";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Hero />

      <div className="partnership">
        <div className="partner-title">
          Partnered with many companies and counting
        </div>

        <div className="partner-cnt">
          <img src={Itunes} alt="" />
          <img src={Nord} alt="" />
          <img src={Ebay} alt="" />
          <img src={Steam} alt="" />
          <img src={Walmart} alt="" />
        </div>
      </div>

      <div className="about">
        <div className="ab-title">about us</div>

        <h2>One app for all your money things</h2>

        <p>
          remove all the friction that stands in the way of your money goals
        </p>

        <div className="about-container">
          <div className="section">
            <div className="box-1">
              <div className="title">
                Gifting just got smarter with crypto-driven gift cards
              </div>

              <p>
                Crypto makes gifting seamless, combining cutting-edge blockchain
                technology with thoughtful gestures to create a truly unique and
                modern way to send digital gifts that are secure, transparent,
                and easily accessible to anyone, anywhere in the world.
              </p>

              <img src={Card} alt="" />
            </div>

            <div className="box-2"></div>
          </div>

          <div className="section">
            <div className="box-2"></div>
            <div className="box-1">
              <div className="title">
                A modern way to gift, secure and borderless.
              </div>

              <p>
                Ledgerly ensures that your gift cards are not only stored
                securely but are beautifully presented on the blockchain,
                offering a seamless, transparent, and decentralized solution
                that guarantees your digital gifts remain safe while showcasing
                the power of blockchain technology.
              </p>

              <img src={WalmartCard} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Whyus />

      <Faq />

      <Footer />
    </div>
  );
};

export default Home;
