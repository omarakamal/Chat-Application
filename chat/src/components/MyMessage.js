const MyMessage = ({ message }) => {
  // passing a prop to our MyMessage compoenent
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img //this is what displays our profile image
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: "right" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3B2A50",
      }}
    >
      {/* This is where we style my bubble for the text field */}
      {message.text}
    </div>
  );
};

export default MyMessage;
