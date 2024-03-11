import { gsap } from "gsap";
import React, { useState } from "react";
import "../../../../styles/molecules/Sample.css";

import LineWeightIcon from "@mui/icons-material/LineWeight";

import { Grid, Card, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { FormProvider, useForm } from "react-hook-form";
import { businessEntityData, lookupTypeData } from "../../../../data/tableData";
import "../../../../styles/Animation/slider.css";

import AttributesSelected from "../../../../assets/images/Attributes - selected.svg";
import Attributes from "../../../../assets/images/Attributes.svg";
import BusinessEntitySelected from "../../../../assets/images/Business entity - selected.svg";
import BusinessEntity from "../../../../assets/images/Business entity.svg";
import ComputationSelected from "../../../../assets/images/Computation - selected.svg";
import Computation from "../../../../assets/images/Computation.svg";
import DataSelected from "../../../../assets/images/Data - selected.svg";
import Data from "../../../../assets/images/Data.svg";
import DataEntityGroupSelected from "../../../../assets/images/DataEntityGroup - selected.svg";
import DataEntityGroup from "../../../../assets/images/DataEntityGroup.svg";
import FunctionSelected from "../../../../assets/images/Function - selected.svg";
import Function from "../../../../assets/images/Function.svg";
import ReferencesSelected from "../../../../assets/images/References - selected.svg";
import References from "../../../../assets/images/References.svg";
import SectionsSelected from "../../../../assets/images/Sections - selected.svg";
import Sections from "../../../../assets/images/Sections.svg";
import ApplicationnUserSelected from "../../../../assets/images/User - selected.svg";
import ApplicationnUser from "../../../../assets/images/User.svg";
import FormInput from "../../../../ui-components/textbox/FormInput";
import CustomAccordian from "../../../atoms/CustomAccordian";

const Screen16 = () => {
  const [pageLabels, setPageLabels] = useState({
    name: "Bussiness Entity",
    dataIndex: 0,
    data: businessEntityData,
  });

  const pages = [
    {
      name: "Business Entity",
      notSelected: BusinessEntity,
      selected: BusinessEntitySelected,
      data: businessEntityData,
    },
    {
      name: "Application User",
      notSelected: ApplicationnUser,
      selected: ApplicationnUserSelected,
      data: [],
    },
    {
      name: "Data Entity Group",
      notSelected: DataEntityGroup,
      selected: DataEntityGroupSelected,
      data: [],
    },
    {
      name: "Data Entity",
      notSelected: Data,
      selected: DataSelected,
      data: [],
    },
    {
      name: "Function",
      notSelected: Function,
      selected: FunctionSelected,
      data: [],
    },
    {
      name: "Section",
      notSelected: Sections,
      selected: SectionsSelected,
      data: [],
    },
    {
      name: "Attributes",
      notSelected: Attributes,
      selected: AttributesSelected,
      data: [],
    },
    {
      name: "Computation",
      notSelected: Computation,
      selected: ComputationSelected,
      data: [],
    },
    {
      name: "References",
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
    setgsapSelect(iconName);
    const distance = icon.offsetLeft - bgIcon.offsetLeft;
    const width = icon.offsetWidth;
    bgIcon.style.width = width + "px";

    gsap.to(bgIcon, {
      x: distance,
      duration: 0.5,
      ease: "power2.inOut",
    });
  };
  const handleClick = (iconName) => {
    animateSlide(iconName);
  };
  const handleSort = (data, order, columnName) => {
    if (order === "asc") {
      return data.sort((a, b) => {
        if (
          a[columnName === "Entity Short Name" ? 0 : 1].columnValue >
          b[columnName === "Entity Short Name" ? 0 : 1].columnValue
        ) {
          return 1;
        } else if (
          a[columnName === "Entity Short Name" ? 0 : 1].columnValue ==
          b[columnName === "Entity Short Name" ? 0 : 1].columnValue
        ) {
          return 0;
        } else {
          return -1;
        }
      });
    } else {
      return data.sort((a, b) => {
        if (
          a[columnName === "Entity Short Name" ? 0 : 1].columnValue <
          b[columnName === "Entity Short Name" ? 0 : 1].columnValue
        ) {
          return 1;
        } else if (
          a[columnName === "Entity Short Name" ? 0 : 1].columnValue ==
          b[columnName === "Entity Short Name" ? 0 : 1].columnValue
        ) {
          return 0;
        } else {
          return -1;
        }
      });
    }
  };

  const customAccordianFields = [
    {
      disabled: true,
      col: "Business Entity Code",
      value: "WF_BUS_ENT_CODN_0047",
    },
    {
      disabled: true,
      col: "Entity Short Name",
      value: "TCPL",
    },
    {
      disabled: true,
      col: "Business Entity Name",
      value: "Tata Consumers Product Limited",
    },
  ];

  const [listContent, setListContent] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const [allUsers, setAllUsers] = useState([
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 28 },
    { name: 'Mike Johnson', age: 35 },
    { name: 'Emma Brown', age: 22 },
    { name: 'Alex White', age: 33 },
    { name: 'Sophia Green', age: 25 },
    { name: 'James Blue', age: 31 },
    { name: 'Olivia Yellow', age: 27 },
    { name: 'Benjamin Red', age: 34 },
    { name: 'Ava Pink', age: 29 },
    { name: 'User 11', age: 36 },
    { name: 'User 12', age: 23 },
    { name: 'User 13', age: 37 },
    { name: 'User 14', age: 24 },
    { name: 'User 15', age: 38 },
    { name: 'User 16', age: 25 },
    { name: 'User 17', age: 39 },
    { name: 'User 18', age: 26 },
    { name: 'User 19', age: 40 },
    { name: 'User 20', age: 27 },
    { name: 'User 21', age: 41 },
    { name: 'User 22', age: 28 },
    { name: 'User 23', age: 42 },
    { name: 'User 24', age: 29 },
    { name: 'User 25', age: 43 },
    { name: 'User 26', age: 30 },
    { name: 'User 27', age: 44 },
    { name: 'User 28', age: 31 },
    { name: 'User 29', age: 45 },
    { name: 'User 30', age: 32 },
    { name: 'User 31', age: 46 },
    { name: 'User 32', age: 33 },
    { name: 'User 33', age: 47 },
    { name: 'User 34', age: 34 },
    { name: 'User 35', age: 48 },
    { name: 'User 36', age: 35 },
    { name: 'User 37', age: 49 },
    { name: 'User 38', age: 36 },
    { name: 'User 39', age: 50 },
    { name: 'User 40', age: 37 },
    { name: 'User 41', age: 51 },
    { name: 'User 42', age: 38 },
    { name: 'User 43', age: 52 },
    { name: 'User 44', age: 39 },
    { name: 'User 45', age: 53 },
    { name: 'User 46', age: 40 },
    { name: 'User 47', age: 54 },
    { name: 'User 48', age: 41 },
    { name: 'User 49', age: 55 },
    { name: 'User 50', age: 42 },
  ]);

  const [applicationUsers, setApplicationUsers] = useState([
    allUsers[0],
    allUsers[10],
    allUsers[20],
    allUsers[30],
    allUsers[40],
  ]);


  const handleButtonClick = (buttonNumber) => {
    switch (buttonNumber) {
      case 1:
        updateApplicationUsers();
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      default:
        break;
    }
  };

  const [checkedStatus, setCheckedStatus] = useState(
    allUsers.reduce((acc, user) => ({ ...acc, [user.name]: false }), {})
  );

  const handleCheckboxChange = (event, userName) => {
    const isChecked = event.target.checked;
    setCheckedStatus(prevState => ({ ...prevState, [userName]: isChecked }));
  };

  const updateApplicationUsers = () => {
    const updatedApplicationUsers = [...applicationUsers];
   
    allUsers.forEach(user => {
       if (checkedStatus[user.name] && !applicationUsers.some(appUser => appUser.name === user.name && appUser.age === user.age)) {
         updatedApplicationUsers.push(user);
       }
    });
    
    setApplicationUsers(updatedApplicationUsers);
   };


  return (
    <>
      <div className="container">
        <div className="collapse-container">
          <div className="tile-container">
            <p
              className="text-lg "
              style={{ fontSize: "16px", fontWeight: "400" }}
            >
              Admin Workspace Wizard :
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
                style={{
                  opacity: selectedCard !== index ? 0.5 : 1,
                  cursor: selectedCard !== index ? "not-allowed" : "pointer",
                }}
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
                  className={`slider text-lg mt-1 px-2 rounded-md ${gsapselect === pages[index].name
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

        <Typography variant="h6" gutterBottom>
          Select Application Users :
        </Typography>

        <div className="table-container">
          <div className="mb-2 max-w-auto">
            <CustomAccordian
              title={"Business Entity Data"}
              data={customAccordianFields}
            />
          </div>

          <div className="grid-container box p-4 bg-gray-100 rounded-lg">
            <Grid container spacing={2} alignItems="center">
              {/* First column */}
              <Grid item xs={5}>
                {/* First column */}
                <Card className="card px-8 py-2">
                  <h3 className="text-lg font-semibold mb-4">Application Users</h3>
                  <ul className="max-h-[200px] overflow-y-auto pl-2">
                    {/* List of items with checkboxes */}
                    {applicationUsers.map((item, index) => (
                      <li key={index} className="mb-2">
                        <input
                          type="checkbox"
                          id={`item1-${index}`}
                          className="mr-2"
                        />
                        <label
                          htmlFor={`item1-${index}`}
                          className="select-none"
                        >
                          {item.name}
                        </label>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Grid>

              {/* Button box */}
              <Grid item xs={2}>
                <div className="flex justify-center items-center">
                  <div className="flex flex-col">
                    <div className="flex flex-col gap-2 justify-between">
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick(1)}
                      >
                        Left Shift
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick(2)}
                      >
                        Less Than
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick(3)}
                      >
                        Right Shift
                      </Button>
                      <Button
                        variant="contained"
                        onClick={() => handleButtonClick(4)}
                      >
                        Greater Than
                      </Button>
                    </div>
                  </div>
                </div>
              </Grid>

              {/* Second column */}
              <Grid item xs={5}>
                {/* Second column */}
                <Card className="card px-8 py-2">
                  <h3 className="text-lg font-semibold mb-4">
                    All Users
                  </h3>
                  <ul className="max-h-[200px] overflow-y-auto pl-2">
                    {/* List of items with checkboxes */}
                    {allUsers.map((item, index) => {
                      const isInApplicationUsers = applicationUsers.some(user => user.name === item.name && user.age === item.age);

                      return <li key={index} className="mb-2">
                        <input
                          type="checkbox"
                          id={`item2-${index}`}
                          className={`mr-2 ${isInApplicationUsers ? 'opacity-50 cursor-not-allowed' : ''}`}
                          disabled={isInApplicationUsers}
                          checked={checkedStatus[item.name] || isInApplicationUsers}
                          onChange={(event) => handleCheckboxChange(event, item.name)}
                        />
                        <label
                          htmlFor={`item2-${index}`}
                          className="select-none"
                        >
                          {item.name}
                        </label>
                      </li>
                    })}
                  </ul>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>

        <div className="flex gap-[1rem] justify-end items-center">
          <Button
            className="py-[0.5rem]"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#4856BEF5",
              fontSize: "10px",
              fontWeight: "800",
              color: "white",
              borderRadius: "5px",
              padding: "12px",
            }}
          >
            Save And Next
          </Button>
          <Button
            className="py-[0.5rem]"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#4856BEF5",
              fontSize: "10px",
              fontWeight: "800",
              color: "white",
              borderRadius: "5px",
              padding: "12px",
            }}
          >
            Skip To Next
          </Button>
          <Button
            className="py-[0.5rem]"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#4856BEF5",
              fontSize: "10px",
              fontWeight: "800",
              color: "white",
              borderRadius: "5px",
              padding: "12px",
            }}
          >
            Save And Close
          </Button>
          <Button
            className="py-[0.5rem]"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#4856BEF5",
              fontSize: "10px",
              fontWeight: "800",
              color: "white",
              borderRadius: "5px",
              padding: "12px",
            }}
          >
            Reset
          </Button>
          <Button
            className="py-[0.5rem]"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#4856BEF5",
              fontSize: "10px",
              fontWeight: "800",
              color: "white",
              borderRadius: "5px",
              padding: "12px",
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};

export default Screen16;
