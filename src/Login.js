import React, {Component} from 'react';
import { useSignInWithGithub } from 'react-firebase-hooks/auth';
import './styles/Login.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';


firebase.initializeApp({
  apiKey: "AIzaSyDV9IeR2erNXuNJ8tmgfdAhnwMkx7OwVwQ",
  authDomain: "chat-app-f2421.firebaseapp.com",
  projectId: "chat-app-f2421",
  storageBucket: "chat-app-f2421.appspot.com",
  messagingSenderId: "804368419319",
  appId: "1:804368419319:web:f337ee6337ef7f927086f2",
  measurementId: "G-98SP1X9SNZ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function Login () {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider)
    }

    return(

        <div class = "container_sign_in">
            <div class= "container_button">
                <button onClick={SignInWithGoogle}>Sign-in With Google</button>
            </div>
        </div>
       
            
    )
}

export default Login;