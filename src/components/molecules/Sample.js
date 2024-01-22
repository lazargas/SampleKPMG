import React, { useState } from 'react';
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
    const [selectedCard, setSelectedCard] = useState(null);

    const handleCardClick = (index) => {
        setSelectedCard(index);
    };

    return (
        <>
            <div className='container'>
                <div className='flex items-center justify-start'>
                    <p>Data Entity Group</p>
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </div>
                <div className='card-container'>
                    {
                        [card1, card2, card3, card4, card5, card6].map((card, index) => (
                            <button
                                className={`flex items-center justify-center ${selectedCard === index ? 'opacity-50' : ''}`}
                                key={index}
                                onClick={() => handleCardClick(index)}
                            >
                                <img src={card} alt={`Card ${index + 1}`} />
                            </button>
                        ))
                    }
                </div>
                <div className='table-container' >
                    <Table/>
                </div>
            </div>
        </>
    );
}

export default Sample;
