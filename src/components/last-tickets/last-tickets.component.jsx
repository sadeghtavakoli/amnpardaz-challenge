import React from "react";
import "./last-tickets.styles.scss";
import Card from "../card/card.component";
import Message from "../message/message.component";
import ButtonPlus from "../button-plus/button-plus.component";

const LastTickets = () => {
  return (
    <Card title="آخرین تیکت ها" containerClass="last-tickets">
      <Message message="شما تا به حال تیکتی ثبت نکرده اید" />
      <ButtonPlus text="ایجاد تیکت" />
    </Card>
  );
};
export default LastTickets;
