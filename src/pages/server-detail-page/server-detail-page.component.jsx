import React from "react";
import "./server-detail-page.styles.scss";
import UserServices from "../../components/user-services/user-services.component";
import Card from "../../components/card/card.component";
import ServerDetailHeader from "../../components/server-detail-header/server-detail-header";
import ServerStatics from "../../components/server-statics/server-statics.component";

const serverInfo = {
  name: "Iran-cloud server",
  IP: "185.105.237.55",
  isActive: true,
  statics: [
    {
      id: 0,
      name: "رم",
      icon: "laptop-code",
      color: "#19b69b",
      trailColor: "#d4fff8",
      total: 8,
      used: 3,
      unit: "گیگ",
    },
    {
      id: 1,
      name: "حافظه",
      icon: "memory",
      color: "#ffbc1f",
      trailColor: "#fff5cc",
      total: 100,
      used: 70,
      unit: "گیگ",
    },
    {
      id: 2,
      name: "کارکرد سرور",
      icon: "fan",
      color: "#02a0fc",
      trailColor: "#ccf8fe",
      total: 300,
      used: 90,
      unit: "روز",
    },
  ],
};
const ServerDetail = () => {
  const { name, isActive, IP, statics } = serverInfo;

  return (
    <section className="server-details-page">
      <ServerDetailHeader
        serverName={name}
        serverIP={IP}
        isServerActive={isActive}
      />
      <UserServices showMoreButtonIcon />

      <ServerStatics statics={statics} />
      <Card className="server-chart" />
    </section>
  );
};
export default ServerDetail;
