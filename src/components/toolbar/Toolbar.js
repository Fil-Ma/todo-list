import "./toolbar.css";
import React from "react";

import ThemedButton from "../button/ThemedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

export default function Toolbar({
  handleClickSearch,
  handleClickAddTodo,
  counter,
  handleClickFilterAll,
  handleClickFilterActive,
  handleClickFilterCompleted
}) {

  return (
    <div className="toolbar">
      <ThemedButton handleClick={handleClickAddTodo}>
        <FontAwesomeIcon icon={faPlus} />
      </ThemedButton>

      <ThemedButton handleClick={handleClickSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </ThemedButton>

      <ThemedButton handleClick={handleClickFilterAll}>
        All
      </ThemedButton>

      <ThemedButton handleClick={handleClickFilterActive}>
        Active
      </ThemedButton>
      
      <ThemedButton handleClick={handleClickFilterCompleted}>
        Completed
      </ThemedButton>
    </div>
  )
}
