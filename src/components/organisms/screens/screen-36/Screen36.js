import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import "../../../../styles/molecules/Sample.css";

import DataView from "../../../molecules/DataView";

import LineWeightIcon from "@mui/icons-material/LineWeight";
import KPMGContext from "../../../../context/SampleContext";
import { businessEntityData, lookupTypeData } from "../../../../data/tableData";
import Slider from "../../../Animation/Slider";
import "../../../../styles/Animation/slider.css";

// icons
import BusinessEntity from "../../../../assets/images/Business entity.svg";
import BusinessEntitySelected from "../../../../assets/images/Business entity - selected.svg";
import Function from "../../../../assets/images/Function.svg";
import FunctionSelected from "../../../../assets/images/Function - selected.svg";
import Data from "../../../../assets/images/Data.svg";
import DataSelected from "../../../../assets/images/Data - selected.svg";
import Attributes from "../../../../assets/images/Attributes.svg";
import AttributesSelected from "../../../../assets/images/Attributes - selected.svg";
import References from "../../../../assets/images/References.svg";
import ReferencesSelected from "../../../../assets/images/References - selected.svg";
import Sections from "../../../../assets/images/Sections.svg";
import SectionsSelected from "../../../../assets/images/Sections - selected.svg";

// MUI Components
import CustomAccordian from "../../../atoms/CustomAccordian";
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
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

