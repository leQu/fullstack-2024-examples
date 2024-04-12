import { useState } from "react";

export default function ToDoListComponent() {
  const [tasks, setTasks] = useState([]);

  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <>
            <li key={index}>{task.text}</li>
            <button
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              Remove
            </button>
          </>
        ))}
      </ul>
      <button onClick={() => setTasks([...tasks, { text: "new task" }])}>
        Add task
      </button>
    </div>
  );
}
