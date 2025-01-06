import { useState, useEffect } from 'react';
import { Card } from '../types/game';

const CARD_IMAGES = [
  '/images/aws-lambda.png',
  '/images/aws-s3.png',
  '/images/aws-dynamodb.png',
  '/images/aws-ec2.png',
  '/images/aws-rds.png',
  '/images/aws-cloudfront.png',
];

export const useGame = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [firstCard, setFirstCard] = useState<Card | null>(null);
  const [secondCard, setSecondCard] = useState<Card | null>(null);
  const [isLocked, setIsLocked] = useState(false);

  const initializeGame = () => {
    const gameCards = [...CARD_IMAGES, ...CARD_IMAGES]
      .map((image, index) => ({
        id: `card-${index}`,
        image,
        isFlipped: false,
        isMatched: false,
      }))
      .sort(() => Math.random() - 0.5);

    setCards(gameCards);
    setScore(0);
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
  };

  const handleCardClick = (clickedCard: Card) => {
    if (
      isLocked ||
      clickedCard.isFlipped ||
      clickedCard.isMatched ||
      clickedCard.id === firstCard?.id
    ) {
      return;
    }

    flipCard(clickedCard.id);

    if (!firstCard) {
      setFirstCard(clickedCard);
    } else {
      setSecondCard(clickedCard);
      setIsLocked(true);
      setMoves(prev => prev + 1);
      checkForMatch(firstCard, clickedCard);
    }
  };

  const flipCard = (cardId: string) => {
    setCards(prev =>
      prev.map(card =>
        card.id === cardId ? { ...card, isFlipped: true } : card
      )
    );
  };

  const checkForMatch = (first: Card, second: Card) => {
    setTimeout(() => {
      if (first.image === second.image) {
        setCards(prev =>
          prev.map(card =>
            card.id === first.id || card.id === second.id
              ? { ...card, isMatched: true }
              : card
          )
        );
        setScore(prev => prev + 10);
      } else {
        setCards(prev =>
          prev.map(card =>
            card.id === first.id || card.id === second.id
              ? { ...card, isFlipped: false }
              : card
          )
        );
      }
      setFirstCard(null);
      setSecondCard(null);
      setIsLocked(false);
    }, 1000);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  return {
    cards,
    score,
    moves,
    handleCardClick,
    initializeGame,
  };
};
