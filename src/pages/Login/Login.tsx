import React from "react";

import LoginForm from "../../components/LoginForm/LoginForm";
import WelcomeAside from "../../components/WelcomeAside/WelcomeAside";

import "./Login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-item1">
        <WelcomeAside />
      </div>
      <div className="login-item2">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login;