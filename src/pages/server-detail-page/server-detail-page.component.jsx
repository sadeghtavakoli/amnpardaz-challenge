import React from "react";
import "./server-detail-page.styles.scss";
import UserServices from "../../components/user-services/user-services.component";
import SelectOS from "../../components/select-os/select-os.component";
import SelectResource from "../../components/select-resource/select-resource.component";
import DataCenter from "../../components/data-center/data-center.component";
import Card from "../../components/card/card.component";
import ServerDetailHeader from "../../components/server-detail-header/server-detail-header";

const serverInfo = {
  name: "Iran-cloud server",
  IP: "185.105.237.55",
  isActive: true,
  statics: {
    RAM: {
      total: 8,
      used: 3,
      unit: "گیگ",
    },
    STORAGE: {
      total: 8,
      used: 3,
      unit: "گیگ",
    },
    USAGE: {
      total: 300,
      used: 40,
      unit: "روز",
    },
  },
};
const ServerDetail = () => {
  const { name, isActive, IP } = serverInfo;

  return (
    <section className="server-details-page">
      <ServerDetailHeader
        serverName={name}
        serverIP={IP}
        isServerActive={isActive}
      />
      <UserServices showMoreButtonIcon />
      <Card className="server-statics" />
      <Card className="server-chart" />
    </section>
  );
};
export default ServerDetail;
