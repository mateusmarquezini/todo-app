import 'gestalt/dist/gestalt.css';
import React from 'react';
import './App.css';
import Navbar from './layout/Navbar';
import Todo from './pages/Todo';

function App() {

  return (
    <>
      <Navbar />
      <Todo />
    </>
  );
}

export default App;
