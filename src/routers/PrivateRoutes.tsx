import React, {useState} from "react";

import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

import useWindowWidth from "../hooks/useWindowWidth"

import "./PrivateRoute.scss";


const PrivateRoute = ({ SomeComponent }: { SomeComponent: React.FC }) => {
  const [openSideBar, setOpenSideBar] = useState(false);
	const [startToggle, setStartToggle] = useState(false);

  let windowWidth: number = useWindowWidth();

  return (
    <div className="privateRoute__container">
      <div className="privateRoute__header">
        <Header 
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar} 
        />
      </div>

      <div className={windowWidth > 800 ? "privateRoute__sidebar" : openSideBar ?
        "openSideBar" : startToggle ? "closeSideBar" : "initialClose"
      }>
        <SideBar
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar} 
          setStartToggle={setStartToggle} 
        />
      </div>

      <div className="privateRoute__someComponent"><SomeComponent /></div>
    </div>
  )
};

export default PrivateRoute;