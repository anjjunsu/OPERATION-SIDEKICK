const MAX_USERNAME_LENGTH = 15;

const signInForm = document.getElementsById("sign-in-form");
const signInInput = signInForm.querySelector("input");
const signInButton = signInForm.querySelector("button");

function onSignInClick() {
    const username = signInInput.value;
    
};

signInButton.addEventListner("click", onSignInClick);
