// get field value
function getFieldValueById(fieldId) {
  const amountField = document.getElementById(fieldId);
  const amountFieldStringValue = amountField.value;
  amountField.value = "";
  let amountFieldNumberValue = parseFloat(amountFieldStringValue);
  return amountFieldNumberValue;
  // console.log(amountFieldStringValue);
}

// get total-amount
function getElementValueById(elementId) {
  let element = document.getElementById(elementId);
  let elementStringValue = element.innerText;
  let elementNumberValue = parseInt(elementStringValue);
  return elementNumberValue;
}

// addition function
function addingTwoNumbers(number1, number2) {
  return number1 + number2;
}

// subtraction function
function deductingTwoNumbers(number1, number2) {
  return number1 - number2;
}

// set text into an element
function setElementTextById(textAsNumber, elementId) {
  let text = textAsNumber.toString();
  document.getElementById(elementId).innerText = text;
}
