import React from "react";
import "./messages-list.styles.scss";
import Card from "../card/card.component";
import Message from "../message/message.component";
const MessagesList = () => {
  return (
    <Card title="پیام ها" containerClass="messages-list">
      <Message message="حساب شما منفی است" subMessage="25مرداد1399" />
    </Card>
  );
};
export default MessagesList;
