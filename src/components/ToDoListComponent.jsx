import useLocalStorage from "../hooks/useLocalStorage";

export default function ToDoListComponent() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const todoListStyping = {
    color: "red",
    borderRadius: "5px",
    padding: "10px",
    backgroundColor: "lightblue",
  };

  return (
    <div>
      <h1 className="mainTitle">ToDo List</h1>
      <ul>
        {tasks.map((task, index) => (
          <>
            <li key={index}>{task.text}</li>
            <button
              style={{ color: "red" }}
              onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            >
              Remove
            </button>
          </>
        ))}
      </ul>
      <button
        style={todoListStyping}
        onClick={() => setTasks([...tasks, { text: "new task" }])}
      >
        Add task
      </button>
    </div>
  );
}
