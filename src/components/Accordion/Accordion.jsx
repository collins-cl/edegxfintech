import "../Accordion/Accordion.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { GoArrowDown } from "react-icons/go";

const AccordionWrapper = () => {
  return (
    <div className="accordion">
      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails className="acc-dets">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>

      <Accordion className="acc-cnt">
        <AccordionSummary
          expandIcon={<GoArrowDown className="icon" />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <p>Accordion 1</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionWrapper;
