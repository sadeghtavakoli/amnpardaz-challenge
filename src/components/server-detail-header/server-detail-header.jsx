import React from "react";
import "./server-detail-header.styles.scss";
const ServerDetailHeader = ({ serverName, serverIP, isServerActive }) => {
  return (
    <header
      className={`server-details-header  ${isServerActive ? "active" : ""}`}
    >
      <h1 className="title">
        <span></span>
        {serverName}
      </h1>
      <p className="ip">
        {serverIP} <span>{isServerActive ? "فعال" : "غیر فعال"}</span>
      </p>
    </header>
  );
};
export default ServerDetailHeader;
