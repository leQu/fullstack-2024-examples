import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "REMOVE_TASK":
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
};

const TodoList = () => {
  const [tasks, dispatch] = useReducer(reducer, []);

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const removeTask = (taskId) => {
    dispatch({ type: "REMOVE_TASK", payload: taskId });
  };

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input defaultValue={"new item"} />
            <button onClick={() => removeTask(task.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addTask({ id: Date.now(), text: "New Task" })}>
        Add Task
      </button>
    </div>
  );
};

export default TodoList;
