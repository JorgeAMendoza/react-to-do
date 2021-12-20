import { TodoItem } from '../../types/Todo/todo-type';

const generateAllTodos = () => true;
const generateActiveTodos = (todo: TodoItem) => {
  if (!todo.status) return true;
  else return false;
};
const genrateCompletedTodos = (todo: TodoItem) => {
  if (todo.status) return true;
  else return false;
};

export { generateAllTodos, generateActiveTodos, genrateCompletedTodos };
