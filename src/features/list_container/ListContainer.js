import "./list-container.css";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";

import { ThemeContext } from "../../app/contexts/ThemeContext";
import FilterFunction from "../filter/FilterFunction";
import Toolbar from "../../components/toolbar/Toolbar";
import SearchBar from "../../components/search_bar/SearchBar";
import AddTodoBar from "../../components/add_todo_bar/AddTodoBar";

import { changeVisibilityFilter, addTodo } from "../../slices/todosSlice";

export default function ListContainer() {
  const theme = useContext(ThemeContext);
  const [isAddingTodo, setIsAddingTodo] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [newTodoText, setNewTodoText] = useState("");

  const dispatch = useDispatch();

  // handle click on search button to display the search bar
  function toggleSearchFeature(event) {
    event.preventDefault();
    if (isAddingTodo) {
      setNewTodoText("");
      setIsAddingTodo(false);
    }
    if (isSearching) {
      setSearchValue("")
    };
    setIsSearching(!isSearching)
  }

  // handle click on plus(+) button to display add todo bar
  function toggleAddTodoFeature(event) {
    event.preventDefault();
    if (isSearching) {
      setSearchValue("");
      setIsSearching(false);
    }
    if (isAddingTodo) {
      setNewTodoText("");
    }
    setIsAddingTodo(!isAddingTodo);
  }

  // handle addition of a new todo
  function submitNewTodo(event) {
    event.preventDefault();
    if (newTodoText.length > 1) {
      dispatch(addTodo(newTodoText));
    }
    setNewTodoText("");
    setIsAddingTodo(false);
  }

  // handle change of text inside new todo text input
  function addTextNewTodo(event) {
    event.preventDefault();
    setNewTodoText(event.target.value)
  }

  // handle visibility all
  function toggleVisibilityAll(event) {
    event.preventDefault();
    dispatch(changeVisibilityFilter("SHOW_ALL"));
  }

  // handle visibility active todos
  function toggleVisibilityActive(event) {
    event.preventDefault();
    dispatch(changeVisibilityFilter("ACTIVE"));
  }

  // handle visibility completed todos
  function toggleVisibilityCompleted(event) {
    event.preventDefault();
    dispatch(changeVisibilityFilter("COMPLETED"));
  }

  return (
    <main className={theme}>
      <div className={`${theme} list-container`}>
        <h2>What do I have to do today?</h2>

        {isAddingTodo && <AddTodoBar handleSubmit={submitNewTodo} handleChange={addTextNewTodo}/>}
        {isSearching && <SearchBar setSearchValue={setSearchValue} />}

        <FilterFunction searchValue={searchValue} />

        <Toolbar
          handleClickSearch={toggleSearchFeature}
          handleClickAddTodo={toggleAddTodoFeature}
          handleClickFilterAll={toggleVisibilityAll}
          handleClickFilterActive={toggleVisibilityActive}
          handleClickFilterCompleted={toggleVisibilityCompleted} />

      </div>
    </main>
  )
}
