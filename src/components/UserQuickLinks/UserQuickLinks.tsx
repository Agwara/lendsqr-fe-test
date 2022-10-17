import React from "react";

import "./UserQuickLinks.scss"

interface UserQuickLinksProps {
  userName: any;
  name: any;
  accountBalance: any;
}

const UserQuickLinks: React.FC<UserQuickLinksProps> = ({userName, accountBalance, name}) => {
  return (
    <div className="userQuickLinks__container">

      <div className="userQuickLinks__profile">
        <div className="userQuickLinks__imgContainer">
          <img 
            src={name?.["avatar"]}
            alt="User"
            height={80}
            width={80}
            className="userQuickLinks__container--img"
          />

          <div className="userQuickLinks__textContainer">
            <p className="userQuickLinks__textContainer--textOne">{name["firstName"] + " " + name["lastName"]}</p>
            <p className="userQuickLinks__textContainer--textTwo">{userName}</p>
          </div>
        </div>

        <div className="userQuickLinks__usersTier">
          <p className="userQuickLinks__usersTier--text">User's Tier</p>
        </div>

        <div className="userQuickLinks__bank">
          <p className="userQuickLinks__bank--balance">&#x20A6; {accountBalance}</p>
          <p className="userQuickLinks__bank--acctName">9912345678/Providus Bank</p>
        </div>
      </div>


      <div className="userQuickLinks__nav">
        <p className="userQuickLinks__nav--linkActive">General Details</p>
        <p className="userQuickLinks__nav--link">Documents</p>
        <p className="userQuickLinks__nav--link">Bank Details</p>
        <p className="userQuickLinks__nav--link">Loans</p>
        <p className="userQuickLinks__nav--link">Savings</p>
        <p className="userQuickLinks__nav--link">App System</p>
      </div>
    </div>
  )
}

export default UserQuickLinks;