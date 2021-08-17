function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const inputAmount = parseFloat(inputAmountText);

  inputField.value = "";
  return inputAmount;
}

function updateTotalField(inputId, amount) {
  const inputTotal = document.getElementById(inputId);
  const inputText = inputTotal.innerText;
  const preInputAmount = parseFloat(inputText);
  inputTotal.innerText = preInputAmount + amount;
}
function currentBalance() {
  const totalBalance = document.getElementById("total-balance");
  const totalBalanceText = totalBalance.innerText;
  const preTotalBalance = parseFloat(totalBalanceText);
  return preTotalBalance;
}

function updateTotalBalance(amount, idAdd) {
  const totalBalance = document.getElementById("total-balance");
  // const totalBalanceText = totalBalance.innerText;
  // const preTotalBalance = parseFloat(totalBalanceText);
  const preTotalBalance = currentBalance();
  if (idAdd == true) {
    totalBalance.innerText = preTotalBalance + amount;
  } else {
    totalBalance.innerText = preTotalBalance - amount;
  }
}

document.getElementById("deposit-btn").addEventListener("click", function () {
  //get deposti amount
  // const depositInput = document.getElementById("deposit-input");
  // const depositAmountText = depositInput.value;
  // const newDepositeAmount = parseFloat(depositAmountText);

  //get and set depopsit total
  // const depositTotal = document.getElementById("total-deposit");
  // const PreDepositText = depositTotal.innerText;
  // const preDepositAmount = parseFloat(PreDepositText);

  // depositTotal.innerText = preDepositAmount + newDepositeAmount;

  //update balance
  //   const totalBalance = document.getElementById("total-balance");
  //   const totalBalanceText = totalBalance.innerText;
  //   const pretotalBalance = parseFloat(totalBalanceText);
  //   totalBalance.innerText = pretotalBalance + newDepositeAmount;
  const newDepositeAmount = getInputValue("deposit-input");
  if (newDepositeAmount > 0) {
    updateTotalField("total-deposit", newDepositeAmount);
    updateTotalBalance(newDepositeAmount, true);
  }
});

//withdraw
document.getElementById("withdraw-btn").addEventListener("click", function () {
  // const withdrawInput = document.getElementById("withdraw-input");
  // const withdrawAmountText = withdrawInput.value;
  // const newWithdrawAmount = parseFloat(withdrawAmountText);

  //get and set withdraw total
  // const withdrawTotal = document.getElementById("withdraw-total");
  // const withdrawTotalText = withdrawTotal.innerText;
  // const preWithdrawAmount = parseFloat(withdrawTotalText);

  // withdrawTotal.innerText = preWithdrawAmount + newWithdrawAmount;

  //update total

  // const totalBalance = document.getElementById("total-balance");
  // const totalBalanceText = totalBalance.innerText;
  // const pretotalBalance = parseFloat(totalBalanceText);
  // totalBalance.innerText = pretotalBalance - newWithdrawAmount;
  const newWithdrawAmount = getInputValue("withdraw-input");
  const currentBal = currentBalance();
  if (newWithdrawAmount > 0 && currentBal > newWithdrawAmount) {
    updateTotalField("withdraw-total", newWithdrawAmount);
    updateTotalBalance(newWithdrawAmount, false);
  }
});
