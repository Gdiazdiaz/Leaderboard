const sortScores = async(array) => {
  console.log(array);
    let temp = 0;
    for (let i = 0; i < array.length; i++) {
      for (let j = i; j < array.length; j++) {
        if (array[j].score > array[i].score) {
          temp = array[j];
          array[j] = array[i];
          array[i] = temp;
        }
      }
    }
    return array;
  }

  export default sortScores;