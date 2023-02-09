const cButton = document.getElementById("c")
const cAudio = new Audio ("clap.wav")
cButton.addEventListener("click",() =>{
    cAudio.play();
});
const sButton = document.getElementById("s")
const sAudio = new Audio ("snare.wav")
sButton.addEventListener("click", () => {
    sAudio.play();
});
const oButton = document.getElementById("o")
const oAudio = new Audio ("openhat.wav")
oButton.addEventListener("click", () => {
    oAudio.play();
});
const bButton = document.getElementById("b")
const bAudio = new Audio ("boom.wav")
bButton.addEventListener("click", () => {
    bAudio.play();
});
const hButton = document.getElementById("h")
const hAudio = new Audio ("hihat.wav")
hButton.addEventListener("click", () => {
    hAudio.play();
});
const kButton = document.getElementById("k")
const kAudio = new Audio ("kick.wav")
kButton.addEventListener("click", () => {
    kAudio.play();
});
const rButton = document.getElementById("r")
const rAudio = new Audio ("ride.wav")
rButton.addEventListener("click", () => {
    rAudio.play();
});
const tButton = document.getElementById("t")
const tAudio = new Audio ("tink.wav")
tButton.addEventListener("click", () => {
    tAudio.play();
});
const aButton = document.getElementById("a")
const aAudio = new Audio ("tom.wav")
aButton.addEventListener("click", () => {
    aAudio.play();
});

window.addEventListener("keydown", function(event) {
    var key = event.keyCode;
    if(key === 67) cAudio.play(); else
    if (key === 83) sAudio.play(); else
    if (key === 79) oAudio.play(); else
    if (key === 66) bAudio.play(); else
    if (key === 72) hAudio.play(); else
    if (key === 75) kAudio.play(); else
    if (key === 82) rAudio.play(); else
    if (key === 84) tAudio.play(); else
    if (key === 65) aAudio.play(); 
})