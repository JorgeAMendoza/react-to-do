import { TodoDisplayProps } from './todo-display-props';

type TodoOwnProps = {
  status: boolean;
  todoText: string;
  todoID: number;
  changeStatus: () => void;
};

export type TodoProps = TodoOwnProps & Pick<TodoDisplayProps, 'deleteTodo'>;
