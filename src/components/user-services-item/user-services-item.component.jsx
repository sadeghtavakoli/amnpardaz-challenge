import React from "react";
import "./user-services-item.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserServicesItem = ({
  name,
  desc,
  isSelected = false,
  onClick,
  showMoreButtonIcon,
}) => {
  return (
    <section
      className={`user-services-item ${
        isSelected ? "selected-user-services-item" : ""
      }`}
      onClick={onClick}
    >
      <div className="item-details">
        <FontAwesomeIcon
          icon={["fas", "yen-sign"]}
          className="fontawsome-icon"
        />
        <div>
          <h3 className="item-name">{name}</h3>
          <p className="item-desc">{desc}</p>
        </div>
      </div>
      <div className="options">
        <FontAwesomeIcon
          icon={["fas", "envelope"]}
          className="fontawsome-icon"
        />
        <FontAwesomeIcon icon={["fas", "upload"]} className="fontawsome-icon" />
        <FontAwesomeIcon
          icon={["fas", "shield-alt"]}
          className="fontawsome-icon"
        />
      </div>
      {showMoreButtonIcon && (
        <FontAwesomeIcon
          icon={["fas", "ellipsis-h"]}
          className="fontawsome-icon btn-more"
        />
      )}
    </section>
  );
};
export default UserServicesItem;
