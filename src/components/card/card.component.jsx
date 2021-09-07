import React from "react";
import "./card.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Card = ({
  title,
  children,
  cornerRound = false,
  containerClass = "",
  className = "",
  onClick,
  btnToRight = false,
}) => {
  return (
    <article
      className={`card ${containerClass} ${
        cornerRound ? "corner-rounded" : ""
      }`}
    >
      <div className={`card-header ${btnToRight ? "more-btn--right" : ""}`}>
        {onClick && (
          <FontAwesomeIcon
            icon={["fas", "ellipsis-h"]}
            className="more-btn "
            onClick={onClick}
          />
        )}

        <div className="card-heading">
          <h2 className="card-title">{title}</h2>
          <hr className="seprator" />
        </div>
      </div>
      <div className={`card-container ${className}`}>{children}</div>
    </article>
  );
};
export default Card;
