const calculatorBillInternet = document.getElementById("bill-internet-btn");
const calculatorBillInternetAgain = document.getElementById(
  "bill-internet-btn-again"
);

calculatorBillInternet.addEventListener("click", () => {
  const customer = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;
});

const privateHouse = function (customer, numberChanel) {
  return 4.5 + 20.5 + 7.5 * numberChanel;
};
