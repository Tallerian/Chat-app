import React from "react";
import './App.css';

import ChatRoom from './Chatroom';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDV9IeR2erNXuNJ8tmgfdAhnwMkx7OwVwQ",
  authDomain: "chat-app-f2421.firebaseapp.com",
  projectId: "chat-app-f2421",
  storageBucket: "chat-app-f2421.appspot.com",
  messagingSenderId: "804368419319",
  appId: "1:804368419319:web:f337ee6337ef7f927086f2",
  measurementId: "G-98SP1X9SNZ"
})


{/* ------------ Setting auth for use signing ------------------- */}
const auth = firebase.auth();

function App() {

  {/* ------------ Checking if prev signed ing------------------- */}
  if (localStorage.getItem("user_signed_ian") == null){
    <Login/>
  }

  {/* ------------ Grabbing User's info------------------- */}
  const [user] = useAuthState(auth);
  if(auth.currentUser){
    console.log("saving photo");
    const {photoURL} = auth.currentUser;
    const name = auth.currentUser.displayName;

    console.log(name);
    localStorage.setItem('name_user_ian', name);

    console.log(photoURL);
    localStorage.setItem('photo_user_ian', photoURL);
  }

  const urlPhoto = localStorage.getItem('photo_user_ian');
  const displayname = localStorage.getItem('name_user_ian');

  return (
    <body>
      <section>
      {user ? <ChatRoom a={urlPhoto} auther = {auth} displayName = {displayname}/> : <Login />}
       
      </section>
      
    </body>
  );
}

function Login () {

  const SignInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider)
      localStorage.setItem("user_signed_ian", 'T');

  }

  const SignOut = () =>{
      auth.signOut();
  }

  return(

      <div class = "container_sign_in">
          <div class= "container_button">
              <button onClick={SignInWithGoogle}>Sign-in With Google</button>
          </div>
      </div>
     
          
  )
}


export default App;
