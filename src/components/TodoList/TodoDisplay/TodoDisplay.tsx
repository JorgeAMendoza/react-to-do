import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';
import { TodoDisplayProps } from '../../../types/TodoProps/todo-display-props';

export const TodoDisplay = ({
  todoList,
  setFilter,
  deleteTodo,
  clearCompleted,
}: TodoDisplayProps) => {
  return (
    <section>
      <ul>
        {todoList.map((item) => (
          <ToDo
            key={item.id}
            status={item.status}
            changeStatus={() => console.log('Changing Status')}
            todoText={item.text}
            deleteTodo={deleteTodo}
            todoID={item.id}
          />
        ))}
      </ul>
      <TodoFilter
        todoCount={todoList.length}
        clearCompleted={() => console.log('Clearing Completed')}
        setFilter={setFilter}
      />
    </section>
  );
};
