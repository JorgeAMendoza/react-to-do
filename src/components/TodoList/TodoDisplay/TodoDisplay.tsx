import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';
import { filterState } from '../../../types/Todo/filter-state';
import { TodoItem } from '../../../types/Todo/todo-type';

type TodoDisplayProps = {
  todoList: TodoItem[];
  filter: (filterStatus: filterState) => void;
  deleteTodo: (todoID: number) => void;
};

export const TodoDisplay = ({ todoList, filter, deleteTodo } : TodoDisplayProps) => {
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
        listFilter="all"
        clearCompleted={() => console.log('Clearing Completed')}
        setFilter={filter}
      />
    </section>
  );
};
