document.getElementById("Ievades").addEventListener("input", decodeInput);

function decodeInput(event) {
    const message = event.target.value;
    document.getElementById("output").innerText = "Labdien " + message+ "!";
    if (message === ""){
      document.getElementById("output").innerText = message;
    }
}


function updateTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Январь — 0
  const year = now.getFullYear();
  
  document.getElementById('clock').textContent = `Šodienas datums ${day}/${month}/${year}  Laiks ${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);



const numbers = [1,2,3,4,5,6,7,8,
                 9,10,11,12,13,14,
                 15,16,17,18,19,20,
                 21,22,23,24,25];
//const nofiltrets = numbers.filter(funkcija)
const button = document.getElementById("btn");



function funkcija(){
  let inputs = prompt("Ievadi 2, 3 vai 5, lai nofiltrētu massīvu no 1 līdz 25!")
  let cipars = Number(inputs)

let cip1 = numbers.filter(ArDivi)
console.log(cip1)

  if (cipars === 2||3||5){

    if(cipars === 2){
      function ArDivi(element){
        return element % 2 === 0
      }
    }

    if(cipars === 3){
      function ArTris(element){
        return element % 3 === 0
      }
    }

    if(cipars === 5){
      function ArPieci(element){
        return element % 5 === 0
      }
    }

  }

}
button.addEventListener("click", funkcija)


let numbers2 = [1,2,3,4,5,6,7];
let evenNums = numbers2.filter(isEven);

document.getElementById('output2').textContent = evenNums;


function isEven(element){
    return element % 2 === 0;
}