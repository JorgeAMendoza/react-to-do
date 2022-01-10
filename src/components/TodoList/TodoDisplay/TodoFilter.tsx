import { TodoFilterProps } from '../../../types/TodoProps/todo-filter-props';
import { TodoFilterStyled } from '../../../styles/TodoList/TodoFilter/TodoFilter.styled';

export const TodoFilter = ({
  todoCount,
  clearCompleted,
  setFilter,
}: TodoFilterProps) => {
  return (
    <TodoFilterStyled>
      <p className="todo-count">{todoCount} items left</p>
      <div>
        <button className="filter-select active" onClick={() => setFilter('all')}>
          All
        </button>
        <button className="filter-select" onClick={() => setFilter('active')}>
          Active
        </button>
        <button
          className="filter-select"
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <div>
        <button className="clear-all" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </TodoFilterStyled>
  );
};
