import { useState } from 'react';
import { TodoItem } from '../../../types/Todo/todo-type';
import { generateTodoID } from '../../../utils/todo-helpers/generate-id';
import { StyledNewTask } from '../../../styles/TodoList/NewTodo/NewTask.styled';

type newTaskProps = {
  updateTaskList: (newTask: TodoItem) => void;
};

export const NewTask = ({ updateTaskList }: newTaskProps) => {
  const [inputText, setInputText] = useState('');
  const [taskStatus, setTaskStatus] = useState(false);

  const createNewTodo = (): TodoItem => {
    const task = {
      status: taskStatus,
      text: inputText,
      id: generateTodoID(),
    };
    setInputText('');
    setTaskStatus(false);
    return task;
  };
  return (
    <StyledNewTask>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const newTask = createNewTodo();
          updateTaskList(newTask);
        }}
      >
        <label htmlFor="Task Status">
          <input
            id="Task Status"
            type="checkbox"
            name="taskStatus"
            checked={taskStatus}
            onChange={(e) => {
              if (e.target.checked) setTaskStatus(e.target.checked);
              else setTaskStatus(e.target.checked);
            }}
          />
          <span></span>
        </label>

        <label htmlFor="New Task Text">
          <input
            type="text"
            name="taskInfo"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onBlur={(e) => setInputText(e.target.value)}
            placeholder="Create a new todo..."
          />
        </label>
      </form>
    </StyledNewTask>
  );
};
