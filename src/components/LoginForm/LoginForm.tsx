import React, {useState} from "react"
import { useNavigate} from "react-router-dom"

import Button from "../Button/Button"
import TextField from "../InputFields/TextFields/TextField"
import "./LoginForm.scss" 

const LoginForm = () => {
  const [customerEmail, setCustomerEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("");

  const history = useNavigate()
  
  const startLogin = () => {
    if (validateEntries()) {
      // Go To Dashboard
      history("/dashboard")
    } else {
      history("/")
    }
  }

  const goToForgotPassword = () => {
    // history("/forgot-password")
  }


  const validateEntries = () => {
    if (password.length === 0 || customerEmail.length === 0) {
      setErrorMessage("Please Enter All Fields!")
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="login-form__container">
      <div className="login-form__formContainer">
        <div className="formHeader">
          <h3 className="login-form__welcomeText">Welcome!</h3>
          <p className="login-form__pText">Enter details to login</p>

          {errorMessage.length > 0 && <p className="errorMessage">{errorMessage}</p>}
        </div>

        <div className={`studentNumber formInputWidth`}>
          <TextField
            label="Email"
            type="email"
            value={customerEmail}
            setValue={setCustomerEmail}
            setErrorMessage={setErrorMessage}
          />
        </div>

        <div className={"password formInputWidth"}>
          <TextField
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
            setErrorMessage={setErrorMessage}
          />
        </div>

        <div className="forgotPassword">
          <p onClick={goToForgotPassword}>FORGOT PASSWORD?</p>
        </div>

        <div className="loginBtn formInputWidth">
          <Button
            name="LOG IN" 
            action={startLogin}
          />
        </div>

      </div>
    </div>
  )
}

export default LoginForm