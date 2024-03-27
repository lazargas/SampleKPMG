import React, { useState, useEffect } from "react";
import { Select, MenuItem, FormControl, Typography } from "@mui/material";

const Dropdown = ({ data }) => {
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    if (data.length > 0) {
      setSelectedValue(data[0]);
    }
  }, [data]);

  return (
    <div title="Select Page">
      <FormControl
        sx={{ width: 190, bgcolor: "#4856BEF5", borderRadius: "5px" }}
      >
        <Select
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
          displayEmpty
          sx={{
            fontSize: "12px",
            height: "42px",

            color: "white",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "rgba(228, 219, 233, 0.25)",
            },
            ".MuiSvgIcon-root ": {
              fill: "white !important",
            },
          }}
        >
          {data &&
            data.map((item) => (
              <MenuItem key={item} value={item} sx={{ fontSize: "12px" }}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default Dropdown;
