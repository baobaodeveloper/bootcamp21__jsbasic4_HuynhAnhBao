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

  const scoreArea = areas(area.value);

  const scoreObjectStudent = objectStudents(+objectStudent.value);

  console.log(scoreObjectStudent);
});

const areas = () => {
  if (
    area.value.toUpperCase() === "A" ||
    area.value.toUpperCase() === "B" ||
    area.value.toUpperCase() === "C" ||
    areaValue.toUpperCase() === "X"
  )
    return;

  const areaValue = area.value;
  if (areaValue.toUpperCase() === "X") {
    return 0;
  } else if (areaValue.toUpperCase() === "A") {
    return 2;
  } else if (areaValue.toUpperCase() === "B") {
    return 1;
  } else {
    return 0.5;
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
  }
};
