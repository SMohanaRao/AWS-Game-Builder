import React from 'react';
import { Card } from './Card';
import { useGame } from '../../hooks/useGame';
import './GameBoard.css';

export const GameBoard: React.FC = () => {
  const { cards, score, moves, handleCardClick, initializeGame } = useGame();

  return (
    <div className="game-board">
      <div className="game-info">
        <div className="score">Score: {score}</div>
        <div className="moves">Moves: {moves}</div>
        <button onClick={initializeGame} className="new-game-btn">
          New Game
        </button>
      </div>
      <div className="cards-grid">
        {cards.map(card => (
          <Card key={card.id} {...card} onClick={handleCardClick} />
        ))}
      </div>
    </div>
  );
};
