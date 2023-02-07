import React, {Component, useState} from 'react';
import './styles/Msg.css';

function Msg (props){

    const { text, uid, photoURL } = props.message;
    console.log(photoURL)

    let sender = false;
 
    if (uid === props.auther.uid){
        sender = true;
    }

    return(
        
        <div className='msg_scroll'>

        <div className = {`msg_container ${sender ? "msg_container-active":""}`}>

            <div class ="msg_avatar">
                <img src={photoURL} alt="" className='avatar_img_src' />
            </div>
            
            <div className ="msg_text_container"><p>{text}</p></div>

        </div>

        </div>
    )
}
export default Msg;