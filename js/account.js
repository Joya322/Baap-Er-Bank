document.getElementById("deposit-btn").addEventListener("click", function () {
  // get deposit-amount-field value
  let depositAmount = getFieldValueById("deposit-amount-field");

  // check if depositAmount have any input
  if (depositAmount !== undefined) {
    // get total-deposit amount
    let totalDepositAmount = getElementValueById("total-deposit");

    // adding deposit-amount with total-deposit
    let totalDeposit = addingTwoNumbers(totalDepositAmount, depositAmount);

    // placing depositAmount into totalDepositAmount
    setElementTextById(totalDeposit, "total-deposit");

    // get total-balance amount
    let totalBalance = getElementValueById("total-balance");

    // adding deposit-amount with total-balance
    let presentBalance = addingTwoNumbers(totalBalance, depositAmount);

    // placing presentBalance into totalBalance
    setElementTextById(presentBalance, "total-balance");
  }
});
