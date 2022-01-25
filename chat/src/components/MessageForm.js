import { useState } from "react";
import { SendOutlined, PictureOutlined } from "@ant-design/icons";
// imports for icons we will use for the picture upload button
import { sendMessage, isTyping } from "react-chat-engine";

//This is the page for the input field of your message with text and image
const MessageForm = (props) => {
  const [value, setValue] = useState("");
  const { chatId, creds } = props;

  const handleChange = (event) => {
    setValue(event.target.value);

    isTyping(props, chatId);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
      //If the message box has more than 0 characters it should send the message
    }

    setValue("");
  };

  const handleUpload = (event) => {
    sendMessage(creds, chatId, { files: event.target.files, text: "" });
    //this destructures the upload for the file and will let you upload like the event.target for input fields
  };

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <input
        className="message-input"
        placeholder="Send a message..."
        value={value}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <label htmlFor="upload-button">
        <span className="image-button">
          <PictureOutlined className="picture-icon" />
        </span>
      </label>
      <input
        type="file"
        multiple={false}
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleUpload.bind(this)}
      />
      <button type="submit" className="send-button">
        <SendOutlined className="send-icon" />
        {/* Sending button that is being imported from the @ant-design/icons */}
      </button>
    </form>
  );
};

export default MessageForm;
