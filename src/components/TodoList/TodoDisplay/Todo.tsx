import { TodoProps } from '../../../types/TodoProps/todo-props';

export const ToDo = ({
  status,
  changeStatus,
  todoText,
  todoID,
  deleteTodo,
}: TodoProps) => {
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
