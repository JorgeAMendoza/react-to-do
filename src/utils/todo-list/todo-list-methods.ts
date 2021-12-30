import { TodoItem } from '../../types/Todo/todo-type';
import { filterState } from '../../types/Todo/filter-state';
import * as filterCallbacks from '../../utils/todo-filters/todo-filters';

type setList = (list: TodoItem[]) => void;
type setFilter = (filter: filterState) => void;

const todoListMethods = () => {
  const insertNewTask = (
    newTask: TodoItem,
    todoList: TodoItem[],
    setTodoList: setList
  ) => {
    const newList = todoList.concat(newTask);
    setTodoList(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  const clearCompleted = (todoList: TodoItem[], setTodoList: setList) => {
    const newList = todoList.filter((task) => !task.status);
    setTodoList(newList);
    localStorage.setItem('todos', JSON.stringify(newList));
  };

  const changeFilter = (filterStatus: filterState, setFilter: setFilter) =>
    setFilter(filterStatus);

  const generateTodos = (filter: filterState, todoList: TodoItem[]) => {
    if (filter === 'all')
      return todoList.filter(filterCallbacks.generateAllTodos);
    else if (filter === 'active')
      return todoList.filter(filterCallbacks.generateActiveTodos);
    else return todoList.filter(filterCallbacks.genrateCompletedTodos);
  };

  const deleteTodoItem = (
    todoID: number,
    todoList: TodoItem[],
    setTodoList: setList
  ) => {
    for (let i = 0; i < todoList.length; i += 1) {
      if (todoList[i].id === todoID) {
        const newList = todoList.slice(0, i).concat(todoList.slice(i + 1));
        setTodoList(newList);
        localStorage.setItem('todos', JSON.stringify(newList));
        return;
      }
    }
  };

  const updateTodoStatus = (
    todoID: number,
    todoList: TodoItem[],
    setTodoList: setList
  ) => {
    for (let i = 0; i < todoList.length; i += 1) {
      if (todoList[i].id === todoID) {
        const currentStatus = todoList[i].status;
        const updatedTodo = Object.assign({}, todoList[i], {
          status: currentStatus ? false : true,
        });

        const updatedList = todoList
          .slice(0, i)
          .concat(updatedTodo, todoList.slice(i + 1));
        setTodoList(updatedList);
        localStorage.setItem('todos', JSON.stringify(updatedList));
      }
    }
  };

  return {
    insertNewTask,
    clearCompleted,
    changeFilter,
    generateTodos,
    deleteTodoItem,
    updateTodoStatus,
  };
};

export { todoListMethods };
