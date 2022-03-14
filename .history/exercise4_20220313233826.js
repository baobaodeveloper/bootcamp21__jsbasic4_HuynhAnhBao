const calculatorBillInternet = document.getElementById("bill-internet-btn");
const calculatorBillInternetAgain = document.getElementById(
  "bill-internet-btn-again"
);

calculatorBillInternet.addEventListener("click", () => {
  const customer = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  ).value;
});

const privateHouse = function (customer, numberChanel) {};
