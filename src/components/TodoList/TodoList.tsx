import { useState } from 'react';
import { NewTask } from './NewTask/NewTask';
import { TodoDisplay } from './TodoDisplay/TodoDisplay';
import { TodoItem } from '../../types/Todo/todo-type';
import { filterState } from '../../types/Todo/filter-state';
import * as filterCallbacks from '../../utils/todo-filters/todo-filters';
import { generateTodoID } from '../../utils/todo-helpers/generate-id';

export const TodoList = () => {
  const [toDoList, setToDoList] = useState<TodoItem[]>([
    { status: true, text: 'Walk the dog', id: generateTodoID() },
    { status: false, text: 'Learn to read', id: generateTodoID() },
    { status: false, text: 'Complete Halo 3: ODST', id: generateTodoID() },
  ]);
  const [filter, setFilter] = useState<filterState>('all');

  const updateTodoStatus = (todoID: number) => {
    for (let i = 0; i < toDoList.length; i += 1) {
      if (toDoList[i].id === todoID) {
        const currentStatus = toDoList[i].status;
        const updatedTodo = Object.assign({}, toDoList[i], {
          status: currentStatus ? false : true,
        });

        const updatedList = toDoList
          .slice(0, i)
          .concat(updatedTodo, toDoList.slice(i + 1));
        setToDoList(updatedList);
      }
    }
  };

  const generateTodos = (): TodoItem[] => {
    if (filter === 'all')
      return toDoList.filter(filterCallbacks.generateAllTodos);
    else if (filter === 'active')
      return toDoList.filter(filterCallbacks.generateActiveTodos);
    else return toDoList.filter(filterCallbacks.genrateCompletedTodos);
  };

  const changeFilter = (filterStatus: filterState) => setFilter(filterStatus);

  const deleteTodoItem = (todoID: number) => {
    for (let i = 0; i < toDoList.length; i += 1) {
      if (toDoList[i].id === todoID) {
        const newList = toDoList.slice(0, i).concat(toDoList.slice(i + 1));
        setToDoList(newList);
        return;
      }
    }
  };

  const insertNewTask = (newTask: TodoItem) => {
    setToDoList(toDoList.concat(newTask));
  };

  const clearCompleted = () => {
    const onlyActiveTask = toDoList.filter((task) => !task.status);
    setToDoList(onlyActiveTask);
  };
  return (
    <main>
      <NewTask updateTaskList={insertNewTask} />
      <TodoDisplay
        todoList={generateTodos()}
        setFilter={changeFilter}
        deleteTodo={deleteTodoItem}
        clearCompleted={clearCompleted}
        updateTodoStatus={updateTodoStatus}
      />
    </main>
  );
};
