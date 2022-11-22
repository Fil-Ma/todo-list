import "./add-todo-bar.css";
import React, { useContext } from "react";
import { ThemeContext } from "../../app/contexts/ThemeContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddTodoBar({ handleSubmit, handleChange }) {
  const theme = useContext(ThemeContext);

  return (
    <form className={`${theme} add-todo-form`} onSubmit={handleSubmit}>
      <input
        className={theme}
        type="text"
        placeholder="Add new todo ... "
        onChange={handleChange}
        autoFocus
        minLength={1}
        maxLength={69} />
      <button type="submit" className={theme}>
        {
          theme === "light"
            ? <FontAwesomeIcon icon={faPlus} />
            : <FontAwesomeIcon icon={faPlus} inverse />
        }
      </button>
    </form>
  )
}
