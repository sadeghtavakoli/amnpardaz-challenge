import React from "react";
import "./build-server-page.styles.scss";
import Card from "../../components/card/card.component";
import UserServices from "../../components/user-services/user-services.component";
import SelectOS from "../../components/select-os/select-os.component";
import SelectResource from "../../components/select-resource/select-resource.component";
import DataCenter from "../../components/data-center/data-center.component";

const BuildServerPage = () => {
  return (
    <section className="build-server">
      <h1 className="title">ساخت سرویس:</h1>
      <UserServices />
      <SelectOS />
      <DataCenter />
      <SelectResource />
    </section>
  );
};
export default BuildServerPage;
