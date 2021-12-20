import { useState } from 'react';
import { NewTask } from './NewTask/NewTask';
import { TodoDisplay } from './TodoDisplay/TodoDisplay';
import { TodoItem } from '../../types/Todo/todo-type';
import { filterState } from '../../types/Todo/filter-state';
import * as filterCallbacks from '../../utils/todo-filters/todo-filters';

export const TodoList = () => {
  const [toDoList, setToDoList] = useState<TodoItem[]>([
    { status: true, text: 'Walk the dog' },
    { status: false, text: 'Learn to read' },
    { status: false, text: 'Complete Halo 3: ODST' },
  ]);
  const [filter, setFilter] = useState<filterState>('active');

  // So we may need to create various functions that handle modifying parts/aspects of our todo list.
  // Updating the status of any of the todo list, basically true/false
  // Deleting an item from our todolist.

  // Handling the filter.
  // Function One, grab all of them, this function should really just return true so that when its used by filter, every item is returned into the new array.
  // Funciton two, function that checks to see if status is true.
  // Function three, function that checks to see if status if false.

  const generateTodos = (): TodoItem[] => {
    if (filter === 'all')
      return toDoList.filter(filterCallbacks.generateAllTodos);
    else if (filter === 'active')
      return toDoList.filter(filterCallbacks.generateActiveTodos);
    else return toDoList.filter(filterCallbacks.genrateCompletedTodos);
  };

  const changeFilter = (filterStatus: filterState) => setFilter(filterStatus);

  const insertNewTask = (newTask: TodoItem) => {
    setToDoList(toDoList.concat(newTask));
  };
  return (
    <main>
      <NewTask updateTaskList={insertNewTask} />
      <TodoDisplay todoList={generateTodos()} filter={changeFilter} />
    </main>
  );
};
