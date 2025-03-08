import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
  

  const firebaseConfig = {
    apiKey: "AIzaSyAto4qTD_QpyXBwf77_DrBWf1mFOS74chA",
    authDomain: "database-c48e9.firebaseapp.com",
    databaseURL: "https://database-c48e9-default-rtdb.firebaseio.com",
    projectId: "database-c48e9",
    storageBucket: "database-c48e9.firebasestorage.app",
    messagingSenderId: "1043413243960",
    appId: "1:1043413243960:web:77ccef0c2663726881eecd",
    measurementId: "G-FDJ8KJQN97"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const database = getDatabase(app);

  const feedbackForm = document.getElementById("feedbackForm");
  feedbackForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const rating = document.getElementById("rating").value;

    push(ref(database, "feedback"), {
        name , email, message , rating
    })
    .then(() => {
        alert("Thank you for your feedback");
    feedbackForm.reset();
    })
    .catch((error) =>{
        alert( "Error Occured! " + error.message);
    });
  });
