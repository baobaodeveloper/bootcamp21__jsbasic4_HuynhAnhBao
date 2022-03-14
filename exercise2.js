const host = document.getElementById("host");
const numberKw = document.getElementById("number-kw");
const calculateElectricBill = document.getElementById("electricBill");
const calculateElectricBillAgain =
  document.getElementById("electricbill-again");
const totalPay = document.getElementById("total-pay");

calculateElectricBill.addEventListener("click", () => {
  if (!host || !numberKw || numberKw < 0) return;
  const numberKwValue = +numberKw.value;
  const totalMoneyPay = calculatekw(numberKwValue);
  console.log(totalMoneyPay);
  totalPay.value = `${host.value} bạn phải thanh toán ${Intl.NumberFormat(
    "vi-VN",
    {
      style: "currency",
      currency: "VND",
    }
  ).format(totalMoneyPay)}`;
});

const calculatekw = (numKw) => {
  if (numKw <= 50) {
    return numKw * 500;
  } else if (numKw <= 100) {
    return 50 * 500 + (numKw - 50) * 650;
  } else if (numKw <= 200) {
    return 50 * (500 + 650) + (numKw - 100) * 850;
  } else if (numKw <= 350) {
    return 50 * (500 + 650) + 100 * 850 + (numKw - 200) * 1100;
  } else {
    return 50 * (500 + 650) + 100 * 850 + 150 * 1100 + (numKw - 350) * 1300;
  }
};

calculateElectricBillAgain.addEventListener("click", () => {
  totalPay.value = "";
  host.value = "";
  numberKw.value = "";
});
