import React from "react";

import "./Button.scss";

type ButtonProps = {
  name: string;
  action: () => void
}

const Button : React.FC<ButtonProps> = ({action, name}) => {
  return (
    <button onClick={action} className="btn">
      {name}
    </button>
  )
}

export default Button