function getInputFieldValueById(inputId) {
  const inputField = document.getElementById(inputId);
  const inputFieldValueString = inputField.value;
  const inputFieldValue = parseInt(inputFieldValueString);
  return inputFieldValue;
}

document.getElementById("calculate"),
  addEventListener("click", function () {
    const perPlayerAmount = getInputFieldValueById("per-player-amount");

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
    const perManagerAmount = getInputFieldValueById("per-Manager-amount");

    const perCoachAmount = getInputFieldValueById("per-coach-amount");

    const playerExpansesTotalField = document.getElementById("player-expenses");
    const playerExpansesTotalString = playerExpansesTotalField.innerText;
    const playerExpensesTotal = parseInt(playerExpansesTotalString);

    let totalSum = playerExpensesTotal + perManagerAmount + perCoachAmount;

    const totalField = document.getElementById("grand-total");
    totalField.innerText = totalSum;

    console.log(totalSum);
  });
