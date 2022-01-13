import { TodoProps } from '../../../types/TodoProps/todo-props';
import { Cross } from './Cross';
import { TodoStyled } from '../../../styles/TodoList/Todo/Todo.styled';
import React from 'react';

export const ToDo = ({
  status,
  todoText,
  todoID,
  deleteTodo,
  updateTodoStatus,
  reorderList,
}: TodoProps) => {
  const startDrag = (e: React.DragEvent) => {
    e.dataTransfer.setData('todoID', todoID.toString());
  };

  const dragTodoItem = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const dropTodoItem = (e: React.DragEvent) => {
    const dropTarget = todoID;
    const droppedTarget = Number(e.dataTransfer.getData('todoID'));

    if (dropTarget === droppedTarget) {
      console.log('Same elements, so no reordering');
      return;
    } else reorderList(dropTarget, droppedTarget);
  };

  return (
    <TodoStyled
      shouldCross={status}
      draggable="true"
      onDragStart={startDrag}
      onDragOver={dragTodoItem}
      onDrop={dropTodoItem}
    >
      <label>
        <input
          type="checkbox"
          checked={status}
          onChange={() => updateTodoStatus(todoID)}
        />
        <span></span>
      </label>
      <p>{todoText}</p>
      <button onClick={() => deleteTodo(todoID)}>
        <Cross />
      </button>
    </TodoStyled>
  );
};
