import { ToDo } from './Todo';
import { TodoFilter } from './TodoFilter';

export const TodoDisplay = () => {
  return (
    <section>
      <div></div>
      {/* Maps over the todo array and creates various Todos */}
      <TodoFilter
        todoCount={4}
        listFilter="all"
        clearCompleted={() => console.log('Clearing Completed')}
      />
    </section>
  );
};
