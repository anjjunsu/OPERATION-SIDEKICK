const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

const signinForm = document.querySelector("#signin-form");
const signinInput = document.querySelector("#signin-form input");
const greeting = document.querySelector("#greeting");
const savedUserName = localStorage.getItem(USERNAME_KEY);


function greet(userName) {
    greeting.innerText = `Hi, ${userName}`;  
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}

function onSigninSubmit(event) {
    event.preventDefault();
    signinForm.classList.add(HIDDEN_CLASSNAME);
    const userName = signinInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    greet(userName);
};


if (savedUserName === null) {
    signinForm.classList.remove(HIDDEN_CLASSNAME); 
    signinForm.addEventListener("submit", onSigninSubmit);
} else {
    greet(savedUserName);
}


