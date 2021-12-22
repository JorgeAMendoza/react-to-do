import { TodoFilterProps } from '../../../types/TodoProps/todo-filter-props';

export const TodoFilter = ({
  todoCount,
  clearCompleted,
  setFilter,
}: TodoFilterProps) => {
  return (
    <section>
      <p>{todoCount} items left</p>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </section>
  );
};
