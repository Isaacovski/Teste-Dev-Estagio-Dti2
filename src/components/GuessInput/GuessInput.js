import React from 'react';
import './GuessInput.css';

const GuessInput = ({ guess, onChange, onSubmit, disabled }) => (
  <div className="guess-input">
    <input
      type="number"
      value={guess}
      onChange={onChange}
      min="1"
      max="100"
      placeholder="Seu palpite"
      disabled={disabled}
    />
    <button type="button" onClick={onSubmit} disabled={disabled}>
      Enviar
    </button>
  </div>
);

export default GuessInput;