const Screen36 = () => {
  const [pageLabels, setPageLabels] = useState({
    name: "Conditional Data Governance",
    dataIndex: 0,
  });

  const pages = [
    {
      name: "Workflow",
      notSelected: BusinessEntitySelected,
      selected: BusinessEntitySelected,
      data: businessEntityData,
    },
    {
      name: "Data Governance",
      notSelected: DataSelected,
      selected: DataSelected,
      data: [],
    },
    {
      name: "Conditional Data Governance",
      notSelected: FunctionSelected,
      selected: FunctionSelected,
      data: [],
    },
    {
      name: "Workflow Relationship",
      notSelected: Sections,
      selected: SectionsSelected,
      data: [],
    },
    {
      name: "Delegate Workflow",
      notSelected: Attributes,
      selected: AttributesSelected,
      data: [],
    },
    {
      name: "Attribute Tagging",
      notSelected: References,
      selected: ReferencesSelected,
      data: lookupTypeData,
    },
  ];

  const handleCardClick = (index) => {
    setPageLabels({
      name: pages[index].name,
      dataIndex: 1,
      data: businessEntityData,
    });

    setSelectedCard(index);
  };

  const [selectedCard, setSelectedCard] = useState(5);

  const [gsapselect, setgsapSelect] = useState("");
  const animateSlide = (iconName) => {
    const icon = document.getElementById(iconName);
    const bgIcon = document.getElementById("backgroundIcon");
    //root.style.setProperty('--widthVariable', icon.offsetWidth )
    setgsapSelect(iconName);
    // Calculate the distance to slide
    const distance = icon.offsetLeft - bgIcon.offsetLeft;
    const width = icon.offsetWidth;
    bgIcon.style.width = width + "px";

    // Animate the background icon
    gsap.to(bgIcon, {
      x: distance,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  const handleClick = (iconName) => {
    // Call the animation function
    animateSlide(iconName);
  };

  const customAccordianFields = [
    {
      disabled: true,
      col: "Workflow Code",
      value: "WF_BUS_ENT_COND-0047",
    },
    {
      disabled: true,
      col: "Data Entity Group Name",
      value: "Material",
    },
    {
      disabled: true,
      col: "Data Entity Name",
      value: "Material_FG",
    },
    {
      disabled: true,
      col: "Data Function Name",
      value: "Marketing",
    },
    {
      disabled: true,
      col: "Workflow Name",
      value: "WF_Material_FG_Marketing",
    },
    {
      disabled: true,
      col: "Condition Name",
      value: "cdg_Material_FG_Marketing",
    },
  ];

  const [attributeData, setAttributeData] = useState([
    { name: "", values: [] },
    // Add more objects as needed
  ]);

  const handleChange = (index, selectedValues) => {
    setAttributeData((prevData) => {
      const newData = [...prevData];
      newData[index].values = selectedValues;
      return newData;
    });
  };

  const handleAttributeChange = (index, newName) => {
    setAttributeData((prevData) => {
      const newData = [...prevData];
      // Reset values array when attribute changes
      newData[index].name = newName;
      newData[index].values = [];
      return newData;
    });
  };

  const handleChipDelete = (rowIndex, chipIndex) => {
    setAttributeData((prevData) => {
      const newData = [...prevData];
      newData[rowIndex].values.splice(chipIndex, 1);
      return newData;
    });
  };

  const handleDeleteRow = (index) => {
    if (attributeData.length > 1) {
      setAttributeData((prevData) => {
        const newData = [...prevData];
        newData.splice(index, 1);
        return newData;
      });
    }
  };

  const handleAddRow = () => {
    setAttributeData((prevData) => [...prevData, { name: "", values: [] }]);
  };

  useEffect(() => {}, [pageLabels]);

  return (
    <>
      <div className="container">
        <div className="collapse-container">
          <div className="tile-container">
            <p
              className="text-lg "
              style={{ fontSize: "16px", fontWeight: "400" }}
            >
              Model / {pages[selectedCard].name} :
            </p>
          </div>
          <button
            id="arrowdown"
            className="hidden relative left-[100px] rotate-180"
          >
            <LineWeightIcon />
          </button>
          <div className="card-container items-center h-[90px]">
            {pages.map((card, index) => (
              <button
                className={`flex flex-col items-center text-center p-2 py-2  rounded-lg `}
                key={index}
                onClick={() => {
                  handleCardClick(index);
                  handleClick(pages[index].name);
                }}
              >
                <div className="flex flex-row justify-center mt-2 mx-2">
                  <img
                    id={`cards-${index + 1}`}
                    src={
                      selectedCard === index ? card.selected : card.notSelected
                    }
                    width="25px"
                    alt={`Card ${index + 1}`}
                  />
                </div>

                <div
                  className={`slider text-lg mt-1 px-2  rounded-md ${
                    gsapselect === pages[index].name
                      ? "text-white"
                      : "text-black"
                  } `}
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                  }}
                  id={pages[index].name}
                >
                  {pages[index].name}
                </div>
              </button>
            ))}
            <div id="backgroundIcon" className="background-icon"></div>
          </div>
        </div>

        <div className="table-container mt-10 me-2">
          <Grid container spacing={2}>
            <Grid xs={10}>
              <div className="mx-3">
                <CustomAccordian
                  title={"Reference Values"}
                  data={customAccordianFields}
                />

                <TableContainer
                  sx={{
                    overflowX: "auto",
                  }}
                  component={Paper}
                  className="my-5"
                >
                  <Table className=" text-sm text-left">
                    <TableHead>
                      <TableRow>
                        {["Attributes", "Attributes", "Delete"].map(
                          (data, i) => (
                            <TableCell
                              key={i}
                              align="left"
                              sx={{
                                backgroundColor: "#4856BEF5",
                                color: "white",
                                fontWeight: "bold",
                                borderBottom:
                                  "1px solid rgba(224, 224, 224, 1)",
                                paddingRight: "0",
                                minWidth: { md: "250px", xl: "300px" },
                                fontSize: { md: "10px", lg: "12px" },
                              }}
                            >
                              {data}
                            </TableCell>
                          )
                        )}
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      {attributeData.map((row, rowIndex) => (
                        <TableRow
                          key={rowIndex}
                          className={`border-b bg-white hover:bg-gray-100`}
                        >
                          <TableCell
                            align="left"
                            sx={{
                              borderBottom: "1px solid rgba(224, 224, 224, 1)",
                              paddingRight: "0",
                              minWidth: { md: "250px", xl: "300px" },
                              fontSize: { md: "10px", lg: "12px" },
                            }}
                          >
                            <Tooltip title="Add attribute" arrow>
                              <FormControl
                                fullWidth
                                sx={{
                                  "& .MuiInput-underline::before, & .MuiInput-underline::after":
                                    {
                                      borderBottom: "none",
                                    },
                                }}
                              >
                                <InputLabel
                                  id={`attribute-label-${rowIndex}`}
                                  style={{ fontSize: "14px" }}
                                >
                                  Attribute
                                </InputLabel>
                                <Select
                                  sx={{
                                    boxShadow: "none",
                                    ".MuiOutlinedInput-notchedOutline": {
                                      border: 0,
                                    },
                                    fontSize: "12px",
                                    width: "200px",
                                  }}
                                  value={row.name}
                                  label={`Attribute-${rowIndex}`}
                                  onChange={(e) =>
                                    handleAttributeChange(
                                      rowIndex,
                                      e.target.value
                                    )
                                  }
                                >
                                  {[
                                    "Attribute 1",
                                    "Attribute 2",
                                    "Attribute 3",
                                  ].map((data) => (
                                    <MenuItem
                                      key={data}
                                      value={data}
                                      sx={{ fontSize: "12px" }}
                                    >
                                      {data}
                                    </MenuItem>
                                  ))}
                                </Select>
                              </FormControl>
                            </Tooltip>
                          </TableCell>

                          <TableCell
                            align="left"
                            sx={{
                              borderBottom: "1px solid rgba(224, 224, 224, 1)",
                              paddingRight: "0",
                              minWidth: { md: "450px", xl: "500px" },
                              fontSize: { md: "10px", lg: "12px" },
                            }}
                          >
                            <Tooltip title="Add attribute value" arrow>
                              <FormControl
                                fullWidth
                                sx={{
                                  "& .MuiInput-underline::before, & .MuiInput-underline::after":
                                    {
                                      borderBottom: "none",
                                    },
                                }}
                              >
                                <InputLabel
                                  id={`values-label-${rowIndex}`}
                                  style={{ fontSize: "14px" }}
                                >
                                  Attribute Values
                                </InputLabel>
                                <Select
                                  multiple
                                  value={row.values}
                                  onChange={(e) =>
                                    handleChange(rowIndex, e.target.value)
                                  }
                                  label={`Values-${rowIndex}`}
                                  renderValue={(selected) => (
                                    <div className="flex flex-row gap-2 overflow-x-auto">
                                      {selected.map((value, chipIndex) => (
                                        <Chip
                                          key={value}
                                          label={value}
                                          onDelete={(event) => {
                                            event.stopPropagation();
                                            handleChipDelete(
                                              rowIndex,
                                              chipIndex
                                            );
                                          }}
                                          onClick={(event) =>
                                            event.stopPropagation()
                                          }
                                          onMouseDown={(event) =>
                                            event.stopPropagation()
                                          }
                                          sx={{
                                            fontSize: "10px",
                                            marginRight: "4px",
                                            marginBottom: "4px",
                                            color: "white",
                                            backgroundColor: "#4856BEF5",
                                            zIndex: 1,
                                          }}
                                        />
                                      ))}
                                    </div>
                                  )}
                                  sx={{
                                    boxShadow: "none",
                                    ".MuiOutlinedInput-notchedOutline": {
                                      border: 0,
                                    },
                                    fontSize: "12px",
                                    width: "70%",
                                  }}
                                >
                                  {["Value 1", "Value 2", "Value 3"].map(
                                    (data) => (
                                      <MenuItem
                                        key={data}
                                        value={data}
                                        sx={{ fontSize: "12px" }}
                                      >
                                        <Checkbox
                                          checked={row.values.includes(data)}
                                          sx={{ fontSize: "6px" }}
                                        />
                                        {data}
                                      </MenuItem>
                                    )
                                  )}
                                </Select>
                              </FormControl>
                            </Tooltip>
                          </TableCell>

                          <TableCell
                            align="left"
                            sx={{
                              borderBottom: "1px solid rgba(224, 224, 224, 1)",
                              paddingRight: "0",
                              minWidth: { md: "250px", xl: "300px" },
                              fontSize: { md: "10px", lg: "12px" },
                            }}
                          >
                            <IconButton
                              disabled={attributeData.length === 1}
                              onClick={() => handleDeleteRow(rowIndex)}
                            >
                              <Tooltip title="Delete this row" arrow>
                                <DeleteIcon fontSize="small" />
                              </Tooltip>
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>

              <div className="mx-2">
                <Tooltip title="Add new row" arrow>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={handleAddRow}
                    sx={{
                      backgroundColor: "#4856BEF5",
                      fontSize: "10px",
                      color: "white",
                      borderRadius: "5px",
                    }}
                  >
                    Add
                  </Button>
                </Tooltip>
              </div>
            </Grid>

            <Grid item xs={2} className="bg-[#F7F9FB] rounded-lg">
              <div className="flex flex-col">
                {[
                  "LOV Value Selection",
                  "Roles and Levels",
                  "Order Roles and Levels",
                  "Users and SLA",
                  "Attribute Tagging",
                ].map((data, i) => (
                  <div
                    style={{
                      borderLeft: "2px solid black",
                      borderImage: `${
                        i == 0
                          ? "linear-gradient(to bottom,transparent 50%,black 50%) 1 100%"
                          : i == 5 - 1
                          ? "linear-gradient(to bottom,black 50%,transparent 50%) 1 100%"
                          : ""
                      }`,
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={9}>
                        <div className="flex flex-row gap-2">
                          <div
                            style={{
                              border: "1px solid black",
                              width: "20px",
                              height: "0px",
                            }}
                            className="my-auto"
                          ></div>

                          <div
                            className="my-6"
                            style={{
                              color: `${i == 0 ? "#4856BEF5" : "black"}`,
                              fontSize: "12px",
                              fontWeight: `${i == 0 ? "500" : "400"}`,
                            }}
                          >
                            {data}
                          </div>
                        </div>
                      </Grid>

                      <Grid item xs={3}>
                        <div
                          style={{
                            border: `1px solid ${
                              i == 0 ? "#4856BEF5" : "black"
                            }`,
                            height: "8px",
                            width: "20px",
                            borderRadius: "7px",
                          }}
                          className={`my-7 ${
                            i == 0 ? "bg-[#4856BEF5]" : "black"
                          }`}
                        ></div>
                      </Grid>
                    </Grid>
                  </div>
                ))}
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Screen36;
