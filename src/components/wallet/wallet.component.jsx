import React from "react";
import "./wallet.styles.scss";
import Card from "../card/card.component";
import Message from "../message/message.component";
import ButtonPlus from "../button-plus/button-plus.component";

const Wallet = () => {
  return (
    <Card
      title="کیف پول"
      containerClass="wallet"
      onClick={() => alert("چیزی برای نشان دادن وجود ندارد")}
    >
      <div>
        <Message message="هزینه مصرف این ماه:" subMessage="1203000 ریال" />
        <Message message="کیف پول" subMessage="9,850,000 هزار ریال" />
      </div>
      <ButtonPlus text="ایجاد تیکت" />
    </Card>
  );
};
export default Wallet;
