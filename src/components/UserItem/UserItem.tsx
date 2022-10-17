import React, {useState} from "react"
import {useNavigate} from "react-router-dom"

import dropDown from "../../assets/dashboard/dropDown.svg"
import view from "../../assets/dashboard/view.svg";
import deleteFriend from "../../assets/dashboard/deleteFriend.svg";
import npUser from "../../assets/dashboard/npUser.svg";

import "./UserItem.scss";

type UserItemProps = {
  orgName: string;
  username: string;
  email: string;
  phone: string;
  dateJoined: string;
  id: string;
}

const UserItem: React.FC<UserItemProps> = ({orgName, username, email, phone, dateJoined, id }) => {

  const [showDropDown, setShowDropDown] = useState(false)

  const reduceString = (a:string):string => {
    if (a.length > 14) {
      return `${a.slice(0, 14)}...`
    } else {
      return a;
    }
  }

  const history = useNavigate()

  const goToDetailsView = () => {
    history(`/user-details/${id}`)
  }

  
  return (
    <div className="userItem__container">

      <p className="userItem__container--text">{reduceString(orgName)}</p>

      <p className="userItem__container--text">{reduceString(username)}</p>

      <p className="userItem__container--text">{reduceString(email)}</p>

      <p className="userItem__container--text">{reduceString(phone)}</p>

      <p className="userItem__container--text">{(new Date(dateJoined)).toString().slice(0, 15)}</p>

      <div className="userItem__dropDown">
        <p className="userItem__status">Active</p>

        <img
          alt=""
          src={dropDown}
          height="20"
          width="20" 
          className="userItem__dropDown"
          onClick={() => setShowDropDown(!showDropDown)}
        />

        {
          showDropDown &&         
          <div className="toggleDropDown" onMouseLeave={() => setShowDropDown(false)}>
            <div className="toggleDropDown--item" onClick={goToDetailsView}>
              <img src={view} alt="" height={20} width={20} />
              <p className="toggleDropDown--text">View Details</p>
            </div>

            <div className="toggleDropDown--item">
              <img src={deleteFriend} alt="" height={20} width={20} />
              <p className="toggleDropDown--text">Blacklist User</p>
            </div>

            <div className="toggleDropDown--item">
              <img src={npUser} alt="" height={20} width={20} />
              <p className="toggleDropDown--text">Activate User</p>
            </div>
          </div>
        }

      </div>

    </div>
  )
}

export default UserItem