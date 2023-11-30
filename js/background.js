const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg"
]

const randomImg = images[Math.floor(Math.random() * images.length)]

// const bgImg = document.createElement("img")
const bgImg = document.createElement("img")
bgImg.setAttribute("id", "bg")

// const imgURL = `../img/${randomImg}`

console.log(bgImg)
bgImg.src=`img/${randomImg}`
// bgImg.style.backgroundImage = "url('" + imgURL + "')"

document.body.appendChild(bgImg)