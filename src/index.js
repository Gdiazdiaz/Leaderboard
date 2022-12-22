import './style.css';
import getScores from './getScores.js';
import addScore from './addScore.js';

const sectionForScores = document.querySelector('#score-container');
const displayScores = async () => {
  const data = await getScores();
  sectionForScores.innerHTML = '';
  for (let i = data.result.length - 1; i >= 0; i -= 1) {
    const li = document.createElement('li');
    li.classList.add('score');
    li.innerHTML = `${data.result[i].user}: ${data.result[i].score}`;
    sectionForScores.appendChild(li);
  }
};
displayScores();
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addScore(name, score);
  myForm.reset();
});

const refresh = document.querySelector('.score-button');
refresh.addEventListener('click', async () => {
  displayScores();
});