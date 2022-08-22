let count = 0;
const selectBtn = document.getElementsByClassName("select-btn");

for (selector of selectBtn) {
  selector.addEventListener("click", function (event) {
    count++;
    const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
    const selected = event.target.setAttribute("disabled", "");

    if (count > 5) {
      const selected = event.target.removeAttribute("disabled");

      alert(" Can't add more 5 player");
      return;
    }

    const selectedPlayer = document.getElementById("selected-total");
    const totalSelectedPlayer = parseFloat(selectedPlayer.innerText);
    selectedPlayer.innerText = count;

    const mainContainer = document.getElementById("body-container");

    const bodyContainer = document.createElement("tr");
    bodyContainer.innerHTML = `
       <th scope="row">${count}</th>
       <td>  </td>
       <td>${playerName}</td>
       `;
    mainContainer.appendChild(bodyContainer);
  });
}
