import { FiShield } from "react-icons/fi";
import "../WhyUs/Whyus.scss";
import { MdOutlinePhone } from "react-icons/md";
import { PiChatCentered } from "react-icons/pi";

const Whyus = () => {
  return (
    <div className="why-cnt">
      <div className="why-wrapper">
        <h2 className="w-title">Why use Logo.Lo</h2>

        <div className="absolute-cnt">
          <div className="box-wrapper">
            <div className="box">
              <div className="logo">
                <FiShield className="icon" />
              </div>

              <div className="title">Secure</div>

              <div className="dets">
                Built on safe and secured infrastructure.
              </div>
            </div>

            <div className="box">
              <div className="logo">
                <MdOutlinePhone className="icon" />
              </div>

              <div className="title">Simple to use</div>

              <div className="dets">
                With little or no guidance, you are sure to find your way
                easily.{" "}
              </div>
            </div>

            <div className="box">
              <div className="logo">
                <PiChatCentered className="icon" />
              </div>

              <div className="title">Excellent Support</div>

              <div className="dets">
                Built on safe and secured infrastructure.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
