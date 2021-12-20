import { filterState } from '../../../types/Todo/filter-state';

type TodoFilterProps = {
  todoCount: number;
  listFilter: string;
  clearCompleted: () => void;
  setFilter: (filterStatus: filterState) => void;
};

export const TodoFilter = ({
  todoCount,
  listFilter,
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
