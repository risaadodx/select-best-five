document.getElementById("calculate"),
  addEventListener("click", function () {
    const perPlayerAmountField = document.getElementById("per-player-amount");
    const perPlayerAmountString = perPlayerAmountField.value;
    const perPlayerAmount = parseInt(perPlayerAmountString);

    const playerExpensesField = document.getElementById("player-expenses");
    const previousPlayerExpensesString = playerExpensesField.innerText;
    const previousPlayerExpenses = parseInt(previousPlayerExpensesString);

    const listContainer = document.getElementById("list-container");
    let listContainerLength = listContainer.childNodes.length;

    let playerAmountSum = listContainerLength * perPlayerAmount;

    playerExpensesField.innerText = playerAmountSum;
    //console.log(playerAmountSum);
  });
document
  .getElementById("calculate-total")
  .addEventListener("click", function () {
    const perManagerAmountField = document.getElementById("per-Manager-amount");
    const perManagerAmountString = perManagerAmountField.value;
    const perManagerAmount = parseInt(perManagerAmountString);

    const perCoachAmountField = document.getElementById("per-coach-amount");
    const perCoachAmountString = perCoachAmountField.value;
    const perCoachAmount = parseInt(perCoachAmountString);

    const playerExpansesTotalField = document.getElementById("player-expenses");
    const playerExpansesTotalString = playerExpansesTotalField.innerText;
    const playerExpensesTotal = parseInt(playerExpansesTotalString);

    let totalSum = playerExpensesTotal + perManagerAmount + perCoachAmount;

    const totalField = document.getElementById("grand-total");
    totalField.innerText = totalSum;

    console.log(totalSum);
  });
