export interface Card {
  id: string;
  image: string;
  isFlipped: boolean;
  isMatched: boolean;
}

export interface GameState {
  score: number;
  moves: number;
  startTime: number;
  gameStatus: 'idle' | 'playing' | 'completed';
}

export interface Player {
  id: string;
  email: string;
  highScore: number;
  gamesPlayed: number;
}
