// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgOMkXgy7HUMODY2G64HRfiLqklrdVBQc",
  authDomain: "microlearning-platform-8763e.firebaseapp.com",
  projectId: "microlearning-platform-8763e",
  storageBucket: "microlearning-platform-8763e.firebasestorage.app",
  messagingSenderId: "930704399709",
  appId: "1:930704399709:web:0a083f1c95dd4300741cb4",
  measurementId: "G-9YFN4EW1LJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



/* ================= REGISTER ================= */

window.register = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(!email || !password){
alert("Please enter email and password");
return;
}

createUserWithEmailAndPassword(auth,email,password)

.then(() => {

alert("Registration successful. Please login.");
window.location.href = "index.html";

})

.catch((error) => {

if(error.code === "auth/email-already-in-use"){
alert("This email is already registered.");
}

else if(error.code === "auth/weak-password"){
alert("Password must be at least 6 characters.");
}

else{
alert(error.message);
}

});

};



/* ================= LOGIN ================= */

window.login = function(){

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

if(!email || !password){
alert("Please enter email and password");
return;
}

signInWithEmailAndPassword(auth,email,password)

.then(() => {

alert("Login successful");
window.location.href = "dashboard.html";

})

.catch((error) => {

if(error.code === "auth/user-not-found"){
alert("Account not registered. Please register first.");
}

else if(error.code === "auth/wrong-password"){
alert("Incorrect password.");
}

else{
alert(error.message);
}

});

};



/* ================= RESET PASSWORD ================= */

window.resetPassword = function(){

const email = document.getElementById("email").value;

if(!email){
alert("Please enter your email");
return;
}

sendPasswordResetEmail(auth,email)

.then(() => {

alert("Password reset link sent to your email.");

})

.catch((error) => {

if(error.code === "auth/user-not-found"){
alert("This email is not registered.");
}
else{
alert(error.message);
}

});

};