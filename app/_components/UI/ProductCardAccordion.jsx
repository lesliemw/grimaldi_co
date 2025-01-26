import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export function ProductDetailsAccordion({ care_instructions, about }) {
  const [open, setOpen] = useState(null); // Set initial state to null

  // Handle accordion toggle
  const handleOpen = (value) => setOpen(open === value ? null : value); // Toggle to null when clicked twice

  return (
    <>
      <Accordion
        open={open === 1}
        icon={open === 1 ? <IoIosArrowUp /> : <IoIosArrowDown />} // Correct icon logic
      >
        <AccordionHeader className="text-sm" onClick={() => handleOpen(1)}>
          About Me
        </AccordionHeader>
        <AccordionBody>{about}</AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        icon={open === 2 ? <IoIosArrowUp /> : <IoIosArrowDown />} // Correct icon logic
      >
        <AccordionHeader className="text-sm" onClick={() => handleOpen(2)}>
          Care Instructions
        </AccordionHeader>
        <AccordionBody>{care_instructions}</AccordionBody>
      </Accordion>
    </>
  );
}
