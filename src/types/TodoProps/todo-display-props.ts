import { TodoItem } from '../Todo/todo-type';
import { filterState } from '../Todo/filter-state';

export type TodoDisplayProps = {
  todoList: TodoItem[];
  setFilter: (filterStatus: filterState) => void;
  deleteTodo: (todoID: number) => void;
  clearCompleted: () => void;
};
