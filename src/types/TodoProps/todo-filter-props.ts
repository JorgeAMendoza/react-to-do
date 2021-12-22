import { TodoDisplayProps } from './todo-display-props';

type TodoFilterOwnProps = {
  todoCount: number;
};

export type TodoFilterProps = TodoFilterOwnProps &
  Pick<TodoDisplayProps, 'setFilter' | 'clearCompleted'>;
