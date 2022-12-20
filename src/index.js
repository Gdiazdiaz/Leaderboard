import './style.css';
import displayScores from './displayScores.js';
import addScore from './addScore.js';

const scores = [];

const sectionForScores = document.querySelector('#score-container');
displayScores(scores, sectionForScores);

class Score {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
}

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const newscore = new Score(name, score);
  addScore(scores, newscore);
  myForm.reset();
  displayScores(scores, sectionForScores);
});