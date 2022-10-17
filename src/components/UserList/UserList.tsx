import React, {useEffect, useState} from "react";

import axios from "axios";
import UserItem from "../UserItem/UserItem";

import filterResults from "../../assets/dashboard/filterResults.svg"
import "./UserList.scss"

type UserListProps = {
  firstNthItems: number;
}

const UserList: React.FC<UserListProps> = ({firstNthItems}) => {

  const [userList, setUserList] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    axios.get("https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users")
    .then(function (response) {
      setUserList(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  useEffect(() => {
    setFilteredUsers(userList.slice(0, firstNthItems + 1))
  }, [firstNthItems, userList])

  return (
    <div className="userlist__container">
      <div className="userlist__containerTwo">

        <div className="userlist__container--header">
          <div className="userlist__container--col">
            <p className="userlist__container--colText">Organization</p>
            <img
              alt=""
              src={filterResults}
              height="20"
              width="20" 
            />
          </div>

          <div className="userlist__container--col">
            <p className="userlist__container--colText">Username</p>
            <img
              alt=""
              src={filterResults}
              height="20"
              width="20" 
            />
          </div>

          <div className="userlist__container--col">
            <p className="userlist__container--colText">Email</p>
            <img
              alt=""
              src={filterResults}
              height="20"
              width="20" 
            />
          </div>

          <div className="userlist__container--col">
            <p className="userlist__container--colText">Phone Number</p>
            <img
              alt=""
              src={filterResults}
              height="20"
              width="20" 
            />
          </div>

          <div className="userlist__container--col">
            <p className="userlist__container--colText">Date Joined</p>
            <img
              alt=""
              src={filterResults}
              height="20"
              width="20" 
            />
          </div>

          <div className="userlist__container--col">
            <p className="userlist__container--colText">Status</p>
            <img
              alt=""
              src={filterResults}
              height="20"
              width="20" 
            />
          </div>
        </div>


        <ul className="userlist__container--list">

          {
            filteredUsers.map((userData) => <UserItem 
              orgName={userData["orgName"]}
              username={userData["userName"]}
              email={userData["email"]}
              phone={userData["phoneNumber"]}
              dateJoined={userData["createdAt"]}
              key={userData["id"]}
              id={userData["id"]}

            />)
          }
        </ul>

      </div>
    </div>
  )
}

export default UserList;