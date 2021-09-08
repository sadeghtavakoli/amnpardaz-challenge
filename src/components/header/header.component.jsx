import React from "react";
import "./header.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <Link className="option uniqe-option" to="/">
        Cloud Vps
        <FontAwesomeIcon
          icon={["fas", "chevron-left"]}
          className="fontawsome-icon"
        />
      </Link>
      <Link className="option" to="/">
        CDN
      </Link>
      <Link className="option" to="/">
        FIREWALL
      </Link>
      <Link className="option" to="/">
        SERVER LOGS
      </Link>
      <Link className="option" to="/">
        APPLICATION USERS
      </Link>
      <Link className="option" to="/">
        CRONJOBS
      </Link>
      <Link className="option" to="/">
        SERVICES
      </Link>
      <Link className="option" to="/">
        SETTINGS
      </Link>
      <Link className="option" to="/">
        ALERTS
      </Link>
    </header>
  );
};
export default Header;
