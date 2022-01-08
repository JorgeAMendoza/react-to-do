import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 4rem 0;

  svg:hover {
    fill: ${({ theme }) => theme.color.active};
  }
`;
