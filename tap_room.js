
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBSi99oCYLnOTGTdMl9UkESQecQjXK-hdE",
      authDomain: "tapchat-ac61e.firebaseapp.com",
      databaseURL: "https://tapchat-ac61e-default-rtdb.firebaseio.com",
      projectId: "tapchat-ac61e",
      storageBucket: "tapchat-ac61e.appspot.com",
      messagingSenderId: "823166370567",
      appId: "1:823166370567:web:4424c9e875319e2d2f3ba2"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
