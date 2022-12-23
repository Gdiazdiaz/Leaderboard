const sortScores = async (array) => {
  let temp = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (parseInt(array[j].score, 10) > parseInt(array[i].score, 10)) {
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

export default sortScores;