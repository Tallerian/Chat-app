import React, {Component} from 'react';
import './styles/Msg.css';

function Msg (props){

    const { text, uid, photoURL } = props.message

    return(
        <div class="msg_container">

            <div class ="msg_avatar"></div>

            <div class = "msg_text_container"><p>{text}</p></div>

        </div>
    )
}
export default Msg;