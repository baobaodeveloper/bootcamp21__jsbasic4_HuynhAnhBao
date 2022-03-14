const host = document.getElementById("host");
const numberKw = document.getElementById("number-kw");
const calculateElectricBill = document.getElementById("electricBill");
const calculateElectricBillAgain =
  document.getElementById("electricbill-again");
const totalPay = document.getElementById("total-pay");

calculateElectricBill.addEventListener("click", () => {
  if (!host || !numberKw || numberKw < 0) return;
  const numberKwValue = +numberKw.value;
});

const calculatekw = (numKw) => {
  if (numKw <= 50) {
    return numKw * 500;
  } else if (numKw <= 100) {
    return 50 * 500 + (numKw - 50) * 650;
  } else if (numKw <= 200) {
    return 50 * (500 + 650) + numKw * 850;
  } else if (numKw <= 350) {
    return 50 * (500 + 650) + 100 * 850 + numKw;
  }
};
