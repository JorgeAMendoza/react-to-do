import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';
import { TodoDisplayProps } from '../../../types/TodoProps/todo-display-props';

export const TodoDisplay = ({
  todoList,
  setFilter,
  deleteTodo,
  clearCompleted,
  updateTodoStatus,
}: TodoDisplayProps) => {
  return (
    <section>
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
      />
    </section>
  );
};
