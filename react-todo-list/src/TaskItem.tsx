export default function TaskItem({
  completed,
  id,
  text,
  toggleTask,
  handleDelete,
}) {
  return (
    <li>
      <label htmlFor="">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTask(id, e.target.checked)}
        />{" "}
        {text}
      </label>
      <button
        type="button"
        className="delete-button"
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </li>
  );
}
