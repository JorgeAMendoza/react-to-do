import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import React from 'react';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header />
      <TodoList />
      <p>Drag and drop to reorder list</p>
    </DndProvider>
  );
}

export default App;
