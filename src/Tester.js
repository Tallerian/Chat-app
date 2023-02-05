import React, {Component} from 'react';
import './styles/Chatroom.css';
import Msg from './Msg';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/analytics';

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

const firestore = firebase.firestore();

function ChatRoom (props) {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });
  

    const username = "Ian Ruvuto";

    return(

        <body>


      <div class = "chatbox">

        <div class = "user_chat_container">
        
          <div class = "container_chat">
          
            <div class = "title_txt">Hello Welcome to my chat box</div>
            <div class = "container_sms">
              <div class="chat_display">
              {messages && messages.map(msg => <Msg key={msg.id} message={msg} />)}
              </div>

              <div class = "chat_text">
                <input type="text" placeholder='Type something...' />
              </div>
              
            </div>
          </div>


          <div class = "container_user">
            <div class = "user">
              <img src = {props.photoURL} alt="" />
              <div class = "user_img"></div>
              <div class = "user_name">{username}</div>
            </div>
          </div>

        </div>

      </div>
    </body>
            
    )
}

export default ChatRoom;