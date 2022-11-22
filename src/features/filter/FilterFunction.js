import React from "react";
import { useSelector } from "react-redux";

import ToDo from "../../components/todo/ToDo";

export default function FilterFunction({ searchValue }) {
  const allTodos = useSelector(state => state.todos.todos);
  const currentFilter = useSelector(state => state.todos.visibilityFilter);

  return (
    <div className="todos">
      {
        allTodos.filter(todo => {
          if (currentFilter === "SHOW_ALL" && todo.text.toLowerCase().includes(searchValue)) {
            return true;
          } else if (currentFilter === "ACTIVE" && todo.completed === false && todo.text.toLowerCase().includes(searchValue)) {
            return true;
          }  else if (currentFilter === "COMPLETED" && todo.completed === true && todo.text.toLowerCase().includes(searchValue)) {
            return true;
          }

          return false;
        }).map((element) => {
          return (
            <ToDo
              status={element.completed}
              text={element.text}
              key={element.id}
              id={element.id} />
          )
        })
      }
    </div>
  )
}
