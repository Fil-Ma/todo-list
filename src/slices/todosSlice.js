import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [
      {
        id: 101,
        text: "Write some code",
        completed: true
      },
      {
        id: 102,
        text: "Add some styling",
        completed: true
      },
      {
        id: 103,
        text: "Deploy",
        completed: false
      },
    ],
    visibilityFilter: "SHOW_ALL",
  },
  reducers: {
    addTodo: (state, action) => {
      const id = Math.floor(Math.random()*100) + 200;
      const newToDo = {
        id,
        text: action.payload,
        completed: false
      };
      state.todos.push(newToDo);
    },
    changeVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },
    changeToDoStatus: (state, action) => {
      state.todos.forEach((element) => {
        if (element.id === action.payload) {
          element.completed = !element.completed;
        }
      })
    }
  }
});

export const { addTodo, changeToDoStatus, changeVisibilityFilter } = todosSlice.actions;
export default todosSlice.reducer;
