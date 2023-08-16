
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAnydnmJkPO_T50HE2WJYmyD-VD6Ts4LEw",
    authDomain: "fir-auth-cb0bc.firebaseapp.com",
    projectId: "fir-auth-cb0bc",
    storageBucket: "fir-auth-cb0bc.appspot.com",
    messagingSenderId: "394256518920",
    appId: "1:394256518920:web:55ee95bc822cbd4bda26bd"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);



  export {auth, createUserWithEmailAndPassword}
