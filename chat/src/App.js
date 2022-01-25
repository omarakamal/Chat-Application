import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const projectID = "4b8583ee-3ba6-4b0d-a8ca-446ce1874e7c";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;
  //If there is no username in the localstorage and youre not logged in will render the LoginForm component
  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() =>
        new Audio(
          "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        ).play()
      }
      // Sound for the new message being recieved
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
