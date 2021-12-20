import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';
import { filterState } from '../../../types/Todo/filter-state';
import { TodoItem } from '../../../types/Todo/todo-type';

type TodoDisplayProps = {
  todoList: TodoItem[];
  filter: (filterStatus: filterState) => void;
};

export const TodoDisplay = ({ todoList, filter }: TodoDisplayProps) => {
  return (
    <section>
      <ul>
        {todoList.map((item) => (
          <ToDo
            key={item.id}
            status={item.status}
            changeStatus={() => console.log('Changing Status')}
            todoText={item.text}
            deleteTodo={() => console.log('Deleting Todo')}
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
