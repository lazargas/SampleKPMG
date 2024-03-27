import { gsap } from "gsap";
import React, { useContext, useState } from "react";
import "../../../../styles/molecules/Sample.css";

import LineWeightIcon from "@mui/icons-material/LineWeight";
import "../../../../styles/Animation/slider.css";
import Screen8Data from "./Screen8Data";
import KPMGContext from "../../../../context/SampleContext";
import { attributesEntityData } from "../../../../data/tableData";


const Screen8 = () => {
  const {handleCardClick,
    selectedCard,
    setSelectedCard,
    pages} = useContext(KPMGContext);
    const [pageLabels, setPageLabels] = useState({
      name: "Attributes",
      dataIndex: 0,
      data: attributesEntityData,
    });
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
          a[columnName === "Lookup Type Name" ? 0 : 1].columnValue >
          b[columnName === "Lookup Type Name" ? 0 : 1].columnValue
        ) {
          return 1;
        } else if (a[columnName === "Lookup Type Name" ? 0 : 1].columnValue == b[columnName === "Lookup Type Name" ? 0 : 1].columnValue) {
          return 0;
        } else {
          return -1;
        }
      });
    } else {
      return data.sort((a, b) => {
        if (a[columnName === "Lookup Type Name" ? 0 : 1].columnValue < b[columnName === "Lookup Type Name" ? 0 : 1].columnValue) {
          return 1;
        } else if (a[columnName === "Lookup Type Name" ? 0 : 1].columnValue == b[columnName === "Lookup Type Name" ? 0 : 1].columnValue) {
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

        <div className="table-container">
          <Screen8Data
            data={attributesEntityData}
            handleSort={handleSort}
          />
        </div>
      </div>
    </>
  );
};

export default Screen8;