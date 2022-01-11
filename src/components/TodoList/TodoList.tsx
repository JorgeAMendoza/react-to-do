import { useState, useEffect } from 'react';
import { NewTask } from './NewTask/NewTask';
import { TodoDisplay } from './TodoDisplay/TodoDisplay';
import { TodoItem } from '../../types/Todo/todo-type';
import { filterState } from '../../types/Todo/filter-state';
import { todoListMethods } from '../../utils/todo-list/todo-list-methods';
import { Container } from '../../styles/Utils/Container.styled';

const listMethods = todoListMethods();

export const TodoList = () => {
  const [todoList, setToDoList] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<filterState>('all');

  useEffect(() => {
    const localStorageTodos = localStorage.getItem('todos');
    if (localStorageTodos) setToDoList(JSON.parse(localStorageTodos));
    else return;
  }, []);

  const insertNewTodo = (newTask: TodoItem) =>
    listMethods.insertNewTask(newTask, todoList, setToDoList);

  const clearCompletedTodos = () =>
    listMethods.clearCompleted(todoList, setToDoList);

  const changeTodoListFilter = (newFilter: filterState) =>
    listMethods.changeFilter(newFilter, setFilter);

  const generateTodoList = () => listMethods.generateTodos(filter, todoList);

  const deleteTodo = (todoID: number) =>
    listMethods.deleteTodoItem(todoID, todoList, setToDoList);

  const updateTodoStatus = (todoID: number) =>
    listMethods.updateTodoStatus(todoID, todoList, setToDoList);

  return (
    <main>
      <Container>
        <NewTask updateTaskList={insertNewTodo} />
        <TodoDisplay
          todoList={generateTodoList()}
          setFilter={changeTodoListFilter}
          filter={filter}
          deleteTodo={deleteTodo}
          clearCompleted={clearCompletedTodos}
          updateTodoStatus={updateTodoStatus}
        />
      </Container>
    </main>
  );
};
