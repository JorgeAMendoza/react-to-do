import { useState } from 'react';
import { NewTask } from './NewTask/NewTask';
import { TodoDisplay } from './TodoDisplay/TodoDisplay';
import { TodoItem } from '../../types/Todo/todo-type';

export const TodoList = () => {
  const [toDoList, setToDoList] = useState<TodoItem[]>([]);

  const insertNewTask = (newTask: TodoItem) => {
    setToDoList(toDoList.concat(newTask));
  };
  return (
    <main>
      <NewTask updateTaskList={insertNewTask} />
      <TodoDisplay />
    </main>
  );
};
