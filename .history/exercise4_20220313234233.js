const calculatorBillInternet = document.getElementById("bill-internet-btn");
const calculatorBillInternetAgain = document.getElementById(
  "bill-internet-btn-again"
);
const connected = document.getElementById("connected");
const chanel = document.getElementById("channel");

calculatorBillInternet.addEventListener("click", () => {
  const customer = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;

  if (!chanel) return;
});

const privateHouse = function (customer, numberChanel) {
  return 4.5 + 20.5 + 7.5 * numberChanel;
};
