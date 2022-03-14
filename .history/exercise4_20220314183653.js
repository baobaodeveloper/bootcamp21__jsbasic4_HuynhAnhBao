const calculatorBillInternet = document.getElementById("bill-internet-btn");
const calculatorBillInternetAgain = document.getElementById(
  "bill-internet-btn-again"
);
const connected = document.getElementById("connected");
const chanel = document.getElementById("channel");
const conectedContainer = document.querySelector(".conected-container");
const bill = document.getElementById("bill");
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
  const customerInput = document.querySelector(
    'input[name="flexRadioDefault"]:checked'
  );

  if (!chanel.value || !customerInput || +chanel.value === 0)
    return alert("Value Invalid");
  const customer = customerInput.value;
  const billTotal = calculateBill(customer, +chanel.value);
  bill.value = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(billTotal);
});

const calculateBill = function (customer, numberChanel) {
  if (customer === "private-house") {
    return 4.5 + 20.5 + 7.5 * numberChanel;
  } else if (customer === "business") {
    return connectedBusiness(numberChanel) || 0;
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

calculatorBillInternetAgain.addEventListener("click", () => {
  console.log(
    (document.querySelector(
      'input[name="flexRadioDefault"]:checked'
    ).checked = false)
  );
});
