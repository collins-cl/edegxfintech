import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa6";
import "../Footer/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-cnt">
        <h1 className="title">
          Stay updated by subscribing to our newsletter.
        </h1>

        <p className="info">
          Stay informed and up-to-date with the latest news and updates from our
          company by subscribing to our newsletter.
        </p>

        <div className="newsletter-mail">
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
          />

          <div className="submit">Subscribe</div>
        </div>

        <div className="socials">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="icon" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icon" />
          </a>
        </div>

        <hr />

        <div className="foot-note">
          Logo.Lo is a leading platform for safe, secure, & prompt gift cards
          and crypto transactions.
        </div>

        <div className="t-c">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            Terms and Conditions
          </a>
        </div>

        <div className="rights">© 2024 Logo.Lo. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
