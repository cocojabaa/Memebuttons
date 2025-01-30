"use strict"

let pukAudio = new Audio("./sounds/puk.mp3");
let armaturaAudio = new Audio("./sounds/armatura.mp3");
let getOutAudio = new Audio("./sounds/get out.mp3");
let idiNaAudio = new Audio("./sounds/idi na.mp3");
let naKoleniAudio = new Audio("./sounds/na koleni.mp3");
let rizzAudio = new Audio("./sounds/rizz.mp3");
let snoreAudio = new Audio("./sounds/snore.mp3");
let wrongAudio = new Audio("./sounds/wrong answer.mp3");
let bruhAudio = new Audio("./sounds/bruh.mp3");

let buttonPuk = document.getElementById("puk");
let buttonArmatura = document.getElementById("armatura");
let buttonBruh = document.getElementById("bruh");
let buttongGetOut = document.getElementById("get-out");
let buttonIdiNa = document.getElementById("idi-na");
let buttonNaKoleni = document.getElementById("na-koleni");
let buttonRizz = document.getElementById("rizz");
let buttonSnore = document.getElementById("snore");
let buttonWrong = document.getElementById("wrong");

buttonPuk.addEventListener("click", () => {
    playAudio(pukAudio);
})

buttonArmatura.addEventListener("click", () => {
    playAudio(armaturaAudio);
})

buttonBruh.addEventListener("click", () => {
    playAudio(bruhAudio);
})

buttongGetOut.addEventListener("click", () => {
    playAudio(getOutAudio);
})

buttonIdiNa.addEventListener("click", () => {
    playAudio(idiNaAudio);
})

buttonNaKoleni.addEventListener("click", () => {
    playAudio(naKoleniAudio);
})

buttonRizz.addEventListener("click", () => {
    playAudio(rizzAudio);
})

buttonSnore.addEventListener("click", () => {
    playAudio(snoreAudio);
})

buttonWrong.addEventListener("click", () => {
    playAudio(wrongAudio);
})

function playAudio(audio) {
    if (!audio.paused) {
        let newAudio = audio.cloneNode();
        newAudio.play();
    }
    else audio.play();
}