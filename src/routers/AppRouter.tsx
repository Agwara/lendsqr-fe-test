import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login  from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoutes";
import Dashboard from "../pages/DashBoard/DashBoard";
import UserDetails from "../pages/UserDetails/UserDetails";

const AppRouter = () => {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<PrivateRoute SomeComponent={Dashboard}/>} />

        <Route path="/user-details/:userId" element={<PrivateRoute SomeComponent={UserDetails}/>} />

      </Routes>
    </Router>
  )
}

export default AppRouter