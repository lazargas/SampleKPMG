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
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";
import Dropdown from "../../../atoms/Dropdown";

const Screen42 = () => {
  const [pageLabels, setPageLabels] = useState({
    name: "Completeness",
    dataIndex: 0,
  });

  const pages = [
    {
      name: "Completeness",
      notSelected: BusinessEntitySelected,
      selected: BusinessEntitySelected,
      data: businessEntityData,
    },
    {
      name: "Uniqueness",
      notSelected: Data,
      selected: DataSelected,
      data: [],
    },
    {
      name: "Conformaity",
      notSelected: Function,
      selected: FunctionSelected,
      data: [],
    },
    {
      name: "Validity",
      notSelected: Sections,
      selected: SectionsSelected,
      data: [],
    },
    {
      name: "Execution Report",
      notSelected: Attributes,
      selected: AttributesSelected,
      data: [],
    },
    {
      name: "Data Profile",
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

  const entryForm = [
    {
      disabled: true,
      col: "Workflow Code",
    },
    {
      disabled: false,
      col: "Data Entity Group Name",
    },
    {
      disabled: false,
      col: "Data Entity Name",
    },
    {
      disabled: false,
      col: "Data Function Name",
    },
    {
      disabled: false,
      col: "Workflow Name",
    },
    {
      disabled: false,
      col: "Condition Name",
    },
  ];

  const completenessData = [
    {
      name: "Product Name",
      data: [
        {
          completeness: true,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
        {
          completeness: true,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
        {
          completeness: true,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
      ],
    },
    {
      name: "Unit of Measure",
      data: [
        {
          completeness: false,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
        {
          completeness: false,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
        {
          completeness: false,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
      ],
    },
    {
      name: "SKU Pack Size",
      data: [
        {
          completeness: true,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
        {
          completeness: false,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
        {
          completeness: true,
          effectiveFrom: "1970-01-01",
          effectiveTo: "9999-01-01",
          conditionApplied: false,
        },
      ],
    },
  ];

  const [completenessType, setCompletenessType] = useState();
  const [display, setDisplay] = useState();

  useEffect(() => {
    setCompletenessType(completenessData[0]);
  }, [pageLabels]);

  return (
    <>
      <div className="container">
        <div className="collapse-container">
          <div className="tile-container">
            <p
              className="text-lg "
              style={{ fontSize: "16px", fontWeight: "400" }}
            >
              Model / Completeness
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
          <div className="mx-3">
            <CustomAccordian isOpen={true} title={"Enter the following"}>
              <div className="flex flex-row flex-wrap justify-between gap-3">
                {entryForm.map((field, index) => (
                  <div>
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
                        htmlFor={`select-placeholder`}
                        sx={{
                          fontSize: "12px",
                        }}
                      >
                        {field.col}
                      </InputLabel>
                      <Select
                        sx={{
                          fontSize: "12px",
                          width: { xl: "350px", lg: "250px" },
                        }}
                        label={field.col}
                        disabled={index === 0 ? true : false}
                      >
                        {["Attribute 1", "Attribute 2", "Attribute 3"].map(
                          (data) => (
                            <MenuItem
                              key={data}
                              value={data}
                              sx={{ fontSize: "12px" }}
                            >
                              {data}
                            </MenuItem>
                          )
                        )}
                      </Select>
                    </FormControl>
                  </div>
                ))}
              </div>

              <div className="my-5 flex flex-row justify-end">
                <Button
                  className="bg-[#4856BEF5]"
                  variant="contained"
                  sx={{ fontSize: "12px" }}
                >
                  Proceed
                </Button>
              </div>
            </CustomAccordian>

            <div className="my-10">
              <div className="flex flex-row justify-between">
                <FormControl sx={{ width: 190, borderRadius: "5px" }}>
                  <Select
                    sx={{
                      fontSize: "12px",
                      height: "42px",
                      color: "black",
                    }}
                    value={
                      completenessType ? completenessType.name : "Select Page"
                    }
                    onChange={(e) => {
                      const selectedItem = completenessData.find(
                        (item) => item.name === e.target.value
                      );
                      setCompletenessType(selectedItem);
                    }}
                  >
                    {completenessData.map((item) => (
                      <MenuItem
                        key={item.name}
                        value={item.name}
                        sx={{ fontSize: "12px" }}
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <div className="text-center me-5 my-auto">
                  <AddCircleOutlineIcon
                    className="cursor-pointer "
                    style={{ fontSize: "18px" }}
                  />
                </div>
              </div>

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
                      {[
                        "Completeness",
                        "Effective from",
                        "Effective to",
                        "Condition Applied",
                        "Delete",
                      ].map((data, i) => (
                        <TableCell
                          key={i}
                          align="left"
                          sx={{
                            backgroundColor: "#4856BEF5",
                            color: "white",
                            fontWeight: "bold",
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "150px", xl: "250px" },
                            fontSize: { md: "10px", lg: "12px" },
                          }}
                        >
                          {data}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {completenessType?.data?.map((row, rowIndex) => (
                      <TableRow
                        key={rowIndex}
                        className={`border-b bg-white hover:bg-gray-100`}
                      >
                        <TableCell
                          align="left"
                          sx={{
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "150px", xl: "250px" },
                            fontSize: { md: "10px", lg: "12px" },
                          }}
                        >
                          {row.completeness ? "Yes" : "No"}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "150px", xl: "250px" },
                            fontSize: { md: "10px", lg: "12px" },
                          }}
                        >
                          {row.effectiveFrom}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "150px", xl: "250px" },
                            fontSize: { md: "10px", lg: "12px" },
                          }}
                        >
                          {row.effectiveTo}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "150px", xl: "250px" },
                            fontSize: { md: "10px", lg: "12px" },
                          }}
                        >
                          {row.conditionApplied ? "Yes" : "No"}
                        </TableCell>
                        <TableCell
                          align="left"
                          sx={{
                            borderBottom: "1px solid rgba(224, 224, 224, 1)",
                            paddingRight: "0",
                            minWidth: { md: "150px", xl: "250px" },
                            fontSize: { md: "10px", lg: "12px" },
                          }}
                        >
                          <IconButton
                            disabled={completenessType?.data?.length === 1}
                            // onClick={() => handleDeleteRow(rowIndex)}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Screen42;
