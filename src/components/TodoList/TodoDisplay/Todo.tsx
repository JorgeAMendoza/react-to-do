import { useDrag } from 'react-dnd';
import { TodoProps } from '../../../types/TodoProps/todo-props';
import { Cross } from './Cross';
import { TodoStyled } from '../../../styles/TodoList/Todo/Todo.styled';

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
    <TodoStyled shouldCross={status} ref={drag}>
      <label>
        <input
          type="checkbox"
          checked={status}
          onChange={() => updateTodoStatus(todoID)}
        />
        <span></span>
      </label>
      <p>{todoText}</p>
      <button onClick={() => deleteTodo(todoID)}>
        <Cross />
      </button>
    </TodoStyled>
  );
};
