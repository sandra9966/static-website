const firebaseConfig = {
    apiKey: "AIzaSyDedt43vjmnU--eKcTOBpu3oMk0aJVjsUM",
    authDomain: "static-website-2950f.firebaseapp.com",
    databaseURL: "https://static-website-2950f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "static-website-2950f",
    storageBucket: "static-website-2950f.appspot.com",
    messagingSenderId: "806455023576",
    appId: "1:806455023576:web:ddb0319959f810a560c4ad",
    measurementId: "G-WHGTFFKYWS"
  };

  
  firebase.initializeApp(firebaseConfig);


$(document).ready(function()
{
  var database = firebase.database();
  var Led1Status;
  
  database.ref().on("value", function(snap){
    Led1Status = snap.val().Led1Status;
    if (Led1Status == "1") {
        
        document.getElementById("unact").style.display = "none";
        document.getElementById("act").style.display = "block";
    }
    else
    {
        document.getElementById("unact").style.display = "block";
        document.getElementById("act").style.display = "none";
    }
    });
  
  $(".toggle-btn").click(function() {
    var firebaseRef = firebase.database().ref().child("Led1Status");
    
    if (Led1Status == "1")
    {
        firebaseRef.set("0");
        Led1Status = "0";
    }
    else
    {
        firebaseRef.set("1");
        Led1Status = "1";
    }
   })
});
  
 