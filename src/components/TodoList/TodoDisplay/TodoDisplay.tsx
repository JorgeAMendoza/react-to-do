import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';
import { TodoDisplayProps } from '../../../types/TodoProps/todo-display-props';
import { TodoDisplayStyled } from '../../../styles/TodoList/TodoDisplay.styled';

export const TodoDisplay = ({
  todoList,
  setFilter,
  filter,
  deleteTodo,
  clearCompleted,
  updateTodoStatus,
}: TodoDisplayProps) => {
  return (
    <TodoDisplayStyled>
      <ul>
        {todoList.map((item) => (
          <ToDo
            key={item.id}
            status={item.status}
            todoText={item.text}
            deleteTodo={deleteTodo}
            todoID={item.id}
            updateTodoStatus={updateTodoStatus}
          />
        ))}
      </ul>
      <TodoFilter
        todoCount={todoList.length}
        clearCompleted={clearCompleted}
        setFilter={setFilter}
        filter={filter}
      />
    </TodoDisplayStyled>
  );
};
