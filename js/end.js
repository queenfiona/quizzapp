const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
// most recent score is obtained from game.js
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores =  JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;
username.addEventListener("keyup",()=>{
	saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e)=>{
	console.log("clicked the save btn");
	e.preventDefault();

	const score = {
		score : mostRecentScore,
		name: username.value
	};
	highScores.push(score);

	highScores.sort((a,b) =>{
		return b.score - a.score;
	});
	highScores.splice(5);

	localStorage.setItem('highScores', JSON.stringify(highScores));
	window.location.assign("/templates/");
	console.log(highScores)
}