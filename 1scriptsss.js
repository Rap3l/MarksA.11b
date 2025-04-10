document.getElementById("Ievades").addEventListener("input", decodeInput);

function decodeInput(event) {
    const message = event.target.value;
    document.getElementById("output").innerText = "Labdien " + message + "!";
    if (message === ""){
      document.getElementById("output").innerText = message;
    }
}


function updateTime() {
  const tagad = new Date();
  const stunda = tagad.getHours().toString().padStart(2, '0');
  const minutes = tagad.getMinutes().toString().padStart(2, '0');
  const sekundes = tagad.getSeconds().toString().padStart(2, '0');
  const dienas = tagad.getDate().toString().padStart(2, '0');
  const menesi = (tagad.getMonth() + 1).toString().padStart(2, '0');
  const gadi = tagad.getFullYear();
  
  document.getElementById('clock').textContent = `Šodienas datums ${dienas}/${menesi}/${gadi}  Laiks ${stunda}:${minutes}:${sekundes}`;
}

updateTime();
setInterval(updateTime, 1000);


const button = document.getElementById("btn")

function filtrēsana() {
  const numbers = [1,2,3,4,5,6,7,8,
                    9,10,11,12,13,14,
                    15,16,17,18,19,20,
                    21,22,23,24,25]

  const input = parseInt(prompt("Šeit ir skaitļu masīvs no 1-25, jūs to varat nofiltrēt ar dažiem variantiem, lai redzetu pāra skaitļus rakstiet 2, lai skaitļus kuri dalās ar 3 - 3, lai skaitļus kuri dalās ar 5 - 5! "), 10);

  if (![2, 3, 5].includes(input)) {
    filtrēsana()
  }

  const filtered = numbers.filter(function(num) {
    return num % input === 0;
  });
  document.getElementById("result").textContent = `Skaitļi kuri dalās ar ${input}: ${filtered.join(", ")}`
  return filtered
}


button.addEventListener("click", filtrēsana)



prompt("MI palīdzēja uzlabot 5 funkciju 2scripts.js failā, izstāstot ka var izmantot substring un lastIndexOf metodes, uzrakstīja kā var izmantot parseInt, .join rīku kurš pārveido massīvu uz stringu un sadala to ar komatiem, MI intelekts uzrakstīja animācijas pogām ")