const title = document.querySelector("div.ddiv:first-child h1");

function handleTitleClick() {
    console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);
