document.getElementById("deposit-btn").addEventListener("click", function () {
  // get deposit-amount-field value
  const depositAmount = getFieldValueById("deposit-amount-field");

  // check validity of deposit amount
  if (isNaN(depositAmount)) {
    alert("Invalid amount");
    return;
  }

  // get total-deposit amount
  const totalDepositAmount = getElementValueById("total-deposit");

  // adding deposit-amount with total-deposit
  const totalDeposit = addingTwoNumbers(totalDepositAmount, depositAmount);

  // placing depositAmount into totalDepositAmount
  setElementTextById(totalDeposit, "total-deposit");

  // get total-balance amount
  const totalBalance = getElementValueById("total-balance");

  // adding deposit-amount with total-balance
  const presentBalance = addingTwoNumbers(totalBalance, depositAmount);

  // placing presentBalance into totalBalance
  setElementTextById(presentBalance, "total-balance");
});
