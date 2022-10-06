const ONE_SEC = 1000; 
const clock = document.querySelector("h2#clock");

function getClock() {
    // Let's not use Javascript Date object
    // Use Intl instead
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}` ;
}

getClock();
setInterval(getClock, ONE_SEC);

