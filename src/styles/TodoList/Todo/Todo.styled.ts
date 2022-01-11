import styled from 'styled-components';
import { device } from '../../Utils/device';

interface TodoStyledProps {
  shouldCross: boolean;
}

export const TodoStyled = styled.li<TodoStyledProps>`
  background-color: ${({ theme }) => theme.todo.backgroundColor};
  padding: 0.8em 1em;
  display: flex;
  gap: 2rem;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.todo.borderColor};

  @media screen and ${device.laptop} {
    button {
      display: none;
    }

    &:hover {
      button {
        display: block;
      }
    }
  }

  &:first-child {
    border-radius: 5px 5px 0 0;
  }

  p {
    font-size: 1.6rem;
    text-decoration: ${({ shouldCross }) =>
      shouldCross ? 'line-through' : 'none'};
    opacity: ${({ shouldCross }) => (shouldCross ? '.5' : '1')};
    @media screen and ${device.laptop} {
      font-size: 1.8rem;
    }
  }

  button {
    margin-left: auto;
  }

  label {
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

      &:checked + p {
        border: 1px solid black;
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
`;
