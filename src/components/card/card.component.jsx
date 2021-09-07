import React from "react";
import "./card.styles.scss";
const Card = ({ title, children, cornerRound = false, className }) => {
  return (
    <article className={`card ${cornerRound ? "corner-rounded" : ""}`}>
      <div className="card-header">
        <h2 className="card-heading">{title}</h2>
        <hr className="seprator" />
      </div>
      <div className={`card-container ${className}`}>{children}</div>
    </article>
  );
};
export default Card;
