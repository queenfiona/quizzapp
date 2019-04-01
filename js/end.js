const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
// most recent score is obtained from game.js
const mostRecentScore = localStorage.getItem('mostRecentScore');

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup",()=>{
	saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e)=>{
	console.log("clicked the save btn");
	e.preventDefault();
}