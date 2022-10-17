import React, {useState} from "react"

import "./TextField.scss"

type TextFieldProps = {
  type: string;
  label: string;
  value: string;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  setValue: (inputValue: string) => void
}

const TextField: React.FC<TextFieldProps> = ({type, label, value, setValue, setErrorMessage}) => {
  const [inputType, setInput] = useState(type)

  const validateInput = () => {

  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setErrorMessage("")

  }

  const renderShowPassword = () => {
    if (type === "password") {
      return inputType === "password" ? <p className="textfield-showPassword" onClick={() => setInput("text")}>SHOW</p> :
      <p className="textfield-showPassword" onClick={() => setInput("password")}>HIDE</p>
    }
  }

  return (
    <div className="textfield-container">
      <input
        type={inputType}
        value={value}
        placeholder={label}
        onChange={handleOnChange}
        onBlur={(e) => validateInput()}
        className="textfield-input"
        
      />

      {
        renderShowPassword()
      }
    </div>
  )
}

export default TextField