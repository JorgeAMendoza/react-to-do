import { TodoProps } from '../../../types/TodoProps/todo-props';

export const ToDo = ({
  status,
  todoText,
  todoID,
  deleteTodo,
  updateTodoStatus,
}: TodoProps) => {
  return (
    <li>
      <label htmlFor="Change Todo Status">
        <input
          type="checkbox"
          checked={status}
          onChange={() => updateTodoStatus(todoID)}
        />
      </label>
      <p>{todoText}</p>
      <button onClick={() => deleteTodo(todoID)}>X</button>
    </li>
  );
};
