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

const Screen36 = () => {
  const [pageLabels, setPageLabels] = useState({
    name: "Lookup Type",
    dataIndex: 0,
    data: lookupTypeData,
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
      notSelected: Function,
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

        <div className="table-container"></div>
      </div>
    </>
  );
};

export default Screen36;
