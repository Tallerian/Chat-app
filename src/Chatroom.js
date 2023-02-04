import { Firestore } from 'firebase/firestore';
import React, {Component} from 'react';
import './styles/Chatroom.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function ChatRoom () {

    const messageRef = Firestore.collection('messages');
    const query = messageRef.orderBy('createdAt').limit(25);

    const[messages] = useCollectionData(query, {idField: 'id'});

    const username = "Ian Ruvuto";

    return(

        <body>


      <div class = "chatbox">

        <div class = "user_chat_container">
        
          <div class = "container_chat">
          
            <div class = "title_txt">Hello Welcome to my chat box</div>
            <div class = "container_sms">
              <div class="chat_display"></div>

              <div class = "chat_text">
                <input type="text" placeholder='Type something...' />
              </div>
              
            </div>
          </div>


          <div class = "container_user">
            <div class = "user">
              <div id = "user_img"></div>
              <div class = "user_name">{username}</div>
            </div>
          </div>

        </div>

      </div>
    </body>
            
    )
}

export default ChatRoom;