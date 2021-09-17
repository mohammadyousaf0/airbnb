let idElement = document.querySelector("#details");
let params = new URLSearchParams(url);
let houseId = params.get("houseId");

fetch("./details.json")
.then((response) => response.json())
.then((result) => {
    result.id.forEach((houseDetails) => {
        idElement.innerHTML += `<a href="details.html?HouseId="${houseDetails.id}">
            <article>
                <p>id: </p>
                <p>destination: </p>
                <p>pool: </p>
            </article>
        </a>`
    })
})