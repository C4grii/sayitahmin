var haksayisi = 0;

var rastgelesayi = 0;

var tahminet = document.getElementById("tahminet");

var yenioyun = document.getElementById("yenioyun");

var goster = document.getElementById("goster");

var sonuc = document.getElementById("sonuc");

yenioyun.onclick = yeni;

tahminet.onclick = tahmin;

"use strict";

function randomInt(min,max) {

return Math.floor(Math.random() * (max-min + 1)) + min;

}

function yeni() {

rastgelesayi = randomInt(0, 99);

haksayisi = 10;

sonuc.innerHTML = "";

goster.value = "";

tahminet.disabled = false;

yenioyun.disabled = true;

}

"use strict";

function tahmin() {

if (haksayisi == 0) return;

var girilensayi = parseInt(goster.value)

var message = "";

if (isNaN(girilensayi)) return;

if (rastgelesayi > girilensayi) {

message = "Daha büyük bir değer deneyin."; 
    
} 

else if (girilensayi > rastgelesayi) {
 
message = "Daha küçük bir değer deneyin.";

}

else {

message = "Tebrikler, sayıyı bildiniz !!";

tahminet.disabled = true;

yenioyun.disabled = false;    

}

haksayisi--;

sonuc.innerHTML = message 

sonuc.innerHTML += "<br />" 

sonuc.innerHTML += "Kalan hak sayısı: " + haksayisi

if (haksayisi == 0) {

tahminet.disabled = true;

yenioyun.disabled = false;

}

}