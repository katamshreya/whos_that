import { useState } from "react";
import Flashcard from "./components/Flashcard";
import cards from "./data/cards";
import "./App.css";

function shuffleDeck(deck) {
  return [...deck].sort(() => Math.random() - 0.5);
}

function App() {
  const [deck, setDeck] = useState(() => shuffleDeck(cards));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardKey, setCardKey] = useState(0);

  const handleNext = () => {
    if (currentIndex + 1 >= deck.length) {
      // Reshuffle and start over when all cards seen
      setDeck(shuffleDeck(cards));
      setCurrentIndex(0);
    } else {
      setCurrentIndex((i) => i + 1);
    }
    setCardKey((k) => k + 1);
  };

  const cardsSeenCount = currentIndex + 1;

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Who's That? 🌟</h1>
        <p className="app-description">
          Can you guess the singer from just a glimpse? Tap the card to reveal who it is.
        </p>
        <div className="app-meta">
          <span className="meta-badge">🃏 {cards.length} cards</span>
        </div>
      </header>

      <main className="app-main">
        <Flashcard key={cardKey} card={deck[currentIndex]} />
        <button className="next-btn" onClick={handleNext}>
          Next Card →
        </button>
      </main>
    </div>
  );
}

export default App;