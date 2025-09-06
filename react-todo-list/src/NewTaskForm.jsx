import { useState } from "react";

export default function NewTaskForm({ onSubmit }) {
  const [tasks, setTasks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tasks === "") return;
    onSubmit(tasks);
    setTasks("");
  };

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Task:</label>
          <input
            value={tasks}
            onChange={(e) => setTasks(e.target.value)}
            type="text"
            placeholder="Add a new task"
            id="item"
          />
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}
