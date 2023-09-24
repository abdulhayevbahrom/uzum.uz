// import {Accordion}  from "react-bootstrap";
import { katalogData } from "../../../static/headerData";
import { Link } from "react-router-dom";
import { GrCatalog } from "react-icons/gr";


import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicExample() {
  return (
    <div className="BasicExample">
      <Accordion className="Accordion-sidebar">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <GrCatalog /> Katalog
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {katalogData.map((item, index) => (
            <Typography key={index}>
              <Accordion className="accordion-inner">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    {item.title.icon}
                    <p>{item.title.titleName}</p>
                    
                    <ul className="accordion-ul">
                      {item.collection.map((link_item, index) => (
                        <li key={index}>
                          <Link to={"/"}>{link_item.collectionItemLinks}</Link>
                        </li>
                      ))}
                    </ul>
                    
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Link></Link>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Typography>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
