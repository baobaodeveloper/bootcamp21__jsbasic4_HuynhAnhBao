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
