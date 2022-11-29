import "./header.css";
import React, { useEffect } from "react";
import ThemedButton from "../button/ThemedButton";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function Header({ theme, setTheme }) {
  const themeIcon = theme === "light" ? faMoon : faSun;

  // handle click on theme setting button
  function toggleTheme(event) {
    event.preventDefault();
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    // set localStorage theme to save it
    localStorage.setItem("theme", theme);
    // set body theme
    document.body.className = theme;
  }, [theme]);

  return (
    <header className={theme}>
      <h1>To Do App</h1>
      <ThemedButton
        handleClick={toggleTheme}
      >
        <FontAwesomeIcon icon={themeIcon} size="lg" />
      </ThemedButton>
    </header>
  )
}
