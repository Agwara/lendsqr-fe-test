import React, {useEffect, useState} from "react"
import axios from "axios"

import {useParams} from "react-router-dom";
import UserQuickLinks from "../../components/UserQuickLinks/UserQuickLinks";
import { User } from "../../model/user";

import arrowBack from "../../assets/dashboard/arrowBack.svg";

import "./UserDetails.scss";

const UserDetails: React.FC = ()=> {
  const [userObject, setUserObject] = useState<User| null>(null);

  let params = useParams();

  useEffect(() => {
    axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params["userId"]}`)
    .then(function (response) {
      setUserObject(response.data);
      console.log("Testing: ", response.data)
    })
    .catch(function (error) {
      console.log(error);
    })
  }, [params]);

  return (
    <div className="userDetails__container">
      <div className="userDetails__backLink">
        <img
          alt=""
          src={arrowBack}
          height={20} 
        />
        <p className="userDetails__backLink--text">Back To Users</p>
      </div>


      <div className="userDetails__containerTwo">
        <h3 className="userDetails__containerTwo--text">User Details</h3>

        <div className="userDetails__btnContainer">
          <button className="userDetails__DeleteBtn">
            BlackList User
          </button>

          <button className="userDetails__ActivateBtn">
            Activate User
          </button>
        </div>
      </div>

      {
        userObject && 
          <UserQuickLinks 
          name={userObject?.["profile"]} 
          userName={userObject?.["userName"]}
          accountBalance={userObject?.["accountBalance"]}
          />
      }

      <div className="spaceDiv">
        <p>Test</p>
      </div>
    </div>
  )
}

export default UserDetails;