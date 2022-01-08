import styled from 'styled-components';

export const StyledNewTask = styled.div`
  background-color: ${({ theme }) => theme.todo.backgroundColor};
  padding: 0.4em;
  border-radius: 5px;

  form {
    display: flex;
    align-items: center;
    min-height: 4rem;
    border: 1px solid black;
    gap: 2rem;

    input {
    }

    input[type='text'] {
      &::placeholder {
        color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`;
