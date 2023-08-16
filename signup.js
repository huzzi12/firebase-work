import { auth, createUserWithEmailAndPassword } from "./firebaseConfig.js";



const email = document.querySelector("#email");
const password = document.querySelector("#password");
const number = document.querySelector("#number");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const signupBtn = document.querySelector("#signupBtn");
signupBtn.addEventListener("click", signupHandler)



async function signupHandler() {
    console.log("Button is workin!")
    console.log(email.value)
    console.log(password.value)
    console.log(number.value)
    console.log(firstName.value)
    console.log(lastName.value)
    try {
     const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
     console.log(userCredential)
 
}
     catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    }
}
