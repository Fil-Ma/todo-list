import "./app.css";
import React, { useState } from "react";

import { ThemeContext } from "./contexts/ThemeContext";
import Header from "../components/header/Header";
import ListContainer from "../features/list_container/ListContainer";

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  return (
    <div className="app-container">
      <ThemeContext.Provider value={theme}>

        <Header theme={theme} setTheme={setTheme} />

        <ListContainer />

      </ThemeContext.Provider>
    </div>
  );
}
