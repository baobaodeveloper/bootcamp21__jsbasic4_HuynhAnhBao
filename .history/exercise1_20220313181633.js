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
  if (!score.value || !score1.value || !score2.value || !score3.value) return;
  const scoreValue = +score.value;
  const score1Value = +score1.value;
  const score2Value = +score2.value;
  const score3Value = +score3.value;
  const objectValue = +object.value;
});

const areas = () => {
  if (!area.value) return;

  const areaValue = area.value;
  if (areaValue.toUpperCase() === "X") {
    return 0;
  } else if (areaValue.toUpperCase() === "A") {
    return 2;
  } else if (areaValue.toUpperCase() === "B") {
    return 1;
  }
};
