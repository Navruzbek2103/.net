import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, 1)"
      : "rgba(255, 255, 255, 1)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const [active, setActive] = useState("");
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h6">C# .NET</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink to="/doc/net">
            <Typography>.Netga hush kelibsiz</Typography>
          </NavLink>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>.Net bilan bog'liq Muaomo</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>.Net asoslari</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Basics</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>LINQ asoslari</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography variant="h6">Database</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink to="/doc/data">
            <Typography>MS SQL server</Typography>
          </NavLink>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>PostgreSQL</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6">JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink to="/doc/js">
            <Typography>JavaScript</Typography>
          </NavLink>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>React js</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Vue js</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6">Loyihalar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink to="/doc/pro" onClick={() => setActive((e) => !e)}>
            <Typography>Telegram bot</Typography>
          </NavLink>
        </AccordionDetails>
        <AccordionDetails>
          <Typography>Crm Platform</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography variant="h6">Fikr va mulohazalar</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <NavLink to="/doc/comment">
            <Typography variant="subtitle2">
              FAANG gacha bo'lgan yo'l
            </Typography>
          </NavLink>
        </AccordionDetails>
      </Accordion>
      <div className="add__page d-flex align-items-center justify-content-start w-100 rounded-1 p-2">
        <LibraryAddIcon className="plus" />
        <Link>
          <h3 className="text-black fs-5 fw-normal mx-3">Bo'lim Qo'shish</h3>
        </Link>
      </div>
    </div>
  );
}
