import './style.css';
import displayScores from './displayScores';
import addScore from './addScore';

let scores=[];

const sectionForScores = document.querySelector('#score-container');
displayScores(scores, sectionForScores);

class Score {
    constructor(name, score){
        this.name = name;
        this.score = score;
    }
};

const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let score = document.getElementById('score').value;
    let newscore = new Score(name, score);
    addScore(scores, newscore);
    myForm.reset();
    displayScores(scores, sectionForScores);
});