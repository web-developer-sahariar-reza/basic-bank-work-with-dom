document.getElementById("btn-deposit").addEventListener("click", function () {
  const depoitField = document.getElementById("deposit-field");
  const depositAmount = depoitField.value;
  const currentDepositAmount = parseFloat(depositAmount);

  const depositTotalElement = document.getElementById("deposit-total");
  const depositTotal = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(depositTotal);

  const newDepositAmount = previousDepositTotal + currentDepositAmount;
  depositTotalElement.innerText = newDepositAmount;

  const balanceTotalElement = document.getElementById("balance-total");
  const balanceTotal = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(balanceTotal);

  const newBalanceAmount = previousBalanceTotal + currentDepositAmount;
  balanceTotalElement.innerText = newBalanceAmount;

  depoitField.value = "";
});
