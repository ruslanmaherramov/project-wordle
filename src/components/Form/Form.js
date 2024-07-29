import React, {useState} from 'react';

function Form({ handleSubmitGuess }) {
  const [guess, setGuess] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    setGuess('');

    handleSubmitGuess(guess);
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        type="text"
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        maxLength={5}
        minLength={5}
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default Form;
