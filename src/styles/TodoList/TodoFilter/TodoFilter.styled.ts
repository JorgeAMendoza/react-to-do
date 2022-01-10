import styled from 'styled-components';

export const TodoFilterStyled = styled.section`
  background-color: ${({ theme }) => theme.todo.backgroundColor};
  border-radius: 0 0 5px 5px;
  padding: 0.8em 1em;
  display: flex;
  justify-content: space-between;

  .todo-count {
    color: ${({ theme }) => theme.color.secondary};
  }

  .filter-select {
    font-weight: bold;
    color: ${({ theme }) => theme.color.secondary};

    &:hover {
      color: ${({ theme }) => theme.color.primary};
    }

    .active {
      color: ${({ theme }) => theme.color.active};
    }

    &:not(:last-child) {
      margin-right: 1.5 rem;
    }
  }

  .clear-all {
    color: ${({ theme }) => theme.color.secondary};
  }
`;
