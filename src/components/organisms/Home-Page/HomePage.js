import React from "react";
import Screen8 from "../screens/screen-8/Screen8";
import Screen22 from "../screens/screen-22/Screen22";
import Screen23 from "../screens/screen-23/Screen23";
import Screen25 from "../screens/screen-25/Screen25";
import Screen28 from "../screens/screen-28/Screen28"
import Screen32 from "../screens/screen-32/Screen32";
import Screen36 from "../screens/screen-36/Screen36";
import Screen14 from "../screens/screen-14/Screen14";
import Screen15 from "../screens/screen-15/Screen15";
import Screen16 from "../screens/screen-16/Screen16";
import ErrorPage from "../Error-page/ErrorPage";
import {
  Table,
  TableHead,
  TableContainer,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Chip,
  Checkbox,
  Button,
} from "@mui/material";
import CommonPage from "../screens/screen-9/CommonPage";
import { Link } from "react-router-dom";


const HomePage = () => {

  const routes = [
    {
      path: "/screen-8",
      name: "Screen 8",

    },
    {
      path: "/screen-9",
      name: "Screen 9",

    },
    {
      path: "/screen-14",
      name: "Screen 14",

    },
    {
      path: "/screen-15",
      name: "Screen 15",

    },
    {
      path: "/screen-16",
      name: "Screen 16",

    },
    {
      path: "/screen-22",
      name: "Screen 22",

    },
    {
      path: "/screen-23",
      name: "Screen 23",

    },
    {
      path: "/screen-25",
      name: "Screen 25",

    },
    {
      path: "/screen-28",
      name: "Screen 28",

    },
    {
      path: "/screen-32",
      name: "Screen 32",

    },
    {
      path: "/screen-33",
      name: "Screen 33",

    },
    {
      path: "/screen-36",
      name: "Screen 36",

    },
  ]

  return (
    <div className="h-[100%] w-auto p-12 grid grid-cols-3 gap-[1.5rem]" >
      {
        routes?.map((route, index) => {
          return (
            <Link to={route.path}>
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


                <p>{route.name}</p>

              </Button>
            </Link>
          );
        })
      }

    </div>
  );
}

export default HomePage;