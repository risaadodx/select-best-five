const selects = document.getElementsByClassName("select");
for (const select of selects) {
  select.addEventListener("click", function (event) {
    const parent = event.target.parentNode;
    const getPlayer = parent.querySelector("h2");
    const player = getPlayer.innerText;
    console.log(player);
  });
}
