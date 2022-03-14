const score = document.getElementById("score");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const area = document.getElementById("area");
const objectStudent = document.getElementById("object");
const scoreBtn = document.getElementById("scoreBtn");
const scoreBtnAgain = document.getElementById("score-btn-again");
const evaluate = document.getElementById("evaluate");
const totalScore = document.getElementById("total-score");

scoreBtn.addEventListener("click", () => {
  //   if (!score.value || !score1.value || !score2.value || !score3.value) return;
  const scoreValue = +score.value;
  const score1Value = +score1.value;
  const score2Value = +score2.value;
  const score3Value = +score3.value;

  const scoreArea = areas();
  const scoreObjectStudent = objectStudents();

  const scoreTotalStudent =
    score1Value + score2Value + score3Value + scoreArea + scoreObjectStudent;

  if (scoreTotalStudent >= scoreValue) {
    evaluate.value = "Đạt";
  } else {
    evaluate.value = "Không Đạt";
  }
  totalScore.value = scoreTotalStudent;
});

const areas = () => {
  if (!area.value) return;
  const areaValue = area.value.toUpperCase();
  if (areaValue === "X") {
    return 0;
  } else if (areaValue === "A") {
    return 2;
  } else if (areaValue === "B") {
    return 1;
  } else if (areaValue === "C") {
    return 0.5;
  } else {
    return 0;
  }
};

const objectStudents = () => {
  if (!objectStudent) return;
  const objecStudenttValue = +object.value;

  if (objecStudenttValue === 0) {
    return 0;
  } else if (objecStudenttValue === 1) {
    return 2.5;
  } else if (objecStudenttValue === 2) {
    return 1.5;
  } else if (objecStudenttValue === 3) {
    return 1;
  } else {
    return 0;
  }
};

scoreBtnAgain.addEventListener("click", () => {
  score.value = "";
});
