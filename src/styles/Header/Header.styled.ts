import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 4rem 0;
  border: 1px solid black;

  svg:hover {
    fill: ${({ theme }) => theme.color.active};
  }
`;
