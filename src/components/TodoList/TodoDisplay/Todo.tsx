type ToDoProps = {
  status: boolean;
  changeStatus: () => void;
  todoText: string;
  deleteTodo: () => void;
};

export const ToDo = ({
  status,
  changeStatus,
  todoText,
  deleteTodo,
}: ToDoProps) => {
  return (
    <li>
      <label htmlFor="Change Todo Status">
        <input type="checkbox" checked={status} onChange={changeStatus} />
      </label>
      <p>{todoText}</p>
      <button onClick={deleteTodo}>X</button>
    </li>
  );
};
