import React from "react";

import "./SideBar.scss"

interface NavItemProps {
  navName: string;
  navImg: string;
}

const NavItem : React.FC<NavItemProps> = ({navName, navImg}) => {
  return (
    <div className="navItem__container">
      <img
        alt=""
        src={navImg}
        height="20"
        width="20"
      />

      <p className="navItem__container--text">{navName}</p>
    </div>
  )
}

export default NavItem