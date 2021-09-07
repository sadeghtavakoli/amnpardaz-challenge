import React from "react";
import ButtonMore from "../../components/button-more/button-more.component";
import ButtonPlus from "../../components/button-plus/button-plus.component";
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
      <Card title="پیام ها">
        <ButtonMore />
      </Card>
      <Card>
        <ButtonPlus text="افزایش موجودی" />
        <ButtonPlus text="ایجاد تیکت" />
      </Card>
      <Card />
      <Card />
    </section>
  );
};
export default PanelPage;
