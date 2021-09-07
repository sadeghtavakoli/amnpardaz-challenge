import React, { useState } from "react";
import "./side-bar.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory, useLocation } from "react-router";
const sideBarItems = [
  {
    id: 0,
    text: "مدیریت پنل",
    className: "option sidebar-header",
    icon: "bars",
    routeName: "/panel",
  },
  {
    id: 1,
    text: "سرور",
    className: "option",
    icon: "server",
    routeName: "/server-detail",
  },
  {
    id: 2,
    text: "امنیت ابری",
    className: "option",
    icon: "poo-storm",
    routeName: "/build-server",
  },
  { id: 3, text: "فضای ذخیره سازی", className: "option", icon: "warehouse" },
  { id: 4, text: "وی پی ان", className: "option", icon: "shield-virus" },
  { id: 5, text: "پهنای باند", className: "option", icon: "text-width" },
  { id: 6, className: "seprator" },
  { id: 7, text: "مالی", className: "option", icon: "money-check" },
  { id: 8, text: "تنظیمات", className: "option", icon: "wrench" },
  { id: 9, text: "اکانت کاربری", className: "option", icon: "user" },
  { id: 10, text: "خروج", className: "option", icon: "door-open" },
];
const SideBar = () => {
  const history = useHistory();
  const { pathname } = useLocation();
  return (
    <nav className="side-bar">
      {sideBarItems.map(({ id, text, className, icon, routeName }) => {
        if (className === "seprator") return <hr className="seprator" />;
        return (
          <div
            key={id}
            className={`${className}  ${
              pathname === routeName ? "selected" : ""
            }`}
            onClick={() => {
              if (routeName) {
                history.push(routeName);
              }
            }}
          >
            <p>{text}</p>
            <FontAwesomeIcon icon={["fas", icon]} className="fontawsome-icon" />
          </div>
        );
      })}
    </nav>
  );
};
export default SideBar;
