const selects = document.getElementsByClassName("select");
for (const select of selects) {
  select.addEventListener("click", function (event) {
    const parent = event.target.parentNode;
    const getPlayer = parent.querySelector("h2");
    const player = getPlayer.innerText;

    const listContainer = document.getElementById("list-container");

    const li = document.createElement("li");
    li.innerText = player;

    let listContainerLength = listContainer.childNodes.length;

    if (listContainerLength <= 4) {
      listContainer.appendChild(li);
    } else {
      alert("can't Select More then 5!");
      return;
    }

    select.setAttribute("disabled", "true");
    select.style.backgroundColor = "gray";

    document
      .getElementById("list-container")
      .addEventListener("click", function (event) {
        event.target.parentNode.removeChild(event.target);
      });

    console.log(listContainer.childNodes.length);
  });
}
