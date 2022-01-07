import styled from 'styled-components';

export const HeaderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: ${({ theme }) => theme.color.light};
    letter-spacing: 16px;
  }
`;
