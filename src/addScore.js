const addScore = async (name, score) =>{
  try {
    const result = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AdKElt2BY5DxSjDw33GV/scores`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score: score,
    }),
  },
    );
    return await result.json();
} catch (error){
  return error;
}
};

export default addScore;