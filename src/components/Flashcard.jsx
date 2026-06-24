import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ card, onCorrect, onIncorrect }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [guess, setGuess] = useState("");
  const [feedback, setFeedback] = useState(null); // null | "correct" | "incorrect"

  const handleFlip = () => setIsFlipped((p) => !p);

  const handleSubmit = () => {
    if (!guess.trim()) return;
    const isCorrect = guess.trim().toLowerCase() === card.name.toLowerCase();
    setFeedback(isCorrect ? "correct" : "incorrect");
    if (isCorrect) {
      onCorrect();
      setIsFlipped(true); // auto-flip on correct so they see the reveal
    } else {
      onIncorrect();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="card-wrapper">
      {/* Guess input — shown before flipping */}
      {!isFlipped && (
        <div className={`guess-area ${feedback || ""}`}>
          <input
            className="guess-input"
            type="text"
            placeholder="Type your guess..."
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="guess-btn" onClick={handleSubmit}>
            Submit
          </button>
          {feedback === "incorrect" && (
            <p className="feedback-msg incorrect">❌ Not quite — try again or tap the card!</p>
          )}
          {feedback === "correct" && (
            <p className="feedback-msg correct">✅ Correct!</p>
          )}
        </div>
      )}

      {/* Card */}
      <div className="card-scene" onClick={handleFlip}>
        <div className={`card-inner ${isFlipped ? "is-flipped" : ""}`}>

          {/* FRONT */}
          <div className="card-face card-front">
            <div className="card-image-container cropped">
              <img
                src={card.imageUrl}
                alt="Guess who?"
                style={{
                  objectPosition: card.cropPosition,
                  transform: `scale(${card.cropScale})`,
                  transformOrigin: card.cropPosition,
                }}
              />
            </div>
            <div className="card-bottom">
              <p className="card-hint">
                <span className="hint-label">Hint:</span> {card.hint}
              </p>
              <p className="card-cta">Tap to reveal →</p>
            </div>
          </div>

          {/* BACK */}
          <div className="card-face card-back">
            <div className="card-image-container full">
              <img
                src={card.imageUrl}
                alt={card.name}
                style={{ objectPosition: "50% 15%" }}
              />
            </div>
            <div className="card-bottom">
              <p className="card-name">{card.name}</p>
              <p className="card-cta muted">Tap to flip back</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Flashcard;