const names = document.getElementById("name");
const grossPay = document.getElementById("gross-pay");
const numberPeople = document.getElementById("number-people");
const calculateBtnPay = document.getElementById("personal-income-tax");
const calculateBtnPayAgain = document.getElementById(
  "personal-income-tax-again"
);
const assessableIncomeText = document.getElementById("assessable-income");

calculateBtnPay.addEventListener("click", () => {
  console.log(+grossPay.value >= 132000000);
  if (
    !names.value ||
    !grossPay.value ||
    !numberPeople ||
    +grossPay.value >= 132000000 ||
    +numberPeople.value < 0
  )
    return alert("Input Invalid");

  const taxableIncome =
    +grossPay.value - 4000000 - +numberPeople.value * 1600000;
  const totalPay = assessableIncome(taxableIncome);
  console.log(taxableIncome, totalPay);
});

const assessableIncome = (taxableIncome) => {
  if (taxableIncome <= 60000000) {
    return (taxableIncome * 5) / 100;
  } else if (taxableIncome <= 120000000) {
    return (60 * 5 + (taxableIncome - 60) * 10) / 100;
  } else if (taxableIncome <= 210) {
    return (60 * 5 + 60 * 10 + (taxableIncome - 120) * 15) / 100;
  } else if (taxableIncome <= 384) {
    return (60 * 5 + 60 * 10 + 90 * 15 + (taxableIncome - 210) * 20) / 100;
  } else if (taxableIncome <= 624) {
    return (
      (60 * 5 + 60 * 10 + 90 * 15 + 174 * 20 + (taxableIncome - 384) * 25) / 100
    );
  } else if (taxableIncome <= 960) {
    return (
      (60 * 5 +
        60 * 10 +
        90 * 15 +
        174 * 20 +
        240 * 25 +
        (taxableIncome - 384) * 30) /
      100
    );
  } else {
    return (
      (60 * 5 +
        60 * 10 +
        90 * 15 +
        174 * 20 +
        240 * 25 +
        336 * 30 +
        (taxableIncome - 960) * 35) /
      100
    );
  }
};
