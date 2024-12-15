import "../Faq/Faq.scss";
import AccordionWrapper from "../Accordion/Accordion";

const Faq = () => {
  return (
    <div className="faq">
      <div className="f-wrapper">
        <div className="f-title">Faqs</div>

        <h2 className="f-intro">Have any questions?.</h2>

        <p className="f-info">
          Gain insights and expand your understanding of Logo.Lo by finding
          answers to all your questions.
        </p>

        <AccordionWrapper />
      </div>
    </div>
  );
};

export default Faq;
