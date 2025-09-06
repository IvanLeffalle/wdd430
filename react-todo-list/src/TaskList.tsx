import TaskItem from "./TaskItem";

export default function TaskList({ taskList, toggleTask, handleDelete }) {
  console.log("TaskList", taskList);

  return (
    <ul className="list">
      {taskList.length === 0 && <li>No tasks available</li>}
      {taskList.map((task) => {
        return (
          <TaskItem
            {...task}
            key={task.id}
            toggleTask={toggleTask}
            handleDelete={handleDelete}
          />
        );
      })}
    </ul>
  );
}
