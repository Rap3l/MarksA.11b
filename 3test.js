let randomNumber1 = Math.floor(Math.random() * 2) + 1;
let randomNumber2 = Math.floor(Math.random() * 2) + 1;


let image1 = "/PD/atteli/im" + randomNumber1 + ".png"
console.log(image1)
let attels1 = document.querySelectorAll("img")[0]
attels1.setAttribute("src", image1)


let image2 = "/PD/atteli/im" + randomNumber2 + ".png"
console.log(image1)
let attels2 = document.querySelectorAll("img")[1]
attels2.setAttribute("src", image2)