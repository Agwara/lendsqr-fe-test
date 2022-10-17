import React, {useState} from "react";

import {useNavigate} from "react-router-dom"

import useWindowWidth from "../../hooks/useWindowWidth"
import lendSqrLogo from "../../assets/welcome/Union.svg";
import searchLogo from "../../assets/header/search.svg";
import menuBar from "../../assets/header/barSolid.svg";
import bell from "../../assets/header/bell.svg";
import user from "../../assets/header/user.svg";
import dropDown from "../../assets/header/dropDown.svg";

import "./Header.scss"

type HeaderProps = {
  openSideBar: boolean;
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header : React.FC<HeaderProps>= ({openSideBar, setOpenSideBar}) => {

  const [searchString, setSearchString] = useState("")
  const [showDropDown, setShowDropDown] = useState(false);

  const history = useNavigate()

  const handleNavigate = () => {
    history("/")
  }

  const handleToggle = () => {
    setOpenSideBar(!openSideBar)
  }

  let windowWidth :number = useWindowWidth();
  
  return (
    <div className="header__container">

      <div className="header__containerTwo">
        {
          windowWidth < 800 ?
           <img width="35" height="35" alt="" src={menuBar} onClick={handleToggle}  /> :
          <>
            <img
              src={lendSqrLogo}
              height="30"
              width="30" 
              alt="Company Logo"
            />

            <h1 className="header__text">lendsqr</h1>
          </>
        }
      </div>

      <div className="header__containerThree">
        <input 
          placeholder="Search for anything"
          className="header__input"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />

        <div className="header__search">
          <img
            alt=""
            src={searchLogo}
            height="20"
            width="20"
           />
        </div>
      </div>

      <div className="header__containerFour">
        <p className="header__containerFour--text">Docs</p>

        <img 
          alt=""
          src={bell}
          height="20"
          width="20"
          className="header__containerFour--bell"
        />

        <div className="header__containerFive" onClick={() => setShowDropDown(!showDropDown)}>
          <img 
            alt=""
            src={user}
            height="40"
            width="40"
            className="header__containerFive--userImg"
          />

          <p className="header__containerFive--text">Agwara</p>

          <img
            alt=""
            src={dropDown}
            height={10}
            width={10}
            className="header__containerFive--dropDown"
          />

          {
            showDropDown &&
            <div className="header__containerFive--logout" onMouseLeave={() => setShowDropDown(false)}>
              <p className="header__containerFive--logoutText" onClick={handleNavigate}>LogOut</p>
            </div>
          }
        </div>

      </div>
    </div>
  )
}

export default Header;