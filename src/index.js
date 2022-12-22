import './style.css';
import getScores from './getScores.js';
import addScore from './addScore.js';
import sortScores from './sortScores';

const sectionForScores = document.querySelector('#score-container');
const displayScores = async () => {
  const data = await getScores();
  let scoreGenerator = '';
  sortScores(data.result);
  data.result.forEach(user => {
    scoreGenerator += `<li><span class="bold">Name:</span> ${user.user}  <span class="bold">  Score:</span> ${user.score}</li>`;
  });
  sectionForScores.innerHTML = scoreGenerator;
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