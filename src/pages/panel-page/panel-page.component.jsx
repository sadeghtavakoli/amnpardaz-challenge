import React from "react";
import ButtonPlus from "../../components/button-plus/button-plus.component";
import Card from "../../components/card/card.component";
import LastTickets from "../../components/last-tickets/last-tickets.component";
import Message from "../../components/message/message.component";
import MessagesList from "../../components/messages-list/messages-list.component";
import MonthlyUsage from "../../components/monthly-usage/monthly-usage.component";
import ServicesExtenstion from "../../components/services-extension/services-extension.component";
import Wallet from "../../components/wallet/wallet.component";
import "./panel-page.styles.scss";
const PanelPage = () => {
  return (
    <section className="panel">
      <MonthlyUsage />
      <ServicesExtenstion />
      <MessagesList />
      <Wallet />
      <LastTickets />
    </section>
  );
};
export default PanelPage;
