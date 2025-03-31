function funkcija5(){
    if(document.getElementById("random").src === document.getElementById("cilveks").src){
        document.getElementById("text").textContent = "Neizšķirtā!"                                 //gadījumi kad ir neizšķirtā
    }
    if(document.getElementById("random").src === "http://127.0.0.1:5500/PD/atteli/im0.png" 
    && document.getElementById("cilveks").src === "http://127.0.0.1:5500/PD/atteli/im2.png"
    || document.getElementById("random").src === "http://127.0.0.1:5500/PD/atteli/im2.png"      //gadījumi kad cilveks uzvar
    && document.getElementById("cilveks").src === "http://127.0.0.1:5500/PD/atteli/im1.png"
    || document.getElementById("random").src === "http://127.0.0.1:5500/PD/atteli/im1.png" 
    && document.getElementById("cilveks").src === "http://127.0.0.1:5500/PD/atteli/im0.png"){
        document.getElementById("text").textContent = "Tu uzvarēji!"
    } 
    
    else if(document.getElementById("random").src === "http://127.0.0.1:5500/PD/atteli/im2.png" 
    && document.getElementById("cilveks").src === "http://127.0.0.1:5500/PD/atteli/im0.png"
    || document.getElementById("random").src === "http://127.0.0.1:5500/PD/atteli/im1.png"         //gadījumi kad cilveks zaude
    && document.getElementById("cilveks").src === "http://127.0.0.1:5500/PD/atteli/im2.png"
    || document.getElementById("random").src === "http://127.0.0.1:5500/PD/atteli/im0.png" 
    && document.getElementById("cilveks").src === "http://127.0.0.1:5500/PD/atteli/im1.png"){
        document.getElementById("text").textContent = "Tu zaudēji!"
    }
}
