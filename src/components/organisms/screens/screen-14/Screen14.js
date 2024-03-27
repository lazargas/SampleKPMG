import { gsap } from "gsap";
import React, { useState } from "react";
import "../../../../styles/molecules/Sample.css";

import LineWeightIcon from "@mui/icons-material/LineWeight";
import {
    businessEntityData,
    lookupTypeData,
} from "../../../../data/tableData";
import "../../../../styles/Animation/slider.css";
import Screen14Data from "./Screen14Data";

import AttributesSelected from "../../../../assets/images/Attributes - selected.svg";
import Attributes from "../../../../assets/images/Attributes.svg";
import BusinessEntitySelected from "../../../../assets/images/Business entity - selected.svg";
import BusinessEntity from "../../../../assets/images/Business entity.svg";
import DataSelected from "../../../../assets/images/Data - selected.svg";
import Data from "../../../../assets/images/Data.svg";
import FunctionSelected from "../../../../assets/images/Function - selected.svg";
import Function from "../../../../assets/images/Function.svg";
import ReferencesSelected from "../../../../assets/images/References - selected.svg";
import References from "../../../../assets/images/References.svg";
import SectionsSelected from "../../../../assets/images/Sections - selected.svg";
import Sections from "../../../../assets/images/Sections.svg";

const Screen14 = () => {
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
      notSelected: Data,
      selected: DataSelected,
      data: [],
    },
    {
      name: "Data Entity Group",
      notSelected: Data,
      selected: DataSelected,
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
      notSelected: Attributes,
      selected: AttributesSelected,
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
  return (
    <>
      <div className="container">
        <div className="collapse-container">
          <div className="tile-container">
            <p
              className="text-lg "
              style={{ fontSize: "16px", fontWeight: "400" }}
            >
              Master Data / {pages[selectedCard].name} :
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
                    width:"max-content"
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

        <div className="table-container">
          <Screen14Data data={handleSort(
              pageLabels.data,
              "asc",
              pageLabels.data[0].columnName
            )} handleSort={handleSort} />
        </div>
      </div>
    </>
  );
};

export default Screen14;
