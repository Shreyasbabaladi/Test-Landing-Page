import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function AccordionList(props) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const items = [
    {
      title: "Maintainance services",
      innerIteams: [
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
      ],
    },
    {
      title: "Work wear & Uniforms",
      innerIteams: [
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
      ],
    },
    {
      title: "Custodial services",
      innerIteams: [
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
      ],
    },
    {
      title: "Maintainance services",
      innerIteams: [
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
      ],
    },
    {
      title: "Maintainance services",
      innerIteams: [
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
        { title: "Levels 3", link: "/products" },
      ],
    },
  ];

  return (
    <div className="container mt-4">
      <Accordion flush open={open} toggle={toggle}>
        {items.map((item, index) => (
          <AccordionItem>
            <AccordionHeader targetId={index}>{item.title}</AccordionHeader>
            <AccordionBody accordionId={index}>
              {item.innerIteams.map((innerIteam) => (
                <Link to={innerIteam.link}>
                <AccordionItem> {innerIteam.title} </AccordionItem>
                </Link>
              ))}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionList;
