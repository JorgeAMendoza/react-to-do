import { StyledHeader } from '../../styles/Header/Header.styled';
import { HeaderInfo } from '../../styles/Header/HeaderInfo.styled';
import { Container } from '../../styles/Utils/Container.styled';
import { Moon } from './ToggleIcons/Moon';
import { Sun } from './ToggleIcons/Sun';

interface headerProps {
  toggleTheme: () => void;
  themeValue: string;
}

export const Header = ({ toggleTheme, themeValue }: headerProps) => {
  return (
    <StyledHeader>
      <Container>
        <HeaderInfo>
          <h1>TODO</h1>
          <button onClick={() => toggleTheme()}>
            {themeValue === 'light' ? <Moon /> : <Sun />}
          </button>
        </HeaderInfo>
      </Container>
    </StyledHeader>
  );
};
