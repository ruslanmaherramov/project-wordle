import React from 'react';

function GuessList({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map((guess, index) => (
        <p key={index} className="guess">{guess}</p>
      ))}
    </div>
  );
}

export default GuessList;
