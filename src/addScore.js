const addScore = async (name, score) => {
  try {
    const result = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Sa92iHUdPr1SiBWg1N9W/scores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: name,
          score,
        }),
      },
    );
    return await result.json();
  } catch (error) {
    return error;
  }
};

export default addScore;