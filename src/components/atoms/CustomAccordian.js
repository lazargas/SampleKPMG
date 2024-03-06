import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CustomAccordian = ({ title, data }) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
        style={{ backgroundColor: "#4856BEF5", borderRadius: "5px" }}
      >
        <Typography style={{ color: "white", fontSize: "12px" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <div className="flex flex-row flex-wrap justify-start gap-[2.5rem]">
          {data?.map((col, index) => (
            <div className="mb-2" key={index} style={{ minWidth: "300px" }}>
              <label
                htmlFor={`input-${col.col}`}
                className={`block w-full text-sm font-medium text-gray-700 ${col.disabled ? "opacity-50" : ""
                  }`}
                style={{
                  fontSize: "12px",
                  pointerEvents: col.disabled ? "none" : "auto",
                }}
              >
                {col.col}
              </label>
              <input
                type="text"
                id={`input-${col}`}
                className={`mt-1 p-2 w-full border border-gray-300 rounded-md  ${col.disabled ? "opacity-50 bg-gray-200" : ""
                  }`}
                style={{
                  fontSize: "12px",
                  pointerEvents: col.disabled ? "none" : "",
                }}
                value={col.value}
                disabled={col.disabled}
              />
            </div>
          ))}
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomAccordian;
