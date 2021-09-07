import React from "react";
import Card from "../../components/card/card.component";
import Message from "../../components/message/message.component";
import "./panel-page.styles.scss";
const PanelPage = () => {
  return (
    <section className="panel">
      <Card title="مصرف ماهیانه سرویس ها">
        <Message message="شما تا به حال تیکتی ثبت نکرده اید" />
      </Card>
      <Card />
      <Card>
        <Message
          message="شما تا به حال تیکتی ثبت نکرده اید"
          subMessage="25مرداد1399"
        />
      </Card>
      <Card />
      <Card />
      <Card />
    </section>
  );
};
export default PanelPage;
