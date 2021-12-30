import { useDrag } from 'react-dnd';
import { TodoProps } from '../../../types/TodoProps/todo-props';

export const ToDo = ({
  status,
  todoText,
  todoID,
  deleteTodo,
  updateTodoStatus,
}: TodoProps) => {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: 'TODO_DRAG',
    item: { todoID },
  }));
  return (
    <li ref={drag}>
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
