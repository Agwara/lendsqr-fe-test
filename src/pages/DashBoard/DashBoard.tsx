import React, {useState} from "react";


import DashBoardCard from "../../components/DashboardCard/DashBoardCard";
import UserList from "../../components/UserList/UserList";

import dashPeople from "../../assets/dashboard/dashPeople.svg";
import activeIcon from "../../assets/dashboard/activeIcon.svg";
import iconLoans from "../../assets/dashboard/iconLoans.svg";
import iconSavings from "../../assets/dashboard/iconSavings.svg";

import "./DashBoard.scss";

const Dashboard = () => {

  const [firstNthItems, setFirstNthItems] = useState(100);

  return (
    <div className="dashboard__container">
      <h1 className="dashboard__container--heading">Users</h1>

      <div className="dashboard__containerTwo">
        <DashBoardCard cardText="Users" cardNumber={2453} cardImage={dashPeople}/>

        <DashBoardCard cardText="Active Users" cardNumber={2453} cardImage={activeIcon}/>

        <DashBoardCard cardText="Users With Loans" cardNumber={2453} cardImage={iconLoans}/>

        <DashBoardCard cardText="Users With Savings" cardNumber={2453} cardImage={iconSavings}/>
      </div>

      <UserList firstNthItems={firstNthItems} />

      <div className="dashboard__container--controls">

        <div className="dashboard__container--showing">
          <label className="showing--text" htmlFor="selectShowing" >Showing:</label>

          <select 
            name="selectShowing" 
            id="selectShowing" 
            className="showing__select" 
            onChange={(e) => setFirstNthItems(Number(e.target.value))}
            value={firstNthItems}
            >
              <option value={20}>20</option>
              <option value={40}>40</option>
              <option value={60}>60</option>
              <option value={80}>80</option>
              <option value={100}>100</option>
          </select>
        </div>

      </div>

      <div className="spaceDiv">
        <p>Test</p>
      </div>
      
    </div>
  )
}

export default Dashboard