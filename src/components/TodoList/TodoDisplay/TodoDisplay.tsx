import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';
import { TodoItem } from '../../../types/Todo/todo-type';

type TodoDisplayProps = {
  todoList: TodoItem[];
};

export const TodoDisplay = ({ todoList }: TodoDisplayProps) => {
  return (
    <section>
      <ul>
        {todoList.map((item, index) => (
          <ToDo
            key={index}
            status={item.status}
            changeStatus={() => console.log('Changing Status')}
            todoText={item.text}
            deleteTodo={() => console.log('Deleting Todo')}
          />
        ))}
      </ul>
      <TodoFilter
        todoCount={4}
        listFilter="all"
        clearCompleted={() => console.log('Clearing Completed')}
      />
    </section>
  );
};
