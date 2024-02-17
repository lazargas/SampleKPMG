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
import { gsap, ScrollTrigger, Power2 } from "gsap";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import LineWeightIcon from "@mui/icons-material/LineWeight";

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

  var tl = gsap.timeline({
    ease: Power2.easeOut,
    duration: 0.5,
  });

  const handleAnimation = () => {
    tl.to(
      "#arrow",
      {
        rotate: 180,
      },
      "b"
    )
      .to(
        "#arrow",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-1",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-2",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-3",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-4",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-5",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-6",
        {
          opacity: 0,
        },
        "b"
      )
      .to(
        "#cards-1",
        {
          display: "none",
        },
        "a"
      )
      .to(
        "#cards-2",
        {
          display: "none",
        },
        "a"
      )
      .to(
        "#cards-3",
        {
          display: "none",
        },
        "a"
      )
      .to(
        "#cards-4",
        {
          display: "none",
        },
        "a"
      )
      .to(
        "#cards-5",
        {
          display: "none",
        },
        "a"
      )
      .to(
        "#cards-6",
        {
          display: "none",
        },
        "a"
      )
      .then(() => {
        document.querySelector(".collapse-container").style.flexDirection =
          "row";
        document.querySelector("#arrowdown").classList.remove("hidden");
      });
  };

  const handleAnimationReverse = () => {
    const animate = () => {
      tl.to(
        "#arrowdown",
        {
          rotate: 180,
        },
        "b"
      )
        .to(
          "#arrowdown",
          {
            display: "none",
          },
          "b"
        )
        .to(
          "#cards-1",
          {
            opacity: 0,
          },
          "b"
        )
        .to(
          "#cards-2",
          {
            opacity: 0,
          },
          "b"
        )
        .to(
          "#cards-3",
          {
            opacity: 0,
          },
          "b"
        )
        .to(
          "#cards-4",
          {
            opacity: 0,
          },
          "b"
        )
        .to(
          "#cards-5",
          {
            opacity: 0,
          },
          "b"
        )
        .to(
          "#cards-6",
          {
            opacity: 0,
          },
          "b"
        )
        .to(
          "#cards-1",
          {
            display: "none",
          },
          "a"
        )
        .to(
          "#cards-2",
          {
            display: "none",
          },
          "a"
        )
        .to(
          "#cards-3",
          {
            display: "none",
          },
          "a"
        )
        .to(
          "#cards-4",
          {
            display: "none",
          },
          "a"
        )
        .to(
          "#cards-5",
          {
            display: "none",
          },
          "a"
        )
        .to(
          "#cards-6",
          {
            display: "none",
          },
          "a"
        )
        .reverse();
    };
    document.querySelector(".collapse-container").style.flexDirection =
      "column";
    document.querySelector("#arrow").classList.remove("hidden").then(animate());
  };

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <>
      <div className="container">
        <div className="collapse-container">
          <div className="tile-container">
            <h3 className="text-lg ">Model / {pages[selectedCard]} :</h3>
            <button id="arrow" className="" onClick={handleAnimation}>
              <ArrowUpwardOutlinedIcon />
            </button>
          </div>
          <button
            id="arrowdown"
            className="hidden relative left-[100px] rotate-180"
          >
            <LineWeightIcon />
          </button>
          <div className="card-container">
            {[card1, card2, card3, card4, card5, card6].map((card, index) => (
              <button
                className={`flex flex-col items-center  text-center p-2  rounded-lg ${
                  selectedCard === index ? "" : "opacity-60"
                }`}
                key={index}
                onClick={() => handleCardClick(index)}
              >
                <div className="flex flex-row justify-center mx-2">
                  <img
                    id={`cards-${index + 1}`}
                    className="ml-7"
                    src={card}
                    width="80px"
                    alt={`Card ${index + 1}`}
                  />
                </div>

                <p
                  className={`text-sm mt-2 ${
                    selectedCard === index
                      ? "text-[#4856BEF5]"
                      : "text-gray-700"
                  }`}
                  style={{
                    fontSize: "13px",
                    fontWeight: selectedCard === index ? "500" : "400",
                  }}
                >
                  {pages[index]}
                </p>
              </button>
            ))}
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
