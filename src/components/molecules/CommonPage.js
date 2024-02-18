import React, { useContext, useState } from "react";
import "../../styles/molecules/Sample.css";

import DataView from "./DataView";

import LineWeightIcon from "@mui/icons-material/LineWeight";
import KPMGContext from "../../context/SampleContext";

const CommonPage = ({ pages, handleCardClick, selectedCard }) => {
  const { pageLabels, setPageLabels } = useContext(KPMGContext);

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
                onClick={() => handleCardClick(index)}
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

                <p
                  className={`text-lg mt-2 px-2  rounded-md ${
                    selectedCard === index
                      ? "text-white bg-[#4856bef5] "
                      : "text-black"
                  } `}
                  style={{
                    fontSize: "13px",
                    fontWeight: 400,
                  }}
                >
                  {pages[index].name}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className="table-container">
          <DataView data={pageLabels.data} />
        </div>
      </div>
    </>
  );
};

export default CommonPage;
