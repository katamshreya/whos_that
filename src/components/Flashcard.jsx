import { useState } from "react";
import "./Flashcard.css";

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="card-scene" onClick={() => setIsFlipped((p) => !p)}>
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
  );
}

export default Flashcard;