import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function ProductDetailsAccordion({ care_instructions, about }) {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion
        open={open === 1}
        icon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      >
        <AccordionHeader className="text-sm" onClick={() => handleOpen(1)}>
          About Me
        </AccordionHeader>
        <AccordionBody>{about}</AccordionBody>
      </Accordion>
      <Accordion
        open={open === 2}
        icon={open ? <IoIosArrowUp /> : <IoIosArrowDown />}
      >
        <AccordionHeader className="text-sm" onClick={() => handleOpen(2)}>
          Care Instructions
        </AccordionHeader>
        <AccordionBody>{care_instructions}</AccordionBody>
      </Accordion>
    </>
  );
}
