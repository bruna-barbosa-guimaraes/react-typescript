import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
  render() {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}

export default Button;
