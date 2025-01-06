import React from 'react';
import { Card as CardType } from '../../types/game';
import './Card.css';

interface CardProps extends CardType {
  onClick: (card: CardType) => void;
}

export const Card: React.FC<CardProps> = (props) => {
  const { image, isFlipped, isMatched, onClick } = props;

  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${
        isMatched ? 'matched' : ''
      }`}
      onClick={() => onClick(props)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="aws-logo" />
        </div>
        <div className="card-back">
          <img src={image} alt="AWS Service" />
        </div>
      </div>
    </div>
  );
};
