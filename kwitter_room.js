const firebaseConfig = {
      apiKey: "AIzaSyAI6U5Ty7tb0GHmvrjBigToAL-lplTv8Zw",
      authDomain: "letschat-25978.firebaseapp.com",
      databaseURL: "https://letschat-25978-default-rtdb.firebaseio.com",
      projectId: "letschat-25978",
      storageBucket: "letschat-25978.appspot.com",
      messagingSenderId: "216076744379",
      appId: "1:216076744379:web:ef0824f625f05f8b16db9e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   user_name= localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="Welcome"+User_name+"!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" +Room_names + "onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr></hr>";
      document.getElementById("output").innerHTML+= row;
            //End code
            });});}
      getData();
      function addRoom(){
      room_name = document.getElementById("room_name").value;
      
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
      }
      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "kwitter_page.html";
      }

      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html"
      }