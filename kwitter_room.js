var firebaseConfig = {
    apiKey: "AIzaSyCFg7KvZu4JfOu2BPaMPWwkblkxPeBAyEU",
    authDomain: "kwitter-5c775.firebaseapp.com",
    databaseURL: "https://kwitter-5c775-default-rtdb.firebaseio.com",
    projectId: "kwitter-5c775",
    storageBucket: "kwitter-5c775.appspot.com",
    messagingSenderId: "1008149894037",
    appId: "1:1008149894037:web:d186b82d9830d966b31c9c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name +"!"; 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
        console.log("Room names are :"+Room_names);
        row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
        document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function logout(){

 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";

}

function addroom(){

room_name= document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location= "kwitter_page.html";
}