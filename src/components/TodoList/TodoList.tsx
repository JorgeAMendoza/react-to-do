import { NewTask } from './NewTask/NewTask';
import { TodoDisplay } from './TodoDisplay/TodoDisplay';

export const TodoList = () => {
  return (
    <main>
      <NewTask />
      <TodoDisplay />
    </main>
  );
};
