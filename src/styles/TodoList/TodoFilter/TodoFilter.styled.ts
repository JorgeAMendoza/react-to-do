import styled from 'styled-components';

interface TodoFilterStyledProps {
  todoCount: number;
}

export const TodoFilterStyled = styled.section<TodoFilterStyledProps>`
  .todo-filter {
    background-color: ${({ theme }) => theme.todo.backgroundColor};
    padding: 0.8em 1em;
    display: flex;
    justify-content: space-between;
    border-radius: ${({ todoCount }) =>
      todoCount === 0 ? '5px' : '0 0 5px 5px'};

    &--mobile {
      background-color: ${({ theme }) => theme.todo.backgroundColor};
      padding: 1em;
      display: flex;
      justify-content: center;
      margin-top: 2rem;
      border-radius: 5px;
    }
  }

  .todo-count {
    color: ${({ theme }) => theme.color.secondary};
  }

  .filter-select {
    font-weight: bold;
    color: ${({ theme }) => theme.color.secondary};

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }

    &.active {
      color: ${({ theme }) => theme.color.active};
    }

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  .clear-all {
    color: ${({ theme }) => theme.color.secondary};

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }
  }
`;
