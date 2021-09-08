import React, { useState } from "react";
import "./user-services-list.styles.scss";
import UserServicesItem from "../user-services-item/user-services-item.component";
import ButtonMore from "../button-more/button-more.component";

const servicesList = [
  { id: 0, name: "اسم سرویس", desc: "asdas" },
  { id: 1, name: "اسم سرویس", desc: "asdas" },
  { id: 2, name: "اسم سرویس", desc: "asdas" },
  { id: 3, name: "اسم سرویس", desc: "asdas" },
  { id: 4, name: "اسم سرویس", desc: "asdas" },
  { id: 5, name: "اسم سرویس", desc: "asdas" },
  { id: 6, name: "اسم سرویس", desc: "asdas" },
  { id: 7, name: "اسم سرویس", desc: "asdas" },
];
const UserServicesList = ({ showMoreButtonIcon }) => {
  const [selectedID, setSelectedID] = useState(-1);
  return (
    <section className="user-services-list">
      {servicesList.map(({ id, name, desc }) => (
        <UserServicesItem
          key={"" + id}
          name={name}
          desc={desc}
          isSelected={id === selectedID}
          onClick={() => setSelectedID(id)}
          showMoreButtonIcon={showMoreButtonIcon}
        />
      ))}

      <ButtonMore />
    </section>
  );
};
export default UserServicesList;
