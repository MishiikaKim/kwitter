
const firebaseConfig = {
      apiKey: "AIzaSyA9NovYN5kRkQW5EiaNfeEZQmbt9RsfcWo",
      authDomain: "kwitter-f5e26.firebaseapp.com",
      databaseURL: "https://kwitter-f5e26-default-rtdb.firebaseio.com",
      projectId: "kwitter-f5e26",
      storageBucket: "kwitter-f5e26.appspot.com",
      messagingSenderId: "276551866101",
      appId: "1:276551866101:web:526cbacd7e8745ba9b17bc",
      measurementId: "G-G6K6LT127X"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome- " + user_name+"!"; 
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" +Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location="kwitter_page.html"; 
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}