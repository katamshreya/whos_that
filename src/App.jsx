import { useState } from "react";
import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
import "./App.css";

function App() {
  const [deck] = useState(cards); // ordered, no shuffle (shuffle is stretch)
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === deck.length - 1;

  const goTo = (index) => {
    setCurrentIndex(index);
    setCardKey((k) => k + 1);
  };

  const handleCorrect = () => {
    const newStreak = streak + 1;
    setStreak(newStreak);
    if (newStreak > longestStreak) setLongestStreak(newStreak);
  };

  const handleIncorrect = () => {
    setStreak(0);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Who's That? 🌟</h1>
        <p className="app-description">
          Guess the singer from just a glimpse — type your answer before flipping!
        </p>
        <div className="app-meta">
          <span className="meta-badge">🃏 {deck.length} cards</span>
          <span className="meta-badge">🔥 Streak: {streak}</span>
          <span className="meta-badge">🏆 Best: {longestStreak}</span>
        </div>
      </header>

      <main className="app-main">
        <Flashcard
          key={cardKey}
          card={deck[currentIndex]}
          onCorrect={handleCorrect}
          onIncorrect={handleIncorrect}
        />

        <div className="nav-btns">
          <button
            className="nav-btn"
            onClick={() => goTo(currentIndex - 1)}
            disabled={isFirst}
          >
            ← Back
          </button>
          <span className="nav-count">{currentIndex + 1} / {deck.length}</span>
          <button
            className="nav-btn"
            onClick={() => goTo(currentIndex + 1)}
            disabled={isLast}
          >
            Next →
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;