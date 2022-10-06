const clock = document.querySelector("h2#clock");

function getClock() {
    // Let's not use Javascript Date object
    const date = new Date();
    console.log(date);
    clock.innerText = date;
}

getClock();

