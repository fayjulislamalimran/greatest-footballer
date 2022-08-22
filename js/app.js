let count = 0;
const selectBtn = document.getElementsByClassName('select-btn');

for (selector of selectBtn) {
  selector.addEventListener('click', function (event) {
    count++;
    const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
    const selected = event.target.setAttribute('disabled', '');

    if (count > 5) {
      const selected = event.target.removeAttribute("disabled");
      alert("You Can't Added More Then 5 Player");
      return;
    }

    const selectedPlayer = document.getElementById('selected-total');
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
  })
}