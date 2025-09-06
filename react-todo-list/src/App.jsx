import "./App.css";
import { useEffect, useState } from "react";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

function App() {
  const [taskList, setTaskList] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskList));
  }, [taskList]);

  const addTask = (taskText) => {
    setTaskList((prevTasks) => [
      ...prevTasks,
      { id: crypto.randomUUID(), text: taskText, completed: false },
    ]);
  };

  const toggleTask = (id, completed) => {
    setTaskList((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? { ...task, completed } : task))
    );
  };

  const deleteTask = (id) => {
    setTaskList((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <main className="app-container">
      <h1 className="app-title">Todo List</h1>
      <NewTaskForm onSubmit={addTask} />
      <TaskList
        taskList={taskList}
        toggleTask={toggleTask}
        handleDelete={deleteTask}
      />
    </main>
  );
}

export default App;
