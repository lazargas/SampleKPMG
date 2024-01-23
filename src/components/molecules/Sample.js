import React, { useState } from "react";
import "../../styles/molecules/Sample.css";
import card1 from "../../assets/images/Card-1.svg";
import card2 from "../../assets/images/Card-2.svg";
import card3 from "../../assets/images/Card-3.svg";
import card4 from "../../assets/images/Card-4.svg";
import card5 from "../../assets/images/Card-5.svg";
import card6 from "../../assets/images/Card-6.svg";
import line from "../../assets/images/Line2.svg";
import Table from "../atoms/Table";

const Sample = () => {
  const [selectedCard, setSelectedCard] = useState(5);

  const pages = [
    "Entity Group",
    "Data Entity",
    "Function",
    "Section",
    "Attributes",
    "References",
  ];

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <div className="container">
        <div className="card-container">
          {[card1, card2, card3, card4, card5, card6].map((card, index) => (
            <button
              className={`flex flex-col items-start ${
                selectedCard === index ? "" : "opacity-60"
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <img src={card} alt={`Card ${index + 1}`} />
              <h3 className={`${selectedCard === index ? "font-bold" : ""}`}>
                {pages[index]}
              </h3>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <h3 className="text-lg ">Model / {pages[selectedCard]} :</h3>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Lookup Type
            </button>
            <button
              type="button"
              className="text-white bg-[#4856BE] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Lookup
            </button>
          </div>
        </div>

        <div className="table-container">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Sample;
