import React from "react";

import "./DashBoardCard.scss"

interface DashBoardCardProps {
  cardText: string;
  cardNumber: number;
  cardImage: string;
}


const DashBoardCard: React.FC<DashBoardCardProps> = ({cardText, cardNumber, cardImage}) => {
  return (
    <div className="card__container">
      <img 
        alt=""
        src={cardImage}
        height="40"
        width="40"
        className="card__container--img"
      />

      <p className="card__container--text">{cardText}</p>

      <p className="card__container--number">{cardNumber}</p>
    </div>
  )
}

export default DashBoardCard