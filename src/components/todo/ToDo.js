import "./todo.css";
import React, { useContext } from "react";
import { useDispatch } from "react-redux";

import { ThemeContext } from "../../app/contexts/ThemeContext";
import ThemedButton from "../button/ThemedButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import { changeToDoStatus } from "../../slices/todosSlice";

export default function ToDo({ status, text, id }) {
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();

  function handleChangeStatus(event) {
    event.preventDefault();
    dispatch(changeToDoStatus(id))
  }

  return (
    <div className={`${theme} todo`}>
      <button className="status" onClick={handleChangeStatus}>
        {
          status === true
            ? theme === "light"
                ? <FontAwesomeIcon
                    icon={faSquareCheck}
                    size="lg"
                    className="beating-icon" />
                : <FontAwesomeIcon
                    icon={faSquareCheck}
                    size="lg"
                    inverse
                    className="beating-icon" />
            : theme === "light"
                ? <FontAwesomeIcon
                    icon={faSquare}
                    size="lg" />
                : <FontAwesomeIcon
                    icon={faSquare}
                    size="lg"
                    inverse />
        }
      </button>
      <div className="description">
        {text}
      </div>
    </div>
  )
}
