document.getElementById("calculate").addEventListener("click", function () {
  const playerValue = getInputValueById("player-budget");

  if (isNaN(playerValue)) {
    alert("Please provide  number");
    return;
  } else if (playerValue < 0) {
    alert("Provide positive number");
    return;
  }

  const selectedPlayerTotal = getElementById("selected-total");

  const totalPlayerExpenseAmount = playerValue * selectedPlayerTotal;

  const playerExpenses = setElementValueById("player-expense", totalPlayerExpenseAmount);
});

// Calculate Total

document.getElementById("calculate-total").addEventListener("click", function () {
  const managerAmountValue = getInputValueById("manager-amount");

  const coachAmountValue = getInputValueById("coach-amount");

  const playerExpensesTotal = getElementById("player-expense");

  if (managerAmountValue < 0) {
    alert("Provide positive number");
    return;
  } else if (coachAmountValue < 0) {
    alert("Provide positive number");
    return;
  }
  if (isNaN(coachAmountValue)) {
    alert("Provide a number");
    return;
  } else if (isNaN(managerAmountValue)) {
    alert("Please provide a number");
    return;
  }

  const totalAmount = managerAmountValue + coachAmountValue + playerExpensesTotal;

  const total = document.getElementById("total");
  total.innerText = totalAmount;
});
