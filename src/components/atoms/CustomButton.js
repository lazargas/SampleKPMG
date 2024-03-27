import React from "react";
import { Button } from "@mui/material";


const CustomButton = ({ title, color }) => {
    return (
        <Button
            className='py-[0.5rem]'
            variant="contained"
            color="primary"

            sx={{
                backgroundColor: "#4856BEF5",
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

export default CustomButton;

