import React, { useState } from "react";
import "./side-bar.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const sideBarItems = [
  {
    id: 0,
    text: "مدیریت پنل",
    className: "option sidebar-header",
    icon: "bars",
  },
  { id: 1, text: "سرور", className: "option", icon: "server" },
  { id: 2, text: "امنیت ابری", className: "option", icon: "poo-storm" },
  { id: 3, text: "فضای ذخیره سازی", className: "option", icon: "warehouse" },
  { id: 4, text: "وی پی ان", className: "option", icon: "shield-virus" },
  { id: 5, text: "پهنای باند", className: "option", icon: "text-width" },
  { id: 6, className: "gap" },
  { id: 7, text: "مالی", className: "option", icon: "money-check" },
  { id: 8, text: "تنظیمات", className: "option", icon: "wrench" },
  { id: 9, text: "اکانت کاربری", className: "option", icon: "user" },
  { id: 10, text: "خروج", className: "option", icon: "door-open" },
];
const SideBar = () => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <nav className="side-bar">
      {sideBarItems.map(({ id, text, className, icon }) => (
        <div
          key={id}
          className={`${className}  ${selectedId === id ? "selected" : ""}`}
          onClick={() => {
            if (text) setSelectedId(id);
          }}
        >
          <p>{text}</p>
          <FontAwesomeIcon icon={["fas", icon]} className="fontawsome-icon" />
        </div>
      ))}
    </nav>
  );
};
export default SideBar;
