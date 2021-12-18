type TodoFilterProps = {
  todoCount: number;
  listFilter: string;
  clearCompleted: () => void;
};

export const TodoFilter = ({
  todoCount,
  listFilter,
  clearCompleted,
}: TodoFilterProps) => {
  return (
    <section>
      <p>{todoCount} items left</p>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>

      <div>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </section>
  );
};
