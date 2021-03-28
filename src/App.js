import React, { useEffect, useState } from "react";
// routes
import { BrowserRouter as Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from 'routes/Routes';
import socketIOClient from "socket.io-client";
import { BASE_URL } from "./config/";
import { MyChatWidget } from "./components/MyChatWidget/MyChatWidget";
import Sound from 'react-sound';
import ContextApiProvider from "./ContextApi/contextApi";

const browserHistory = createBrowserHistory();
function App() {
  const socket = socketIOClient(BASE_URL);
  const [newMessage, setNewMessage] = useState("");
  const [play, setPlay] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("USERID"))
      localStorage.setItem("USERID", "USER" + new Date().getTime());
    socket.emit('join', { userid: localStorage.getItem("USERID") });
    socket.on("chats", (data) => {
      setPlay(true)
      setNewMessage(data);
    });
    socket.on("notification", (data) => {
      console.log(data)
      setPlay(true)
    });
  }, []);
  return (
    <Router history={browserHistory}>
      <ContextApiProvider>
        <Routes />
        <MyChatWidget newMessage={newMessage} />
        <Sound
          url={require("./components/MyChatWidget/swiftly.mp3")}
          playStatus={play ? Sound.status.PLAYING : Sound.status.STOPPED}
          onFinishedPlaying={() => setPlay(false)}
        />
      </ContextApiProvider>
    </Router>
  );
}

export default App;
