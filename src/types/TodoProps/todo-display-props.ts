import { TodoItem } from '../Todo/todo-type';
import { filterState } from '../Todo/filter-state';

export type TodoDisplayProps = {
  todoList: TodoItem[];
  setFilter: (filterStatus: filterState) => void;
  filter: filterState;
  deleteTodo: (todoID: number) => void;
  clearCompleted: () => void;
  updateTodoStatus: (todoID: number) => void;
  reorderList: (todoIdOne: number, todoIdTwo: number) => void;
};
