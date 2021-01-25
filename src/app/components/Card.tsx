import React from "react";

interface CardProps {
  type: string;
  total: number;
  _new: number;
}

const Card: React.FC<CardProps> = ({ type, total, _new }) => {
  return (
    <div className={`card card--${type}`}>
      {/* total */}
      <div className="card__column">
        <div className="column__header">{`total ${type}`}</div>
        <div className="column__value">{total}</div>
      </div>

      {/* new */}
      <div className="card__column">
        <div className="column__header">{`new ${type}`}</div>
        <div className="column__value">{_new}</div>
      </div>
    </div>
  );
};

export default Card;
