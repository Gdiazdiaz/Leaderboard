function displayScores(array, section){
    let scoreGenerator = '';
    array.forEach((arr) => {
        scoreGenerator += `
        <li class="list-item">${arr.name}<span>  ${arr.score}</span></li>`;
    });
    section.innerHTML = scoreGenerator;
};

export default displayScores;