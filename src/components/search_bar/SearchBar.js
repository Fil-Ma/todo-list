import "./search-bar.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../app/contexts/ThemeContext";

export default function SearchBar({ setSearchValue }) {
  const theme = useContext(ThemeContext);

  // handle search of value
  function handleChangeSearchValue(event) {
    event.preventDefault();
    const lowerCaseInput = event.target.value.toLowerCase();
    setSearchValue(lowerCaseInput);
  }
  return (
    <form className={`${theme} search-bar-form`}>
      <input
        className={theme}
        type="text"
        placeholder="Search ... "
        autoFocus
        onChange={handleChangeSearchValue}/>
    </form>
  )
}
