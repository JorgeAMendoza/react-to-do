type ToDoProps = {
  status: boolean;
  todoText: string;
  todoID: number;
  changeStatus: () => void;
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
