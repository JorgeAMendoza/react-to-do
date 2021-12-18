import { Header } from './components/Header/Header';
import { TodoList } from './components/TodoList/TodoList';
import React from 'react';

function App() {
  return (
    <>
      <Header />
      <TodoList />
      <p>Drag and drop to reorder list</p>
    </>
  );
}

export default App;
