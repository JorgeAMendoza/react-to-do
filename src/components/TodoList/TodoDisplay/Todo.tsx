type ToDoProps = {
  status: boolean;
  todoText: string;
  todoID: number;
  changeStatus: () => void;
  deleteTodo: (todoID: number) => void;
};

export const ToDo = ({
  status,
  changeStatus,
  todoText,
  todoID,
  deleteTodo,
}: ToDoProps) => {
  return (
    <li>
      <label htmlFor="Change Todo Status">
        <input type="checkbox" checked={status} onChange={changeStatus} />
      </label>
      <p>{todoText}</p>
      <button onClick={() => deleteTodo(todoID)}>X</button>
    </li>
  );
};
