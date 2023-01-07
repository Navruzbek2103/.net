import React from "react";
import { BsPeopleFill } from "react-icons/bs";
import "./style.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const index = () => {
  return (
    <>
      <div className="sidebar card d-flex py-4 flex-column align-items-center">
        <div className="side_bar">
          <div className="sidebar-top w-100">
            <a
              className="sidebar__link d-flex
            align-items-center"
              href="./"
            >
              <BsPeopleFill className="img" />
              <h1 className="logo">.Net Uzbekistan</h1>
            </a>
          </div>
        <div className="sidebar__input my-3 w-100">
          <input type="search" className="form-control search-bar" />
        </div>
        </div>

        <div className="w-100 d-flex flex-column mt-4 accordion-menu">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">
                .Net Darslari
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Javascript</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Ios Swift</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Android darslar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Loyihalar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h6">Fikr va mulohazalar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Lorem ipsum dolor sit amet,</Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default index;
