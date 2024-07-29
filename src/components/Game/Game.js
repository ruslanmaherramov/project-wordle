import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import Form from '../Form';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = useState([]);

  function handleSubmitGuess(guess) {
    setGuessList([...guessList, guess]);
  }

  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
