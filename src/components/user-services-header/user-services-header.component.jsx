import React from "react";
import "./user-services-header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UserServicesHeader = ({ onExpand }) => {
  return (
    <section className="user-services-header">
      <div className="first-row">
        <div className="your-sevices">
          <h1>سرویس های شما</h1>
          <p>کل سرویس ها : 8</p>
        </div>
        <FontAwesomeIcon
          icon={["fas", "expand-alt"]}
          className="fontawsome-icon"
          onClick={onExpand}
        />
      </div>
      <div className="second-row">
        <p className="active-services">
          سرویس های فعال <span>3</span>
        </p>
        <FontAwesomeIcon
          icon={["fas", "ellipsis-v"]}
          className="fontawsome-icon"
        />
      </div>
      <hr />
    </section>
  );
};
export default UserServicesHeader;
