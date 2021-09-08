import React, { useState } from "react";
import "./select-os.styles.scss";
import Card from "../card/card.component";

import { ReactComponent as LinuxLogo } from "../../assets/images/linux.svg";
import { ReactComponent as WindowsLogo } from "../../assets/images/windows.svg";
import SelectOSItem from "../select-os-item/select-os-item.component";

const SelectOS = () => {
  const [selectedOsID, setSelectedOsID] = useState(undefined);
  const osList = [
    { id: 0, name: "LinuxOS", Logo: LinuxLogo },
    { id: 1, name: "Windows", Logo: WindowsLogo },
    { id: 2, name: "MamadOS", Logo: LinuxLogo },
  ];
  return (
    <Card
      title="انتخاب سیستم عامل"
      containerClass="select-os"
      cornerRound
      onClick={() => alert("سیستم عامل دیگری برای نشان دادن وجود ندارد")}
      btnToRight
    >
      {osList.map(({ id, ...otherOSProps }) => (
        <SelectOSItem
          key={"" + id}
          onSelect={() => setSelectedOsID(id)}
          onClick={() => alert("در دست احداث")}
          isSelected={selectedOsID === id}
          {...otherOSProps}
        />
      ))}
    </Card>
  );
};
export default SelectOS;
