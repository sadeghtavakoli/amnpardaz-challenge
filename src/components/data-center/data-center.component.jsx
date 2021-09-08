import React, { useState } from "react";
import "./data-center.styles.scss";
import Card from "../card/card.component";
import ButtonMore from "../button-more/button-more.component";
import { ReactComponent as IranLogo } from "../../assets/images/iran.svg";
import { ReactComponent as GermanyLogo } from "../../assets/images/germany.svg";
import DataCenterItem from "../data-center-item/data-center-item.component";

const dataCenters = [
  { id: 0, name: "آسیاتک", Logo: IranLogo },
  { id: 1, name: "پارس آنلاین", Logo: IranLogo },
  { id: 2, name: "آلمان", Logo: GermanyLogo },
];
const servers = [
  { id: 0, dataCenterID: 0 },
  { id: 1, dataCenterID: 1 },
  { id: 2, dataCenterID: 2 },
];
const DataCenter = () => {
  const [selectedServerID, setSelectedServerID] = useState(undefined);
  return (
    <Card title="دیتا سنتر" containerClass="data-center" cornerRound>
      {servers.map(({ id, dataCenterID }) => (
        <DataCenterItem
          key={id + ""}
          dataCenter={dataCenters[dataCenterID]}
          onClick={() => setSelectedServerID(id)}
          isSelected={selectedServerID === id}
        />
      ))}
      <ButtonMore />
    </Card>
  );
};
export default DataCenter;
