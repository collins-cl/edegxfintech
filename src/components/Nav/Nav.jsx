import "../Nav/Nav.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav">
      <div className="nav-cnt">
        <div className="logo">
          <Link to="/">Logo.Lo</Link>
        </div>
        <div className="nav-wrapper">
          <div className={open ? "nav-active" : "nav-links"}>
            <div className="nav-list">
              <Link>Support</Link>
              <Link>Newsletter</Link>
            </div>

            <div className="nav-invite">
              <Link className="login">Login</Link>
              <Link className="signup">Become a user</Link>
            </div>
          </div>
        </div>

        <div onClick={() => setOpen(!open)}>
          <FaBars className="nav-icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
