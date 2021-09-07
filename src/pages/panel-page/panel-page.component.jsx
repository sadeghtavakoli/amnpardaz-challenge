import React from "react";
import ButtonMore from "../../components/button-more/button-more.component";
import ButtonPlus from "../../components/button-plus/button-plus.component";
import Card from "../../components/card/card.component";
import Message from "../../components/message/message.component";
import MessagesList from "../../components/messages-list/messages-list.component";
import ServicesExtenstion from "../../components/services-extension/services-extension.component";
import "./panel-page.styles.scss";
const PanelPage = () => {
  return (
    <section className="panel">
      <Card title="مصرف ماهیانه سرویس ها">
        <Message message="شما تا به حال تیکتی ثبت نکرده اید" />
      </Card>
      <MessagesList />
      <ServicesExtenstion />
      <Card>
        <ButtonPlus text="افزایش موجودی" />
        <ButtonPlus text="ایجاد تیکت" />
      </Card>
      <Card />
    </section>
  );
};
export default PanelPage;
