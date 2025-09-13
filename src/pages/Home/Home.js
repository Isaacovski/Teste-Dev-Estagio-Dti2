import React, { useState } from 'react';
import GuessInput from '../../components/GuessInput/GuessInput';
import FeedbackMessage from '../../components/FeedbackMessage/FeedbackMessage';
import './Home.css';
import { checkGuess } from '../../services/gameService';

const Home = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const handleSubmit = async () => {
    if (gameOver) return;

    const response = await checkGuess(parseInt(guess, 10));

    if (response.correct) {
      setMessage(`Você acertou! O número era ${response.number}.`);
      setGameOver(true);
    } else if (response.hint) {
      setMessage(response.hint);
    }

    setAttempts(attempts + 1);
  };

  const handleRestart = () => {
    setGuess('');
    setMessage('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="home">
      <h1>Adivinhação do Número</h1>
      <p>Digite um número entre 1 e 100 para tentar adivinhar o número gerado pelo sistema.</p>
      <GuessInput guess={guess} onChange={handleChange} onSubmit={handleSubmit} disabled={gameOver} />
      <FeedbackMessage message={message} />
      {gameOver && <button onClick={handleRestart}>Nova Rodada</button>}
      <p>Você tentou {attempts} {attempts === 1 ? 'vez' : 'vezes'}.</p>
    </div>
  );
};

export default Home;
