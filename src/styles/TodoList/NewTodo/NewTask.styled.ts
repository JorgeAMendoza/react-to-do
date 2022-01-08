import styled from 'styled-components';

export const StyledNewTask = styled.div`
  background-color: ${({ theme }) => theme.todo.backgroundColor};
  padding: 0.4em 1.5em;
  border-radius: 5px;

  form {
    display: flex;
    align-items: center;
    min-height: 4rem;
    gap: 2rem;

    label[for='Task Status'] {
      position: relative;
      width: 25px;
      height: 25px;
      border-radius: 100%;
      z-index: 0;
      cursor: pointer;
      display: block;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;

      &:hover {
        background: linear-gradient(
          150deg,
          hsl(192, 100%, 67%),
          hsl(280, 87%, 65%)
        );
      }

      &:hover input ~ span {
        border-color: transparent;
      }

      input {
        position: absolute;
        cursor: pointer;
        opacity: 0;
        height: 0;
        width: 0;
        z-index: 1;

        &:checked ~ span {
          background: linear-gradient(
            150deg,
            hsl(192, 100%, 67%),
            hsl(280, 87%, 65%)
          );
        }

        &:checked ~ span::after {
          display: block;
        }
      }

      span {
        background-color: ${({ theme }) => theme.todo.backgroundColor};
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-clip: padding-box;
        border: solid 1px #e3e4f1;
        border-radius: 100%;
        z-index: 1;

        &::after {
          content: '';
          position: absolute;
          display: none;
          left: 9px;
          top: 5px;
          width: 5px;
          height: 10px;
          border: solid white;
          border-width: 0 3px 3px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      }
    }

    input[type='text'] {
      &::placeholder {
        color: ${({ theme }) => theme.color.secondary};
      }
      min-width: 22ch;
    }
  }
`;
