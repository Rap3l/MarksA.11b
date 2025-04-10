const button1 = document.getElementById("pirma");
function funkcija1(){
    let x = 2
    let image1 = "atteli/im" +  x + ".png"
    let attels2 = document.querySelectorAll("img")[3]        //maina spēlētāja izvēli uz akmeni
    attels2.setAttribute("src", image1)
}
button1.addEventListener("click", funkcija1)


const button2 = document.getElementById("otra");
function funkcija2(){
    let y = 0
    let image2 = "atteli/im" + y + ".png"
    let attels2 = document.querySelectorAll("img")[3]       //maina spēlētāja izvēli uz šķērēm
    attels2.setAttribute("src", image2)
}
button2.addEventListener("click", funkcija2)


const button3 = document.getElementById("tresa");
function funkcija3(){
    let z = 1
    let image3 = "atteli/im" + z + ".png"
    let attels2 = document.querySelectorAll("img")[3]       //maina spēlētāja izvēli uz papīru
    attels2.setAttribute("src", image3)
}
button3.addEventListener("click", funkcija3)


const button4 = document.getElementById("btn");


function funkcija4(){
    
    let randomNumber1 = Math.floor(Math.random() * 3);
    let image4 = "atteli/im" + randomNumber1 + ".png"           //Maina attēlu uz nejauši izvēlēto
    let attels1 = document.querySelectorAll("img")[4]
    attels1.setAttribute("src", image4)

}

function funkcija5() {
    let randomImg = document.getElementById("random").src;
    let cilveksImg = document.getElementById("cilveks").src;

    
    randomImg = randomImg.substring(randomImg.lastIndexOf("/") + 1);  // no "http://127.0.0.1:5500/PD/atteli/im?.png" izņem visu pirms pēdējas '/' => paliek tikai "im?.png"
    cilveksImg = cilveksImg.substring(cilveksImg.lastIndexOf("/") + 1); // no "http://127.0.0.1:5500/PD/atteli/im?.png" izņem visu pirms pēdējas '/' => paliek tikai "im?.png"

    if (randomImg === cilveksImg) {
        document.getElementById("text").textContent = "Neizšķirta!";    // gadijumi kad  ir neizšķirta
    }
    else if (
        (randomImg === "im0.png" && cilveksImg === "im2.png") ||    
        (randomImg === "im2.png" && cilveksImg === "im1.png") ||        // gadījumi kad cilveks uzvar
        (randomImg === "im1.png" && cilveksImg === "im0.png")
    ) {
        document.getElementById("text").textContent = "Tu uzvarēji!";
    } 
    else {
        document.getElementById("text").textContent = "Tu zaudēji!"; // parejie gadijumi, kuros cilveks zaude
    }
}

button4.addEventListener("click", funkcija4);
button4.addEventListener("click", funkcija5);












