import { katalogData } from "../../../static/headerData";
import { Link } from "react-router-dom";
import "./HeaderAccordion.css";
import { MdOutlineMenuBook } from "react-icons/md";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicExample() {
  return (
    <Accordion className="Accordion-sidebar">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="sidebar-katalog-icon" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>
          <div className="Accordion-heading">
            <MdOutlineMenuBook /> Katalog
          </div>
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {katalogData.map((item, index) => (
          <Accordion className="sidebar-kategories">
            <AccordionSummary
              key={index}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="sidebar-accordion-title">
                {item.title.icon}
                <p>{item.title.titleName}</p>
              </Typography>
            </AccordionSummary>

            {katalogData.map((item) => (
              <AccordionDetails className="accordionDatum">
                {item.collection.map((itemlink, index) => (
                  <Link key={index}>{itemlink.collectionItemName}</Link>
                ))}
              </AccordionDetails>
            ))}
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  );
}

export function AccordionSidebarLinks() {
  return (
    <>
      <Accordion className="sidebar-accordion-footer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p className="sidebar-footer-title">Biz haqimizda</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="sidebar-footer-links">
          <Link>Topshirish punktlari</Link>
          <Link>Vakansiyalar</Link>
        </AccordionDetails>
      </Accordion>
      <Accordion className="sidebar-accordion-footer">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <p className="sidebar-footer-title">Hamkorlarga</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="sidebar-footer-links">
          <Link>Uzumda soting</Link>
          <Link>Sotuvchi kabinetiga kirish</Link>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
