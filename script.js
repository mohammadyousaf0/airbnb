let wrapperElement = document.querySelector(".scrollhouse");

fetch("./huse.json")
.then((response) => response.json())
.then((result) => {
    result.huse.forEach((huseNumber) => {
        wrapperElement.innerHTML += `
        <div class="flexhouseimgtext">

          <div class="hus">
            <a href="hus.html"><img src="${huseNumber.img}" alt="hus"></a>
          </div>

          <div class="hustext">
            <div class="smalltext">
              <p>${huseNumber.smallText}</p>
              <i class="far fa-heart"></i>
            </div>
              <p class="vej"><a href="hus.html">${huseNumber.roadName}</a></p>
              <p class="guest">${huseNumber.guests}</p>
          
            <div class="review">
                <i class="fas fa-star"></i>
                <p>${huseNumber.reviews}</p>               
            </div>
          </div>
      </div>`
    })
})