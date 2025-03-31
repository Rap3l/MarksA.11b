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


const para = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
const nepara = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]

const button = document.getElementById("btn");
function funkcija(){
    x = prompt("Ievadi 1, ja gribi dabūt nepāra skaitļus un 2 ja pāra skaitļus")
    if ( x === "1"){
      document.getElementById('output2').textContent = "Šeit ir nepāra skaitļi: " + nepara
    }
    else if ( x === "2"){
      document.getElementById('output2').textContent = "Šeit ir pāra skaitļi: " + para
    }
    else{
      funkcija()
    }
}
button.addEventListener("click", funkcija)