import React from 'react';
import { GameBoard } from './components/Game/GameBoard';
import './App.css';

interface AppProps {
  user: any;
  onSignOut: () => void;
}

function App({ user, onSignOut }: AppProps) {
  return (
    <div className="app">
      <header className="app-header">
        <h1>AWS Memory Game</h1>
        <div className="user-info">
          <span>Welcome, {user.username}</span>
          <button onClick={onSignOut} className="sign-out-btn">
            Sign Out
          </button>
        </div>
      </header>
      <main>
        <GameBoard />
      </main>
    </div>
  );
}

export default App;
