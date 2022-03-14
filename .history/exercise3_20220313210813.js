const names = document.getElementById("name");
const grossPay = document.getElementById("gross-pay");
const numberPeople = document.getElementById("number-people");
const calculateBtnPay = document.getElementById("personal-income-tax");
const calculateBtnPayAgain = document.getElementById(
  "personal-income-tax-again"
);
const assessableIncome = document.getElementById("assessable-income");

calculateBtnPay.addEventListener("click", () => {
  if (
    !names.value ||
    !grossPay.value ||
    !numberPeople ||
    +grossPay.value < 0 ||
    +numberPeople.value < 0
  )
    return alert("Input Invalid");

  const taxableIncome = +grossPay.value - 4 - +numberPeople.value * 1.6;
  console.log(typeof taxableIncome);
});
