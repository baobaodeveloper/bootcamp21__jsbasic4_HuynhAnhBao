const score = document.getElementById("score");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const area = document.getElementById("area");
const object = document.getElementById("object");
const scoreBtn = document.getElementById("scoreBtn");
const scoreBtnAgain = document.getElementById("score-btn-again");
const evaluate = document.getElementById("evaluate");
const totalScore = document.getElementById("total-score");

scoreBtn.addEventListener("click", () => {
  if (
    !score.value ||
    !score1.value ||
    !score2.value ||
    !score3.value ||
    !area.value ||
    !object.value
  )
    return;
});
