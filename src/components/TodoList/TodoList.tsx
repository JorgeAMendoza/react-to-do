import { useState } from 'react';
import { NewTask } from './NewTask/NewTask';
import { TodoDisplay } from './TodoDisplay/TodoDisplay';
import { TodoItem } from '../../types/Todo/todo-type';

export const TodoList = () => {
  const [toDoList, setToDoList] = useState<TodoItem[]>([
    { status: true, text: 'Walk the dog' },
    { status: false, text: 'Learn to read' },
    { status: false, text: 'Complete Halo 3: ODST' },
  ]);

  const insertNewTask = (newTask: TodoItem) => {
    setToDoList(toDoList.concat(newTask));
  };
  return (
    <main>
      <NewTask updateTaskList={insertNewTask} />
      <TodoDisplay todoList={toDoList} />
    </main>
  );
};
