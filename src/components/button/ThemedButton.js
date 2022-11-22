import "./themed_button.css";
import React, { useContext } from "react";

import { ThemeContext } from "../../app/contexts/ThemeContext";

export default function ThemedButton({
  handleClick,
  children
}) {
  const theme = useContext(ThemeContext);

  return (
    <button
      className={theme}
      onClick={handleClick}
    >{children}</button>
  )
}
