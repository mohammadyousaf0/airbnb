let wrapperElement = document.querySelector("#team");

fetch("./teamdata.json")
.then((response) => response.json())
.then((result) => {
    result.teamdata.forEach((teamMember) => {
        wrapperElement.innerHTML += `
        <section id="team">
        <p class="firstName">${teamMember.firstName}</p>
      </section>`
    })
})