import { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import { GlobalStyles } from './styles/Utils/Global.styled';
import { lightTheme, darkTheme } from './styles/Utils/theme';
import { ThemeProvider } from 'styled-components';

type themeType = 'light' | 'dark';

function App() {
  const [theme, setTheme] = useState<themeType>('light');

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else setTheme('light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <DndProvider backend={HTML5Backend}>
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
        <TodoList />
        <p>Drag and drop to reorder list</p>
      </DndProvider>
    </ThemeProvider>
  );
}

export default App;
