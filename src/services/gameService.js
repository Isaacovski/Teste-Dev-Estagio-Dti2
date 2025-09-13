export const checkGuess = async (guess) => {
  const response = await fetch('http://localhost:5000/check-guess', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ guess }),
  });

  const data = await response.json();
  return data;
};
