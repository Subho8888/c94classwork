// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAClOtDewt4wZ8GQL0Ut3qg0ZLzvd_Jhsw",
  authDomain: "kwitter-3f37e.firebaseapp.com",
  databaseURL: "https://kwitter-3f37e-default-rtdb.firebaseio.com",
  projectId: "kwitter-3f37e",
  storageBucket: "kwitter-3f37e.appspot.com",
  messagingSenderId: "493950627811",
  appId: "1:493950627811:web:95d7c2c1e2b026ec003ad6"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);

  function addUser(){

    user_name=document.getElementById("username").value;
    firebase.database().ref("/").child(user_name).update({
   purpose:"adding user"
    });
  }