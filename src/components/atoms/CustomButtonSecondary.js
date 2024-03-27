import React from "react";
import { Button } from "@mui/material";


const CustomButtonSecondary = ({ title, color }) => {
    return (
        <Button
            className='py-[0.5rem]'
            variant="contained"
            color="secondary"
            disabled
            sx={{
                fontSize: "10px",
                fontWeight: "800",
                color: "white",
                borderRadius: "5px",
                padding: "12px"
            }}
        >
            {title}
        </Button>
    );
}

export default CustomButtonSecondary;

