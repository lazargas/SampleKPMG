import React, { useContext, useState } from "react";
import { gsap } from "gsap";
import "../../styles/molecules/Sample.css";


import DataView from "./DataView";

import LineWeightIcon from "@mui/icons-material/LineWeight";
import KPMGContext from "../../context/SampleContext";
import { businessEntityData, lookupTypeData } from "../../data/tableData";
import Slider from "../Animation/Slider";
import "../../styles/Animation/slider.css";


const CommonPage = ({ pages, handleCardClick, selectedCard }) => {
  const { pageLabels, setPageLabels } = useContext(KPMGContext);
  const [gsapselect,setgsapSelect] = useState("");
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
      ease: "power2.inOut"
    });

  };
  const handleClick = (iconName) => {
    // Call the animation function
    animateSlide(iconName);
  };
  return (
    <>
      <div className="container">
        <div className="collapse-container">
          <div className="tile-container">
            <h3 className="text-lg ">Model / {pages[selectedCard].name} :</h3>
          </div>
          <button
            id="arrowdown"
            className="hidden relative left-[100px] rotate-180"
          >
            <LineWeightIcon />
          </button>
          <div className="card-container">
            {pages.map((card, index) => (
              <button
                className={`flex flex-col items-center  text-center p-2  rounded-lg `}
                key={index}
                onClick={() => { handleCardClick(index); handleClick(pages[index].name) }}

              >
                <div className="flex flex-row justify-center mx-2">
                  <img
                    id={`cards-${index + 1}`}
                    src={
                      selectedCard === index ? card.selected : card.notSelected
                    }
                    width="30px"
                    alt={`Card ${index + 1}`}
                  />
                </div>

                <div
                  className={`slider text-lg mt-2 px-2  rounded-md ${gsapselect === pages[index].name
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
          {/* {pageLabels.dataIndex===0 && <DataView data={pageLabels.data} />}
          {pageLabels.dataIndex===1 && <DataView data={pageLabels.data} />} */}
          <DataView data={pageLabels.data} />
        </div>
      </div>
    </>
  );
};

export default CommonPage;
