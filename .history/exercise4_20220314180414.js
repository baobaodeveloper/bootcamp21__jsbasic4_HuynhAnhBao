const calculatorBillInternet = document.getElementById("bill-internet-btn");
const calculatorBillInternetAgain = document.getElementById(
  "bill-internet-btn-again"
);
const connected = document.getElementById("connected");
const chanel = document.getElementById("channel");
const conectedContainer = document.querySelector(".conected-container");
const customerInput = document.querySelector(
  'input[name="flexRadioDefault"]:checked'
);
// EventListener
document
  .getElementById("checkedPrivateHouse")
  .addEventListener("change", () => {
    conectedContainer.style.display = "none";
  });
document.getElementById("checkedBusiness").addEventListener("change", () => {
  conectedContainer.style.display = "inline-block";
});

calculatorBillInternet.addEventListener("click", () => {
  if (!chanel.value || !customerInput.value) return;
  const customer = customerInput.value;
  privateHouse(customer, +chanel.value, +connected.value);
});

const privateHouse = function (customer, numberChanel, numberConnected) {
  if (customer === "private-house") {
    return 4.5 + 20.5 + 7.5 * numberChanel;
  } else if (customer === "business") {
    connectedBusiness(numberConnected, numberChanel);
  }
};
function connectedBusiness(numberChanel) {
  if (!connected.value) return;
  const numberConected = +connected.value;
  if (numberConected <= 10) {
    return 15 + 75 + 50 * numberChanel;
  } else if (numberConected > 10) {
    return 15 + 75 + (numberConected - 10) * 5 + 50 * numberChanel;
  }
}
