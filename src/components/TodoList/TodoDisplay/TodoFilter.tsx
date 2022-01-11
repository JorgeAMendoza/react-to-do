import { TodoFilterProps } from '../../../types/TodoProps/todo-filter-props';
import { useMediaQuery } from 'react-responsive';
import { device } from '../../../styles/Utils/device';
import { TodoFilterStyled } from '../../../styles/TodoList/TodoFilter/TodoFilter.styled';

export const TodoFilter = ({
  todoCount,
  clearCompleted,
  setFilter,
  filter,
}: TodoFilterProps) => {
  const isTablet = useMediaQuery({
    query: device.tablet,
  });

  return (
    <TodoFilterStyled todoCount={todoCount}>
      <div className="todo-filter">
        <p className="todo-count">{todoCount} items left</p>
        <div>
          {isTablet ? (
            <>
              <button
                className={`filter-select ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button
                className={`filter-select ${
                  filter === 'active' ? 'active' : ''
                }`}
                onClick={() => setFilter('active')}
              >
                Active
              </button>
              <button
                className={`filter-select ${
                  filter === 'completed' ? 'active' : ''
                }`}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </>
          ) : null}
        </div>
        <div>
          <button className="clear-all" onClick={clearCompleted}>
            Clear Completed
          </button>
        </div>
      </div>

      {!isTablet ? (
        <div className="todo-filter--mobile">
          <button
            className={`filter-select ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-select ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`filter-select ${
              filter === 'completed' ? 'active' : ''
            }`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>
      ) : null}
    </TodoFilterStyled>
  );
};
