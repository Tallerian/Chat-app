import logo from './logo.svg';
import './App.css';

function App() {

  var username = "Ian Ruvuto";

  return (
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
  );
}

export default App;
