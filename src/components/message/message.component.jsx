import React from "react";
import "./message.styles.scss";
const Message = ({ message, subMessage, className }) => {
  return (
    <div
      className={`message  ${
        subMessage ? "detailed-message" : ""
      }  ${className} `}
    >
      <p>{message}</p>
      <p>{subMessage}</p>
    </div>
  );
};
export default Message;
