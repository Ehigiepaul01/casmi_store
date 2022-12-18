const cardimages = document.querySelector(".cardImg")
const imageContainer = document.querySelector(".col-1")

const link = "https://api.pexels.com/v1/search?query=fashion";
// const link2 = "https://api.pexels.com/v1/search?query=advert"

fetch(link, {
    headers: {
        Authorization: ""
    },
    cache: "force-cache"
})
.then(response => response.json())
.then(data => {
    console.log(data.photos)
    console.log(data.next_page)
   
    for (let i = 0; i < 15; i++) {
        let result = data.photos[i].src.tiny;
        let imgEl = `
        <img src=${result} alt="" class="cardImg">`
        imageContainer.innerHTML += imgEl;
        }    
})
