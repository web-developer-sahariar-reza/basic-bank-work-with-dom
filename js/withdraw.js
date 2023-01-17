document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmount = withdrawField.value;

  const currentWithdrawAmount = parseFloat(withdrawAmount);

  const withdrawTotalElement = document.getElementById("withdraw-total");
  const withdrawTotal = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(withdrawTotal);

  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotal = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(balanceTotal);

  withdrawField.value = "";

  if (currentWithdrawAmount > previousBalanceTotal) {
    alert("You don't have sufficient balance");
    return;
  } else {
    const newWithdrawAmount = previousWithdrawTotal + currentWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawAmount;

    const newBalanceAmount = previousBalanceTotal - currentWithdrawAmount;
    balanceTotalElement.innerText = newBalanceAmount;
  }
});
