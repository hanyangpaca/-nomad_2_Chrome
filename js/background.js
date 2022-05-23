

const images = ["1.jpeg","2.jpeg"];

const image = images[Math.floor(Math.random() * (images.length))]

const bgImage = document.createElement("img")

bgImage.src = `img/${image}`; 
/// 이게 뭐람 쳐봐야지

document.body.appendChild(bgImage)
// body에 bgImage라는 것 자체를 추가해줌, 그래서 img 하나가 추가된다..
// element.create 가 효과가 엄청나다.

