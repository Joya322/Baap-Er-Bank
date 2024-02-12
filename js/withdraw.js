document.getElementById("withdraw-btn").addEventListener("click", function () {
  // get deposit-amount-field value
  const withdrawAmount = getFieldValueById("withdraw-amount-field");

  // check validity of deposit amount
  if (isNaN(withdrawAmount)) {
    alert("Invalid amount");
    return;
  }

  // get total-withdraw amount
  const totalWithdrawAmount = getElementValueById("total-withdraw");

  // adding withdraw-amount with total-withdraw
  const totalWithdraw = addingTwoNumbers(totalWithdrawAmount, withdrawAmount);

  // get total-balance amount
  const totalBalance = getElementValueById("total-balance");

  // check if totalBalance is sufficient or not
  if (totalBalance < withdrawAmount) {
    alert("Insufficient balance");
    return;
  }

  // placing withdrawAmount into totalWithdrawAmount
  setElementTextById(totalWithdraw, "total-withdraw");

  // deducting withdraw-amount from total-balance
  const presentBalance = deductingTwoNumbers(totalBalance, withdrawAmount);

  // placing presentBalance into totalBalance
  setElementTextById(presentBalance, "total-balance");
});
