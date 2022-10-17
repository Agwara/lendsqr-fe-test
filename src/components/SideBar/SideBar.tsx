import React from "react";

import useWindowWidth from "../../hooks/useWindowWidth"

import NavItem from "./NavItems";

import barSolid from "../../assets/welcome/Union.svg";
import crossMark from "../../assets/sidebar/crossMark.svg";
import briefcase from "../../assets/sidebar/briefcase.svg";
import dropDown from "../../assets/sidebar/dropDown.svg";
import home from "../../assets/sidebar/home.svg";
import userFriends from "../../assets/sidebar/userFriends.svg";
import users from "../../assets/sidebar/users.svg";
import sack from "../../assets/sidebar/sack.svg";
import handshakeRegular from "../../assets/sidebar/handshakeRegular.svg";
import piggyBank from "../../assets/sidebar/piggyBank.svg";
import Group from "../../assets/sidebar/Group.svg";
import userCheck from "../../assets/sidebar/userCheck.svg";
import userTimes from "../../assets/sidebar/userTimes.svg";
import npBank from "../../assets/sidebar/npBank.svg";
import coinSolid from "../../assets/sidebar/coinSolid.svg";
import transaction from "../../assets/sidebar/transaction.svg";
import galaxy from "../../assets/sidebar/galaxy.svg";
import userCog from "../../assets/sidebar/userCog.svg";
import scroll from "../../assets/sidebar/scroll.svg";
import chartBar from "../../assets/sidebar/chartBar.svg";
import sliders from "../../assets/sidebar/sliders.svg";
import badge from "../../assets/sidebar/badge.svg";
import clipboard from "../../assets/sidebar/clipboard.svg"

import "./SideBar.scss";

type SideBarProps = {
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  setStartToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: React.FC<SideBarProps> = ({openSideBar, setOpenSideBar, setStartToggle}) => {

  const handleToggle = () => {
    setOpenSideBar(!openSideBar)
    setStartToggle(true)
  }

  let windowWidth :number = useWindowWidth();

  return (
    <div className="sidebar__container">

      {
        windowWidth < 800 && 
        <div className="sidebar__containerTwo">
          <img
            alt=""
            src={barSolid}
            height="25"
            width="25" 
          />

          <h1 className="sidebar__containerTwo--text">Lendsqr</h1>

          <img 
            alt=""
            src={crossMark}
            height="30"
            width="30"
            className="sidebar__containerTwo--crossMark"
            onClick={handleToggle}
          />
        </div>
      }

      <div className="sidebar__navheader">
        <img
          alt=""
          src={briefcase}
          height="20"
          width="20" 
        />

        <p className="sidebar__navheader--text">Switch Organization</p>

        <img
          alt=""
          src={dropDown}
          width="15"
          height="15" 
        />
      </div>


      <NavItem navName="Dashboard" navImg={home} />

      <div className="sidebar__nav-section">
        <p className="sidebar__nav-section--header">CUSTOMERS</p>

        <NavItem navName="Users" navImg={userFriends} />

        <NavItem navName="Guarantors" navImg={users} />

        <NavItem navName="Loans" navImg={sack} />

        <NavItem navName="Decision Models" navImg={handshakeRegular} />

        <NavItem navName="Savings" navImg={piggyBank} />

        <NavItem navName="Loan Requests" navImg={Group} />

        <NavItem navName="Whitelist" navImg={userCheck} />

        <NavItem navName="Karma" navImg={userTimes} />
      </div>

      <div className="sidebar__nav-section">
        <p className="sidebar__nav-section--header">BUSINESSES</p>

        <NavItem navName="Organization" navImg={briefcase} />

        <NavItem navName="Loan Products" navImg={Group} />

        <NavItem navName="Savings Products" navImg={npBank} />

        <NavItem navName="Fee and Charges" navImg={coinSolid} />

        <NavItem navName="Transactions" navImg={transaction} />

        <NavItem navName="Services" navImg={galaxy} />

        <NavItem navName="Service Account" navImg={userCog} />

        <NavItem navName="Settlements" navImg={scroll} />

        <NavItem navName="Reports" navImg={chartBar} />
      </div>

      <div className="sidebar__nav-section">
        <p className="sidebar__nav-section--header">SETTINGS</p>

        <NavItem navName="Preferences" navImg={sliders} />

        <NavItem navName="Fees and Pricing" navImg={badge} />

        <NavItem navName="Audit Logs" navImg={clipboard} />
      </div>

      <div className="spaceDiv">
        <p>Test</p>
      </div>
    </div>
  )
}

export default SideBar