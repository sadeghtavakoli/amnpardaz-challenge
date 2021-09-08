import React, { useImperativeHandle, useState } from "react";
import UserServicesHeader from "../user-services-header/user-services-header.component";
import UserServicesList from "../user-services-list/user-services-list.component";
import "./user-services.styles.scss";

const UserServices = ({ showMoreButtonIcon }) => {
  const [isListExpanded, setIsListExpanded] = useState(true);

  const handleExpand = () => {
    console.log(isListExpanded);
    setIsListExpanded((isExpand) => !isExpand);
  };

  return (
    <section className="user-services">
      <UserServicesHeader onExpand={handleExpand} />
      {isListExpanded && (
        <UserServicesList showMoreButtonIcon={showMoreButtonIcon} />
      )}
    </section>
  );
};
export default UserServices;
